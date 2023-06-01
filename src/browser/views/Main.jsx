import React, { useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import css from "./css/main.css";
import Start from "../../start";
import 'swiper/css';
import Swiper from "swiper";





function Line(props) {
    return (
        <div className="line">
            <div className="l_service">{props.service}</div>
            <span>............................................................................................................................................................................................................................................................................................................................................................................</span>
            <div className="price">{props.price + " " + props.currency}</div>
        </div>
        
    ) 
}
function Li(props) {
    return (
        <li>{props.text}</li>
    )
}
function ServiceBlock(props) {
    let list = [];

    for (let i = 0; i < props.list.length; i++) {
        const element = props.list[i];
        list.push(<Li text={element} />);
    } 

    return (
        <div className="service">
            <div className="title">
                {props.title}
            </div>
            <span className="line_x"></span>
            <ul className="list">
               {list}
            </ul>
        </div>
    )
}
function Letter(props) {
    return (
        <span className="letter">{props.letter}</span>
    )
}
function Dentist(props) {
    return (
        <div className={"dentist off prioriti_" + props.priority + " _" + props.num + " " + props.side} id={"d_" + props.id} data-clone={props.clone}>
            <img src={props.img}  alt="" />                                
        </div>
    )
}
function Br(props) {
    return (
        <br />        
    )
}

function Part(props) {
    return (
        <div className="part">
            <div className="t_title">{props.title}</div>
            {props.services}
        </div>
    )
}

function DentistInfo(props) {
    
    let text = [""];
    let found = 0;
    let information = [];

    for (let i = 0; i < props.info.length; i++) {
        const element = props.info[i];
        let pre_text = text[text.length-1];
        if (element == "<") {
            found = 1;
            continue;
        } else if (found == 1 && element == "n") {
            text.push("");
            found = 0;
            continue;
        }
        found = 0;
        text[text.length-1] = pre_text + element;
    }

    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        information.push(element);
        information.push(<Br />);
    }

    if (props.side == "right") {
        return (
            <div className={"dentist_information i_"+ props.num +" t_left"}>
                <div className="dentist_name">{props.name}</div>
                <span></span>
                <div className="text">
                    <span>
                        {information}
                    </span>
                </div>
            </div>
        )
    } else {
        return (
            <div className={"dentist_information i_"+ props.num +" t_right"}>
                <div className="dentist_name">{props.name}</div>
                <span></span>
                <div className="text">
                    <span>
                        {information}
                    </span>
                </div>
            </div>
        )
    }
    
}


function Main(props) {
    const currency = props.pack.currency;
    const letters = [];
    const services = [];
    const serviceBlocks = [];
    const dentists = [];
    const priceList = [];

    
    
    
    

    for (let i = 0; i < props.pack.priceList.length; i++) {      
            const element = props.pack.priceList[i];
            services[i] = [];
            for (let k = 0; k < element.length; k++) {
                const obj = element[k];
                services[i].push(<Line service={obj["service"]} price={obj["price"]} currency={currency} />)
            }
    }

    for (let i = 0; i < services.length; i++) {
        const serv = services[i];
        const el_title = props.pack.priceListTitles[i];

        priceList.push(<Part title={el_title} services={serv} />);
    }
    

    for (let i = 0; i < props.pack.letters.length; i++) {
        const element = props.pack.letters[i];
        letters.push(<Letter letter={element} />);
    }
      
    for (let i = 0; i < props.pack.services.length; i++) {
        const element = props.pack.services[i];
        serviceBlocks.push(<ServiceBlock title={element.title} list={element.serviceList} />);
    }

    for (let i = 0; i < props.pack.dentists.length; i++) {
        const den_obj = props.pack.dentists[i];
        dentists.push(<Dentist id={den_obj.id} clone={den_obj.cloneName} priority={den_obj.priority} num={i+1} side={den_obj.side} img={den_obj.img} />);
        dentists.push(<DentistInfo info={den_obj.info} name={den_obj.name} num={i+1} side={den_obj.side} />);
    }
    


    return (
        <main>
            <div className="blocking on">
                <div className="loading on"><img src="/img/loading.gif" alt="loading..." /></div>
                <div className="blocked disable">
                    <div className="lock"><img src="/img/lock.png" alt="lock" /></div>
                    <div className="massage">{props.pack.errMassage}</div>
                </div>
            </div>
            <div className="sidebar off">
                        {/* <div className={cl.burger+ " " +cl.on} onClick={addClass}>
                            <span className={cl.s_1}></span>
                            <span className={cl.s_2}></span>
                            <span className={cl.s_3}></span>
                        </div> */}
                        <div className="side_nav">
                            <span></span>
                            <div className="block _1 active" data-hint="home" id="home"><img src="/img/four-boxes.png" alt="home" /></div>
                            <div className="block _2" data-hint="staff" id="staff"><img src="/img/staff.png" alt="staff" /></div>
                            <div className="block _3" data-hint="services" id="services"><img src="/img/servises.png" alt="services" /></div>
                            <div className="block _4" data-hint="info" id="info"><img src="/img/info.png" alt="info" /></div>
                            <div className="block _5" data-hint="blogs" id="blog"><img src="/img/blog.png" alt="blog" /></div>
                            <div className="lang" id="language">
                                <span class="material-symbols-outlined clickable" data-hint="language" >language</span>
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
                <div className="main_comment">
                    {props.pack.comment}
                </div>
                
            
                

                <div className="home" id="1">
                    <div className="content">
                        <div className="name" id="name">
                            <div className="title">abclinic.uz</div>
                            <span></span>
                            <div className="subtitle">{props.pack.subTitle}</div> 
                        </div>
                        
                        
                    </div>
                    
                    <div className="win_logo" title="abclinic"><img src="/img/ablogo.png" alt="logo" /></div>

                    <a href="https://yandex.ru/maps/org/9426831655" target="_blank" rel="noreferrer noopener" className="location hidden">
                        <span class="material-symbols-outlined">location_on</span>
                        {props.pack.location} 
                    </a>

                    <span className="arrow"></span>
                    <div className="shadow"></div>
                </div>


                <div className="staff" id="2">
                        <div className="next_button hidden"><img src="/img/next.png" alt="" /></div>
                        <div className="prev_button hidden"><img src="/img/next.png" alt="" /></div>
                        <div className="back_button"><img src="/img/back.png" className="clickable" alt="" /></div>
                        <div className="shadow"></div>
                        <div className="team">
                            {letters}
                        </div>
                        {/* ------------------------------- */}
                        <div className="fog _1 off">
                            <img src="/img/fog.png" alt="fog" />
                        </div>
                        <div className="fog _2 off">
                            <img src="/img/fog.png" alt="fog" />
                        </div>
                        <div className="fog _3 off">
                            <img src="/img/fog.png" alt="fog" />
                        </div> 
                        {/* ------------------------------- */}
                        <div className="dentists">
                            {dentists}
                        </div>
                        {/* ------------------------------- */}
                        <div className="clone cPrioriti-2" id="Abdukhamid">
                            <img src="/img/Abdukhamid.png" className="cloneImg" alt="dentist" />
                        </div>
                        <div className="clone cPrioriti-1" id="Ibrohim">
                            <img src="/img/Ibrohim.png" className="cloneImg" alt="dentist" />
                        </div>
                        <div className="clone cPrioriti-3 incorrect" id="Viktoria">
                            <img src="/img/Viktoria.png" className="cloneImg" alt="dentist" />
                        </div>
                        <div className="clone cPrioriti-2" id="Mansur">
                            <img src="/img/Mansur.png" className="cloneImg" alt="dentist" />
                        </div>
                        <div className="clone cPrioriti-3" id="Tatiana">
                            <img src="/img/Tatiana.png" className="cloneImg" alt="dentist" />
                        </div>
                        <div className="clone cPrioriti-main" id="Director">
                            <img src="/img/director.png" className="cloneImg" alt="dentist" />
                        </div>
                        <div className="clone cPrioriti-main" id="Xursand">
                            <img src="/img/Xursand.png" className="cloneImg" alt="dentist" />
                        </div>
                        
                </div>

                <div className="services" id="3">
                    <div className="shadow"></div>
                    
                    <div className="services_block">
                        {serviceBlocks[0]}
                        {serviceBlocks[1]}
                        {serviceBlocks[2]}                        
                    </div>
                    <div className="priceList_table">
                        <div className="open">Price list</div>
                        {priceList}
                    </div>
                        
                    
                </div>

                
                <div className="info" id="4">
                    <div className="info_back">
                        <img src="/img/info.jpg" alt="info"/>
                        <div className="shadow"></div>
                        <div className="back_title">
                            <div className="main_t">Welcome to abclinic.uz</div>
                        </div>
                    </div>
                    <div className="information">
                        {/* <div className="theme">
                            <div className="theme_title">О нас</div>
                            <div className="article">
                                <div className="article_title">Открытие</div>
                                <div className="article_content">
                                    <div className="atext"></div>
                                    <div className="article_img"></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                
                <div className="blog" id="5">
                    <div className="blog_sidebar">
                        <div className="blog_list">
                            <div className="btitle">BLOGS</div>
                            <div className="blog_container">
                                <NavLink to={"/"+ `${props.pack.lang}` +"/beforeafter"}  className="category">
                                    <div className="category_photo">
                                        <img src="/img/BeAfter.jpg" alt="Before/After" />
                                        <div className="category_sahdow"></div>
                                        <div className="photo_text">До/После</div>
                                    </div>
                                    <div className="description">
                                        Фотографии работ в виде До/После
                                    </div>
                                </NavLink>
                                <NavLink to={"/"+ `${props.pack.lang}` +"/moments"} className="category">
                                    <div className="category_photo">
                                        <img src="/img/oda moments.jpg" alt="ODA" />
                                        <div className="category_sahdow"></div>
                                        <div className="photo_text">Moments</div>
                                    </div>
                                    <div className="description">
                                        Бесплатная имплантация 2023 "ORIGIN DENTAL ACADEMY"
                                    </div>
                                </NavLink>
                                {/* <NavLink to={"/"+ `${props.pack.lang}` +"/works"} className="category">
                                    <div className="category_photo">
                                        <div className="category_sahdow"></div>
                                    </div>
                                    <div className="description">
                                        Фотографии работ в виде До/После.
                                    </div>
                                </NavLink>  */}
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="pre_text" data-empty="Пока что пусто">Выберите категорию</div>
                        {props.blog}
                    </div>
                    <div className="background" id="b_blog"></div>
                </div>
                


                <a href="https://instagram.com/abclinic.uz?igshid=MDM4ZDc5MmU=" data-hint="instagram" target="_blank" rel="noreferrer noopener" className="insta social_media"><img src="/img/Instagram_logo.png" alt="Instagram" /></a>   
                <a href="https://youtube.com" data-hint="youtube" target="_blank" rel="noreferrer noopener" className="youtube social_media"><img src="/img/youtube_logo.png" alt="Youtube" /></a>
                <a href="https://t.me/abclinic_uz" data-hint="telegram" target="_blank" rel="noreferrer noopener" className="telegram social_media"><img src="/img/telegram_logo.png" alt="Telegram" /></a>
            </div>
        </main>
                    


    )
}

export default Main;