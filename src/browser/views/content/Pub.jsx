import React, { useLayoutEffect, useRef } from 'react';
import Swiper, { Navigation }  from "swiper";
import { usePackage } from '../../../hooks/usePackage';

function SwiperImg(props) {
    return (
        <div className="slide swiper-slide">
            <img src={props.src} className="pub_photo " alt="job" />
        </div>
    )
}

function VideoEl(props) {
    const pub = props.public;
    const author = props.author;

    return (
        <div className="pub">
            <div className="pub_title">{pub?.title}</div>
            <div className="pub_photos video" type={pub?.type}>
                <video src={pub?.video} controls></video>
            </div>
        
            <div className="pub_text">
                <div className={ author?.img ? "avatar" : "avatar no_ava"}>
                    {author?.img ? <img src={"data:photo/png;base64," + author.img} alt="" /> : <img src="/img/donut.png" alt="" /> }
                </div>
                <div className="author_name">{author?.name}</div>
                {pub?.text}
            </div>
        </div>
    )
}

function SwiperEl(props) {
    const pub = props.public;
    const author = props.author;
    const swiper_content = [];

    for (let i = 0; i < pub.img.length; i++) {
        const img = pub.img[i];
        swiper_content.push(<SwiperImg key={888 + i} src={img.url} />);
    }

    return (
        <div className="pub">
            <div className="pub_title">{pub?.title}</div>
            <div className="pub_photos swiper" type={pub?.type}>
                <div className="swiper-wrapper">
                    {swiper_content}
                </div>
                <div className="next_slide"><img src="/img/next.png" alt="prev" /></div>
                <div className="prev_slide"><img src="/img/next.png" alt="next" /></div>
            </div>
            <div className="pub_text">
                <div className={ author?.img ? "avatar" : "avatar no_ava"}>
                    {author?.img ? <img src={"data:photo/png;base64," + author.img} alt="" /> :  <img src="/img/donut.png" alt="" /> }
                </div>
                <div className="author_name">{author?.name}</div> 
                {pub?.text}
            </div>
        </div>
    )
}

export const Pub = props => {
    const {info} = usePackage();
    const authors = info?.authors; 
    const swiperRef = useRef(null);
    const publications = props.pubs;
    const content = [];

    for (let i = 0; i < authors?.length; i++) {
        const author = authors[i];
        for (let g = 0; g < publications.length; g++) {
            const publication = publications[g];
            
            if (author?.guid == publication?.author?.guid) {
                publication["author"] = author;
            }
        }
    }


    if (publications) {
        for (let i = 0; i < publications.length; i++) {
            const publication = publications[i];
            if (publication.type == "swiper") {
                content.push(<SwiperEl key={999 + i} public={publication} author={publication?.author} />);
            } else if (publication.type == "video") {
                content.push(<VideoEl key={999 + i} public={publication} author={publication?.author} />);
            }
        } 
    }
    


    useLayoutEffect(() => {
        Swiper.use([Navigation]);
        swiperRef.current = new Swiper('.pub_photos[type="swiper"]', {
            
            navigation: {
               nextEl: ".next_slide",
               prevEl: ".prev_slide"
            },
          
      
            slidesPerView: 2,
            slideToClickedSlide: true,
            initialSlide: 1,  
            centeredSlides: true,
            spaceBetween: window.innerWidth * 0.04,
            slideActiveClass: "active_slide",
        });
  
        return () => {
          if (swiperRef.current) {
            // swiperRef.current?.destroy();
          }
        };
    }, []);

    return (
        <div className="publications">
            {content}
        </div>
    )
}
