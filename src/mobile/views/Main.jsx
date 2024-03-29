import React , { useEffect, useRef , useState } from "react";
import { usePackage } from '../../hooks/usePackage';
import "./css/main.css";   
import Start from "../../start";
import Home from "./components/Home";
import Staff from "./components/Staff";
import Services from "./components/Services";
import Info from "./components/Info";
import Blogs from "./components/Blogs";
import { PuffLoader } from 'react-spinners';


function Main(props) {
    const {info , setInfo} = usePackage();
    const [loading, setLoading] = useState(true);
    const Background = useRef(null);
    const container = useRef(null);
    const logo = useRef(null);
    const Js = Start();


    useEffect(() => {
        info["package"] = props.pack;
        info["categories"] = props.categories;
        setInfo(info);
        container.current.setAttribute("style", `transform: translate(-${window.innerWidth * 2 }px, 0)`);
        logo.current.setAttribute("style", `transform: translate(${window.innerWidth * 2 }px, 0)`);
    }, []);

    useEffect(() => {
        let ok = false;
        setTimeout(() => {
            ok = true;
        }, 1000)
        if (Background.current) {
            Background.current.onload = function (e) {
                const wait = setInterval(() => {
                    if (ok) {
                        setLoading(false);
                        Js();
                        clearInterval(wait);
                    }
                }, 100)                                
            }
        }
    }, [Background]);
    

    return (
        
        <div className="wrapper">
            {
                loading ?
                    (
                        <div className="blocking on">
                            <PuffLoader color='#36d7b7' size={window.innerHeight * 0.15} />
                        </div>
                    ) : ""
            }
            

            <div className="sidebar off">
                        <div className="side_nav">
                            <span className="_"></span>
                            <div className="block _4" data-hint="info" id="info"><img src="/mobileImg/info.png" alt="info" /></div>
                            <div className="block _2" data-hint="staff" id="staff"><img src="/mobileImg/staff.png" alt="staff" /></div>
                            <div className="block _1 active" data-hint="home" id="home"><img src="/mobileImg/four-boxes.png" alt="home" /></div>
                            <div className="block _3" data-hint="services" id="services"><img src="/mobileImg/servises.png" alt="services" /></div>
                            <div className="block _5" data-hint="blogs" id="blog"><img src="/mobileImg/blog.png" alt="blog" /></div>
                        </div>
            </div>
            <div className="container" ref={container}>
                <div className="win_logo" ref={logo} title="abclinic"><img src="/mobileImg/ablogo.png" alt="logo" /></div>
                
                
                <Info />
                <Staff />
                <Home Background={Background} />
                <Services />
                <Blogs blog={props.blog} categories={props.categories} lang={props?.pack.lang} />
                
                


                <a href="https://instagram.com/abclinic.uz?igshid=MDM4ZDc5MmU=" data-hint="instagram" target="_blank" rel="noreferrer noopener" className="insta social_media high"><img src="/mobileImg/Instagram_logo.png" alt="Instagram" /></a>   
                <a href="https://youtube.com" data-hint="youtube" target="_blank" rel="noreferrer noopener" className="youtube social_media high"><img src="/mobileImg/youtube_logo.png" alt="Youtube" /></a>
                <a href="https://t.me/abclinic_uz" data-hint="telegram" target="_blank" rel="noreferrer noopener" className="telegram social_media high"><img src="/mobileImg/telegram_logo.png" alt="Telegram" /></a>
                <a href="https://yandex.ru/maps/org/9426831655" data-hint="location" target="_blank" rel="noreferrer noopener" className="location social_media high"><img src="/mobileImg/location.png" alt="Location" /></a>
                
            </div>
            <div className="blog_view">
                <div className="images">
                    
                </div>
                <div className="view_back"></div>
                <div className="blog_shadow"></div>
                <div className="next_slide"><img src="/img/next.png" alt="prev" /></div>
                <div className="prev_slide"><img src="/img/next.png" alt="next" /></div>
            </div>        
        </div>
                    

    )
}

export default Main;