import { usePackage } from '../../hooks/usePackage';
import { NavLink } from "react-router-dom";
import React, { useEffect } from 'react';
import axios from '../../api/api';
import Start from "../../start";
import Home from "./components/Home";
import Staff from './components/Staff';
import Services from './components/Services';
import Info from './components/Info';
import Blogs from './components/Blogs';
import "./css/main.css";
import 'swiper/css';




function Main(props) {
    const {info , setInfo} = usePackage();
    console.log(props);
    const staff = [];

    const unique = {key: 1}

    

    useEffect(() => {
        info["package"] = props.pack;
        info["categories"] = props.categories;
        setInfo(info);
        return
    }, []);
    


    return (
        <main>
            <div className="blocking on">
                <div className="loading on"><img src="/img/loading.gif" alt="loading..." /></div>
                <div className="blocked disable">
                    <div className="lock"><img src="/img/lock.png" alt="lock" /></div>
                    <div className="massage">{props?.pack?.errMassage}</div>
                </div>
            </div>
            <div className="sidebar off">
                        <div className="side_nav">
                            <span></span>
                            <div className="block _1 active" data-hint="home" id="home"><img src="/img/four-boxes.png" alt="home" /></div>
                            <div className="block _2" data-hint="staff" id="staff"><img src="/img/staff.png" alt="staff" /></div>
                            <div className="block _3" data-hint="services" id="services"><img src="/img/servises.png" alt="services" /></div>
                            <div className="block _4" data-hint="info" id="info"><img src="/img/info.png" alt="info" /></div>
                            <div className="block _5" data-hint="blogs" id="blog"><img src="/img/blog.png" alt="blog" /></div>
                            <div className="lang" id="language">
                                <span className="material-symbols-outlined clickable" data-hint="language" >language</span>
                                <div className="lang_list hidden">
                                        <NavLink to="/ru" className="lang_block" id="ru">ru</NavLink>
                                        <span className="lang_line"></span> 
                                        <NavLink to="/en" className="lang_block" id="en">en</NavLink>
                                        <span className="lang_line"></span> 
                                        <NavLink to="/uz" className="lang_block" id="uz">uz</NavLink>
                                </div>
                            </div> 
                        </div>
            </div>
            <div className="container">
                <div className="background" id="b_services"><img src="/img/services.jpg" alt="" /></div>
                <div className="background onthis" id="b_home"><img onLoad={Start()} src="/img/big cab.jpg" alt="" /></div>
                <div className="background" id="b_staff"><img src="/img/background.jpg" alt="" /></div>
                <div className="hint" id="hint"></div>
                
                
            
                
                <Home />

                <Staff />

                <Services />          

                <Info />
                
                <Blogs blog={props.blog} categories={props.categories} />
                
                
                <div className="blog_view">
                    <div className="images">
                        
                    </div>
                    <div className="view_back"></div>
                    <div className="blog_shadow"></div>
                    <div className="next_slide"><img src="/img/next.png" alt="prev" /></div>
                    <div className="prev_slide"><img src="/img/next.png" alt="next" /></div>
                </div>

                
               


                <a href="https://instagram.com/abclinic.uz?igshid=MDM4ZDc5MmU=" data-hint="instagram" target="_blank" rel="noreferrer noopener" className="insta social_media"><img src="/img/Instagram_logo.png" alt="Instagram" /></a>   
                <a href="https://youtube.com" data-hint="youtube" target="_blank" rel="noreferrer noopener" className="youtube social_media"><img src="/img/youtube_logo.png" alt="Youtube" /></a>
                <a href="https://t.me/abclinic_uz" data-hint="telegram" target="_blank" rel="noreferrer noopener" className="telegram social_media"><img src="/img/telegram_logo.png" alt="Telegram" /></a>
            </div>
        </main>
                    


    )
}

export default Main;