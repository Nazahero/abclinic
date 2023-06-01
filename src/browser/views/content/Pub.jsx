import React, { useEffect, useRef } from 'react';
import Swiper, { Navigation }  from "swiper";

function SwiperImg(props) {
    return (
        <img src={props.src} className="pub_photo swiper-slide" alt="job" />
    )
}

function SwiperEl(props) {
    const pub = props.public;
    const swiper_content = [];
    const likes = [];

    // if (pub.like > 0) {
    //     likes.push(<div className="count">{pub.like}</div>);
    // }

    for (let i = 0; i < pub.img.length; i++) {
        const img = pub.img[i];
        swiper_content.push(<SwiperImg src={img.url} />);
    }

    return (
        <div className="pub">
            <div className="pub_title">{pub.title}</div>
            <div className="pub_photos swiper" type={pub.type}>
                <div className="swiper-wrapper">
                    {swiper_content}
                </div>
                <div className="next_slide"><img src="/img/next.png" alt="prev" /></div>
                <div className="prev_slide"><img src="/img/next.png" alt="next" /></div>
            </div>
            <div className="pub_text">{pub.description}</div>
            <div className="pub_nav">
                <div className="like">
                    <img src="/img/like-off.png" status="off" />
                    {likes}
                </div>
                <div className="comments"><img src="/img/comment.png" /></div>
            </div>
        </div>
    )
}

export const Pub = React.memo(props => {

    const swiperRef = useRef(null);
    const publications = props.pubs;
    const content = [];

    if (publications) {
        for (let i = 0; i < publications.length; i++) {
            const publication = publications[i];
            if (publication.type == "swiper") {
                content.push(<SwiperEl public={publication} />);
            }
        }
    }
    

    useEffect(() => {
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
  
        // Clean up the Swiper instance when the component is unmounted
        return () => {
          if (swiperRef.current) {
            swiperRef.current.destroy();
          }
        };
      }, []);

    return (
        <div className="publications">
            {content}
        </div>
    )
})
