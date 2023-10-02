import { usePackage } from '../../hooks/usePackage';
import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import axios from '../../api/api';
import useStart from "../../start";
import Home from "./components/Home";
import Staff from './components/Staff';
import Services from './components/Services';
import Info from './components/Info';
import Blogs from './components/Blogs';
import "./css/main.css";
import 'swiper/css';
import { PuffLoader } from 'react-spinners';




function Main(props) {
    const { info, setInfo } = usePackage();
    const [loading, setLoading] = useState(true);
    const Background = useRef(null);
    const Js = useStart();
    const staff = [];

    const unique = { key: 1 }



    useEffect(() => {
        info["package"] = props.pack;
        info["categories"] = props.categories;
        setInfo(info);
        return
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
        <main>
            {
                loading ?
                    (
                        <div className="blocking on">
                            <PuffLoader color='#36d7b7' size={window.innerWidth * 0.1} />
                        </div>
                    ) : ""
            }

            <div className="sidebar off">
                <div className="side_nav">
                    <span></span>
                    <div className="block _1 active" data-hint="home" id="home"><img src="/img/four-boxes.png" alt="home" /></div>
                    <div className="block _2" data-hint="staff" id="staff"><img src="/img/staff.png" alt="staff" /></div>
                    <div className="block _3" data-hint="services" id="services"><img src="/img/servises.png" alt="services" /></div>
                    <div className="block _4" data-hint="info" id="info"><img src="/img/info.png" alt="info" /></div>
                    <div className="block _5" data-hint="blogs" id="blog"><img src="/img/blog.png" alt="blog" /></div>
                    {/* <div className="lang" id="language">
                        <span className="material-symbols-outlined clickable" data-hint="language" >language</span>
                        <div className="lang_list hidden">
                            <NavLink to="/ru" className="lang_block" id="ru">ru</NavLink>
                            <span className="lang_line"></span>
                            <NavLink to="/en" className="lang_block" id="en">en</NavLink>
                            <span className="lang_line"></span>
                            <NavLink to="/uz" className="lang_block" id="uz">uz</NavLink>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="container">
                <div className="background" id="b_services"><img src="/img/services.jpg" alt="" /></div>
                <div className="background onthis" id="b_home"><img ref={Background} src={window.innerWidth > 1980 ? "/img/big cab high quality.jpg" : "/img/big cab.jpg"} alt="" /></div>
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





                
            </div>
        </main>



    )
}

export default Main;