import React from "react";
// import { NavLink } from "react-router-dom";
import css from  "./css/main.css";   
import Start from "../../start";


function Line(props) {
    return (
        <div className="line">
            <div className="l_service"><span>{props.service}</span></div>
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
        <div className={"service" + " " + `ser_${props.id}`} data-service={props.id}>
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

function Main(props) {
    const currency = props.pack.currency;
    let letters = [];
    let services = {};
    let serviceBlocks = [];

    console.log(props.pack.currency);


    for (const key in props.pack.priceList) {      
            const element = props.pack.priceList[key];
            services[key] = [];
            for (let i = 0; i < element.length; i++) {
                const obj = element[i];
                services[key].push(<Line service={obj["service"]} price={obj["price"]} currency={currency} />)
            }
    }

    for (let i = 0; i < props.pack.letters.length; i++) {
        const element = props.pack.letters[i];
        letters.push(<Letter letter={element} />);
    }
      
    for (let i = 0; i < props.pack.services.length; i++) {
        const element = props.pack.services[i];
        serviceBlocks.push(<ServiceBlock title={element.title} id={i+1} list={element.serviceList} />);
    }
    

    return (
        
        <main>
            <div className="blocking on">
                <div className="loading on"><img src="./img/loading.gif" alt="loading..." /></div>
                <div className="blocked disable">
                    <div className="lock"><img src="./img/lock.png" alt="lock" /></div>
                    <div className="massage">{props.pack.errMassage}</div>
                </div>
            </div>
            <div className="sidebar off">
                        <div className="side_nav">
                            <span className></span>
                            <div className="block _4 disable" data-hint="info" id="info"><img src="./img/info.png" alt="info" /></div>
                            <div className="block _2" data-hint="staff" id="staff"><img src="./img/staff.png" alt="staff" /></div>
                            <div className="block _1 active" data-hint="home" id="home"><img src="./img/four-boxes.png" alt="home" /></div>
                            <div className="block _3" data-hint="services" id="services"><img src="./img/servises.png" alt="services" /></div>
                            <div className="block _5 disable" data-hint="blogs" id="blog"><img src="./img/blog.png" alt="blog" /></div>
                        </div>
            </div>
            <div className="container">
                <div className="main_comment">
                    {props.pack.comment}
                </div>
                
            
                
     
                <div className="home page this_page" id="3">
                    <div className="content">
                        <div className="name" id="name">
                            <div className="title">abclinic.uz</div>
                            <span></span>
                            <div className="subtitle">{props.pack.subTitle}</div> 
                        </div>
                        
                        <div className="background" id="b_home">
                            <img onLoad={Start()} src="./img/big cab.jpg" alt="homeImg" />
                        </div>                        
                    </div>
                    
                    <div className="win_logo" title="abclinic"><img src="./img/ablogo.png" alt="logo" /></div>

                    <a href="https://yandex.ru/maps/org/9426831655" target="_blank" rel="noreferrer noopener" className="location hidden">
                        <span class="material-symbols-outlined">location_on</span>
                        {props.pack.location} 
                    </a>

                    <div className="shadow"></div>
                </div>

                <div className="staff page page_left" id="2">

                </div>
                <div className="services page page_right" id="4">
                    
                    <div className="services_block">
                        <div className="next_button_s"><img src="./img/next.png" alt="" /></div>
                        <div className="prev_button_s"><img src="./img/next.png" alt="" /></div>
                        {serviceBlocks[0]}
                        {serviceBlocks[1]}
                        {serviceBlocks[2]}                        
                    </div>

                    <div className="priceList_table view">
                        <div className="open">Price list</div>
                        <div className="part first">
                            <div className="t_title">{props.pack.priceListTitles[0]}</div>
                            {services["first"]}
                        </div>
                        <div className="part second"> 
                            <div className="t_title">{props.pack.priceListTitles[1]}</div>
                            {services["second"]}
                        </div>
                        <div className="part third">
                            <div className="t_title">{props.pack.priceListTitles[2]}</div>
                            {services["third"]}
                        </div>
                        <div className="part fourth">
                            <div className="t_title">{props.pack.priceListTitles[3]}</div>
                            {services["fourth"]}
                        </div>
                        <div className="part fifth">
                            <div className="t_title">{props.pack.priceListTitles[4]}</div>
                            {services["fifth"]}
                        </div>
                    </div>
                    <div className="background" id="b_services">
                        <img src="./img/cutting.jpg" alt="" />
                    </div>    
                </div>            

                <div className="info page page_left" id="1">

                </div>

                <div className="blog page page_right" id="5">
                    
                    
                </div>
                
                
                


                <a href="https://instagram.com/abclinic.uz?igshid=MDM4ZDc5MmU=" data-hint="instagram" target="_blank" rel="noreferrer noopener" className="insta social_media high"><img src="./img/Instagram_logo.png" alt="Instagram" /></a>   
                <a href="https://youtube.com" data-hint="youtube" target="_blank" rel="noreferrer noopener" className="youtube social_media high"><img src="./img/youtube_logo.png" alt="Youtube" /></a>
                <a href="https://t.me/abclinic_uz" data-hint="telegram" target="_blank" rel="noreferrer noopener" className="telegram social_media high"><img src="./img/telegram_logo.png" alt="Telegram" /></a>
            </div>
          
        </main>
                    

    )
}

export default Main;