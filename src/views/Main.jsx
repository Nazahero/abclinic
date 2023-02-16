import React from "react";
import { NavLink } from "react-router-dom";
import "./css/main.css";

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

function Main(props) {
    const currency = props.pack.currency;
    let letters = [];
    let services = {};
    let serviceBlocks = [];

    console.log(props.pack.priceList);

    

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
        serviceBlocks.push(<ServiceBlock title={element.title} list={element.serviceList} />);
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
                        {/* <div className={cl.burger+ " " +cl.on} onClick={addClass}>
                            <span className={cl.s_1}></span>
                            <span className={cl.s_2}></span>
                            <span className={cl.s_3}></span>
                        </div> */}
                        <div className="side_nav">
                            <span></span>
                            <div className="block _1 active" data-hint="home" id="home"><img src="./img/four-boxes.png" alt="home" /></div>
                            <div className="block _2" data-hint="services" id="services"><img src="./img/servises.png" alt="services" /></div>
                            <div className="block _3" data-hint="staff" id="staff"><img src="./img/staff.png" alt="staff" /></div>
                            <div className="block _4 disable" data-hint="info" id="info"><img src="./img/info.png" alt="info" /></div>
                            <div className="block _5 disable" data-hint="blogs" id="blog"><img src="./img/blog.png" alt="blog" /></div>
                            <div className="lang" id="language">
                                <span class="material-symbols-outlined clickable" data-hint="language" >language</span>
                                <div className="lang_list hidden">
                                        <NavLink to="/ru" className="lang_block" id="ru">ru</NavLink>
                                        <span className="lang_line"></span> 
                                        <NavLink to="/en" className="lang_block" id="en">en</NavLink>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="container">
                <div className="background" id="b_services"><img src="./img/cutting.jpg" alt="" /></div>
                <div className="background onthis" id="b_home"><img src="./img/big cab.jpg" alt="" /></div>
                <div className="background" id="b_staff"><img src="./img/background.jpg" alt="" /></div>
                <div className="hint" id="hint"></div>
                 
                
            
                

                <div className="home" id="1">
                    <div className="content">
                        <div className="name" id="name">
                            <div className="title">abclinic.uz</div>
                            <span></span>
                            <div className="subtitle">{props.pack.subTitle}</div> 
                        </div>
                        
                        
                    </div>
                    
                    <div className="win_logo" title="abclinic"><img src="./img/ablogo.png" alt="logo" /></div>

                    <a href="https://yandex.ru/maps/org/9426831655" target="_blank" rel="noreferrer noopener" className="location hidden">
                        <span class="material-symbols-outlined">location_on</span>
                        {props.pack.location} 
                    </a>

                    <span className="arrow"></span>
                    <div className="shadow"></div>
                </div>

                <div className="services" id="2">
                    <div className="shadow"></div>
                    
                    <div className="services_block">
                        {serviceBlocks[0]}
                        {serviceBlocks[1]}
                        {serviceBlocks[2]}                        
                    </div>
                    <div className="priceList_table">
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
                        
                    
                </div>

                <div className="staff" id="3">
                        <div className="next_button hidden"><img src="./img/next.png" alt="" /></div>
                        <div className="prev_button hidden"><img src="./img/next.png" alt="" /></div>
                        <div className="back_button"><img src="./img/back.png" className="clickable" alt="" /></div>
                        <div className="shadow"></div>
                        <div className="team">
                            {letters}
                        </div>
                        {/* ------------------------------- */}
                        <div className="fog _1 off">
                            <img src="./img/fog.png" alt="fog" />
                        </div>
                        <div className="fog _2 off">
                            <img src="./img/fog.png" alt="fog" />
                        </div>
                        <div className="fog _3 off">
                            <img src="./img/fog.png" alt="fog" />
                        </div> 
                        {/* ------------------------------- */}
                        <div className="dentists">
                            <div className="dentist off prioriti_3 _1 left" id="d_4" data-clone="dentist._1">
                                {/* <div className="name"> */}
                                    {/* <span className="n">Азимов Иброхимжон</span> */}
                                    {/* <span className="x"></span> */}
                                    {/* <div className="y"></div> */}
                                {/* </div> */}
                                <img src="./img/dentist-1.png"  alt="" />
                                
                            </div>
                            <div className="dentist_information i_1 t_right">
                                    <div className="dentist_name">Азимов Абдухамиджон</div>
                                    <span></span>
                                    <div className="text">
                                            <span>
                                                В 2016 году окончил стоматологический факультет и в 2019 году ординатуру по направлению челюстно-лицевая хирургия в первом Санкт-Петербургском Государственном медицинском университете имени академика Павлова. 
                                                В 2018 году проходил магистерскую программу по направлению менеджмент в СПбПУ Петра Великого. 
                                                <br />  
                                                <br />                  
                                                В настоящее время ассистент кафедры челюстно-лицевой хирургии Ташкентского Государственного стоматологического института.
                                                Ведет узкоспециализированный прием, оказывая весь спектр хирургических услуг взрослым и детям.
                                                Основное направление <b>дентальная имплантология</b> и <b>лазерная хирургия. </b>
                                                 Ежегодно повышает квалификацию на конференциях, мастер-классах с участием международных лекторов.
                                                Помимо клинического приема на базе <b>abclinic.uz</b> проводят мастер-классы по имплантологии.
                                            </span>
                                        </div>
                            </div>
                            
                            <div className="dentist off prioriti_2 _2 right" id="d_3" data-clone="dentist._2">
                                {/* <div className="name"> */}
                                    {/* <span className="n">Азимов Абдухамиджон</span> */}
                                    {/* <span className="x"></span> */}
                                    {/* <div className="y"></div> */}
                                {/* </div> */}
                                <img src="./img/dentist-2.png" alt="dentist" />
                                
                            </div>
                            <div className="dentist_information  i_2 t_left" >
                                    <div className="dentist_name">Азимов Иброхимжон</div>
                                    <span></span>
                                    <div className="text">
                                            <span>
                                                В 2016 году окончил стоматологический факультет и в 2019 году ординатуру по направлению челюстно-лицевая хирургия в первом Санкт-Петербургском Государственном медицинском университете имени академика Павлова. 
                                                В 2018 году проходил магистерскую программу по направлению менеджмент в СПбПУ Петра Великого. 
                                                <br />  
                                                <br />                  
                                                В настоящее время ассистент кафедры челюстно-лицевой хирургии Ташкентского Государственного стоматологического института.
                                                Ведет узкоспециализированный прием, оказывая весь спектр хирургических услуг взрослым и детям.
                                                Основное направление <b>дентальная имплантология</b> и <b>лазерная хирургия. </b>
                                                 Ежегодно повышает квалификацию на конференциях, мастер-классах с участием международных лекторов.
                                                Помимо клинического приема на базе <b>abclinic.uz</b> проводят мастер-классы по имплантологии.
                                            </span>
                                        </div>
                                </div>
                            <div className="dentist off prioriti_2 _3 right" id="d_5" data-clone="dentist._3">
                                {/* <div className="name"> */}
                                    {/* <span className="n">Виктория Вадимовна</span> */}
                                    {/* <span className="x"></span> */}
                                    {/* <div className="y"></div> */}
                                {/* </div> */}
                                

                                <img src="./img/dentist-3.png" alt="dentist" />
                                
                            </div>
                            <div className="dentist_information i_3 t_left">
                                    <div className="dentist_name">Пак Виктория Вадимовна</div>
                                    <span></span>
                                    <div className="text">
                                            <span>
                                            В 2001 году закончила стоматологический факультет Бух.МИ, далее с 2004 г. закончила  ICD Корейский центр по направлению терапевтическая стоматология.
                                            Ведет терапевтический и ортопедический прием взрослых. 
                                            Лечение зубов: профессиональная гигиена, лечение кариеса, эндодонтия, реставрации и т.д.
                                            Съемное протезирование: пластинчатые, бьюгельные и иммидиат протезы и т.д.
                                            <br />
                                            Несъемное протезирование: металлокремические, циркониевые коронки (одиночные и мостовидные) на зубах и на имплантатах; 
                                            <br />
                                            Эстетика: композитные и керамические виниры
                                            <br />
                                            Ежегодно повышает квалификацию на конференциях, мастер-классах с участием международных лекторов. 
                                            Для записи на прием или получение подробной информации: +998 951 22 88 55
                                            </span>
                                        </div>
                                </div>
                            <div className="dentist off prioriti_1 _4 bottom" id="d_1" data-clone="dentist._4">
                                {/* <div className="name"> */}
                                    {/* <span className="n">Мансур Анварович</span> */}
                                    {/* <span className="x"></span> */}
                                    {/* <div className="y"></div> */}
                                {/* </div> */}
                                <img src="./img/dentist-4.png" alt="dentist" />
                            </div>
                            <div className="dentist_information  i_4 t_left">
                                    <div className="dentist_name">Аскаров Мансур Анварович</div>
                                    <span></span>
                                    <div className="text">
                                            <span>
                                                В 2016 году окончил стоматологический факультет и в 2019 году ординатуру по направлению челюстно-лицевая хирургия в первом Санкт-Петербургском Государственном медицинском университете имени академика Павлова. 
                                                В 2018 году проходил магистерскую программу по направлению менеджмент в СПбПУ Петра Великого. 
                                                <br />  
                                                <br />                  
                                                В настоящее время ассистент кафедры челюстно-лицевой хирургии Ташкентского Государственного стоматологического института.
                                                Ведет узкоспециализированный прием, оказывая весь спектр хирургических услуг взрослым и детям.
                                                Основное направление <b>дентальная имплантология</b> и <b>лазерная хирургия. </b>
                                                 Ежегодно повышает квалификацию на конференциях, мастер-классах с участием международных лекторов.
                                                Помимо клинического приема на базе <b>abclinic.uz</b> проводят мастер-классы по имплантологии.
                                            </span>
                                        </div>
                                </div>
                            <div className="dentist off prioriti_3 _5 left" id="d_2" data-clone="dentist._5">
                                {/* <div className="name"> */}
                                    {/* <span className="n">Татяна Юрьевна</span> */}
                                    {/* <span className="x"></span> */}
                                    {/* <div className="y"></div> */}
                                {/* </div> */}
                                <img src="./img/dentist-5.png" alt="dentist" />

                                
                                
                            </div>
                            <div className="dentist_information  i_5 t_right">
                                    <div className="dentist_name">Татяна Юрьевна</div>
                                    <span></span>
                                    <div className="text">
                                            <span>
                                                В 2016 году окончил стоматологический факультет и в 2019 году ординатуру по направлению челюстно-лицевая хирургия в первом Санкт-Петербургском Государственном медицинском университете имени академика Павлова. 
                                                В 2018 году проходил магистерскую программу по направлению менеджмент в СПбПУ Петра Великого. 
                                                <br />  
                                                <br />                  
                                                В настоящее время ассистент кафедры челюстно-лицевой хирургии Ташкентского Государственного стоматологического института.
                                                Ведет узкоспециализированный прием, оказывая весь спектр хирургических услуг взрослым и детям.
                                                Основное направление <b>дентальная имплантология</b> и <b>лазерная хирургия. </b>
                                                 Ежегодно повышает квалификацию на конференциях, мастер-классах с участием международных лекторов.
                                                Помимо клинического приема на базе <b>abclinic.uz</b> проводят мастер-классы по имплантологии.
                                            </span>
                                        </div>
                                </div>
                        </div>
                        {/* ------------------------------- */}
                        <div className="clone cPrioriti-3" id="dentist._1">
                            <img src="./img/dentist-1.png" className="cloneImg" alt="dentist" />
                        </div>
                        <div className="clone cPrioriti-2" id="dentist._2">
                            <img src="./img/dentist-2.png" className="cloneImg" alt="dentist" />
                        </div>
                        <div className="clone cPrioriti-2 incorrect" id="dentist._3">
                            <img src="./img/dentist-3.png" className="cloneImg" alt="dentist" />
                        </div>
                        <div className="clone cPrioriti-1" id="dentist._4">
                            <img src="./img/dentist-4.png" className="cloneImg" alt="dentist" />
                        </div>
                        <div className="clone cPrioriti-3" id="dentist._5">
                            <img src="./img/dentist-5.png" className="cloneImg" alt="dentist" />
                        </div>
                        </div>

                <div className="info" id="4">

                </div>
                
                
                


                <a href="https://instagram.com/abclinic.uz?igshid=MDM4ZDc5MmU=" data-hint="instagram" target="_blank" rel="noreferrer noopener" className="insta social_media"><img src="./img/Instagram_logo.png" alt="Instagram" /></a>   
                <a href="https://youtube.com" data-hint="youtube" target="_blank" rel="noreferrer noopener" className="youtube social_media"><img src="./img/youtube_logo.png" alt="Youtube" /></a>
                <a href="https://t.me/abclinic_uz" data-hint="telegram" target="_blank" rel="noreferrer noopener" className="telegram social_media"><img src="./img/telegram_logo.png" alt="Telegram" /></a>
            </div>
        </main>
                    


    )
}

export default Main;