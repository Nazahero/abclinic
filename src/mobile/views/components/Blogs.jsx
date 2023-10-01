import { useRef } from "react";
import { usePackage } from "../../../hooks/usePackage";
import { NavLink } from "react-router-dom";
import Swiper, { Navigation }  from "swiper";

function Category(props) {


    return (
        <NavLink to={"/"+ `${props.lang}` +"/" + props.guid} className="category">
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
    for (let i = 0; i < pack?.length && props?.lang; i++) {
        const category = pack[i];
        categories.push(<Category lang={props?.lang} img={category.img} title={category.title} description={category.description} guid={category.guid} />);
    }

    categories.push(<div className="nodiv" style={{display: "none"}}></div>)


    return (
        <div className="blog page" id="4">
            <div className="back_photo">
                <img src="/mobileImg/blog_photo.jpg" alt="clinic" />
                <div className="shadow"></div>
            </div>
            <div className="blog_sidebar">
                <div className="blog_list">
                    <div className="btitle">BLOGS</div>
                    <div className="blog_container">
                        {categories}
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="pub_back"><img src="/mobileImg/back.png" alt="back" /></div>
                <div className="pre_text" data-empty="Пока что пусто">Пока что пусто</div>
                {props.blog}
            </div>
            <div className="background" id="b_blog"></div>
        </div>
    )
}

export default Blogs;