import { useRef } from "react";
import { usePackage } from "../../../hooks/usePackage";
import { NavLink } from "react-router-dom";
import Swiper, { Navigation }  from "swiper";

function Category(props) {
    const swiperRef = useRef(null);

    function SwiperUpdate() {

        setTimeout(() => { 
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
                  swiperRef.current.destroy();
                }
              };
        }, 200);
    }

    return (
        <NavLink to={"/"+ `${props.lang}` +"/" + props.guid} onClick={SwiperUpdate} className="category">
            <div className="category_photo">
                <img src={`${props.img}`} alt="category" />
                <div className="category_shadow"></div>
                <div className="photo_text">{props.title}</div>
            </div>
            <div className="description">
                {props.description}
            </div>
        </NavLink>
    )
}

const Blogs = (props) => {
    const { info } = usePackage();
    const langPackage = info.package;
    const pack = props?.categories;
    const categories = [];
    for (let i = 0; i < pack?.length; i++) {
        const category = pack[i];
        categories.push(<Category lang={langPackage?.lang} img={category.img} title={category.title} description={category.description} guid={category.guid} />);
    }

    return (
        <div className="blog" id="5">
            <div className="blog_sidebar">
                <div className="blog_list">
                    <div className="btitle">BLOGS</div>
                    <div className="blog_container">
                        {categories}
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="pre_text" data-empty="Пока что пусто">Выберите категорию</div>
                {props.blog}
            </div>
            <div className="background" id="b_blog"></div>
        </div>
    )
}

export default Blogs;