import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/main.css";

function Line(props) {
    return (
        <div className="line">
            <div className="l_service">{props.services}</div>
            <span>............................................................................................................................................................................................................................................................................................................................................................................</span>
            <div className="price">{props.price} сум</div>
        </div>
        
    ) 
}

function Main(props) {

    const services = {};

    for (const key in props.services) {      
            const element = props.services[key];
            services[key] = [];
            for (let i = 0; i < element.length; i++) {
                const obj = element[i];
                services[key].push(<Line services={obj["service"]} price={obj["price"]} />)
            }
    }

    
      
    
    console.log("yeh");

    return (
        <BrowserRouter>
        <main>
            <div className="sidebar off">
                <div className="sidebar_container">
                    <div className="rightside">
                        {/* <div className={cl.burger+ " " +cl.on} onClick={addClass}>
                            <span className={cl.s_1}></span>
                            <span className={cl.s_2}></span>
                            <span className={cl.s_3}></span>
                        </div> */}
                        <div className="side_nav">
                            <span></span>
                            <div className="block _1 active" id="home"><img src="./img/four-boxes.png" alt="" /></div>
                            <div className="block _2" id="services"><img src="./img/servises.png" alt="" /></div>
                            <div className="block _3" id="staff"><img src="./img/staff.png" alt="" /></div>
                            <div className="block _4" id="info"><img src="./img/info.png" alt="" /></div>
                            <div className="block _5" id="blog"><img src="./img/blog.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="background onthis" id="b_home"><img src="./img/big cab.jpg" alt="" /></div>
                <div className="background" id="b_services"><img src="./img/cutting.jpg" alt="" /></div>
                <div className="background" id="b_staff"><img src="./img/background.jpg" alt="" /></div>
                 
                <a href="https://instagram.com" className="insta social_media"><img src="./img/Instagram_logo.png" /></a>   
                <a href="https://youtube.com" className="youtube social_media"><img src="./img/youtube_logo.png" /></a>
                <a href="https://telegram.org" className="telegram social_media"><img src="./img/telegram_logo.png" /></a>
            
                

                <div className="home" id="1">
                    <div className="content">
                        <div className="name" id="name">
                            <div className="title">abclinic.uz</div>
                            <span></span>
                            <div className="subtitle">Создай историю с нами</div>
                        </div>
                        
                        
                    </div>
                    
                    <div className="win_logo"><img src="./img/ablogo.png" alt="" /></div>
                    <span className="arrow"></span>
                    <div className="shadow"></div>
                </div>

                <div className="services" id="2">
                    <div className="shadow"></div>
                    
                    <div className="services_block">
                        <div className="service">
                            <div className="title">
                                Гигиена и профилактика зубов
                            </div>
                            <span className="line_x"></span>
                            <ul className="list">
                                <li>«Check-up»</li>
                                <li>Комплексная гигиена зубов</li>
                                <li>Отбеливание зубов</li>
                            </ul>
                        </div>
                        <div className="service">
                            <div className="title">
                                Лечение зубов
                            </div>
                            <span className="line_x"></span>
                            <ul className="list">
                                <li>Лечение кариеса</li>
                                <li>Восстановление разрушенных зубов</li>
                            </ul>
                        </div>
                        <div className="service">
                            <div className="title">
                                Хирургические манипуляции
                            </div>
                            <span className="line_x"></span>
                            <ul className="list">
                                <li>Удаление зубов</li>
                                <li>Установка имплантата</li>
                                <li>Иссечение новообразований</li>
                                <li>Пластика десны</li>
                            </ul>                            
                        </div>
                    </div>
                    <div className="priceList_table">
                        <div className="open">Price list</div>
                        <div className="part first">
                            <div className="t_title">Консультация специалистов</div>
                            {services["first"]}
                        </div>
                        <div className="part second">
                            <div className="t_title">Лечение зубов</div>
                            {services["second"]}
                        </div>
                        <div className="part third">
                            <div className="t_title">Профессиональная гигиена</div>
                            {services["third"]}
                        </div>
                        <div className="part fourth">
                            <div className="t_title">Восстановление зубных рядов (Протезирование зубов)</div>
                            {services["fourth"]}
                        </div>
                        <div className="part fifth">
                            <div className="t_title">Хирургическая стоматология</div>
                            {services["fifth"]}
                        </div>
                    </div>
                        
                    
                </div>

                <div className="staff" id="3">
                        <div className="next_button hidden"><img src="./img/next.png" alt="" /></div>
                        <div className="back_button"><img src="./img/back.png" alt="" /></div>
                        <div className="shadow"></div>
                        <div className="team">
                            <span className="letter first f_1">к</span>
                            <span className="letter second s_3">о</span>
                            <span className="letter second s_1">м</span>
                            <span className="letter first f_2">а</span>
                            <span className="letter first f_3">н</span>
                            <span className="letter second s_2">д</span>
                            <span className="letter first f_4">а</span>
                        </div>
                        <div className="dentists">
                            <div className="dentist off prioriti_3 _1 left" id="i_i">
                                {/* <div className="name"> */}
                                    {/* <span className="n">Азимов Иброхимжон</span> */}
                                    {/* <span className="x"></span> */}
                                    {/* <div className="y"></div> */}
                                {/* </div> */}
                                <img src="./img/dentist-1.png"  alt="" />
                                <img src="./img/dentist-1.png" className="clone" alt="" />
                                
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
                            
                            <div className="dentist off prioriti_2 _2 right">
                                {/* <div className="name"> */}
                                    {/* <span className="n">Азимов Абдухамиджон</span> */}
                                    {/* <span className="x"></span> */}
                                    {/* <div className="y"></div> */}
                                {/* </div> */}
                                <img src="./img/dentist-2.png" alt="" />
                                <img src="./img/dentist-2.png" className="clone" alt="" />
                                
                            </div>
                            <div className="dentist_information  i_2 t_left">
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
                            <div className="dentist off prioriti_2 _3 right">

                                {/* <div className="name"> */}
                                    {/* <span className="n">Виктория Вадимовна</span> */}
                                    {/* <span className="x"></span> */}
                                    {/* <div className="y"></div> */}
                                {/* </div> */}
                                

                                <img src="./img/dentist-3.png" alt="" />
                                <img src="./img/dentist-3.png" className="clone"  alt="" />
                                
                            </div>
                            <div className="dentist_information i_3 t_left">
                                    <div className="dentist_name">Пак Виктория Вадимовна</div>
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
                            <div className="dentist off prioriti_1 _4 bottom">
                                {/* <div className="name"> */}
                                    {/* <span className="n">Мансур Анварович</span> */}
                                    {/* <span className="x"></span> */}
                                    {/* <div className="y"></div> */}
                                {/* </div> */}
                                <img src="./img/dentist-4.png" alt="" />
                                <img src="./img/dentist-4.png" className="clone" alt="" />
                                
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
                            <div className="dentist off prioriti_3 _5 left">
                                {/* <div className="name"> */}
                                    {/* <span className="n">Татяна Юрьевна</span> */}
                                    {/* <span className="x"></span> */}
                                    {/* <div className="y"></div> */}
                                {/* </div> */}
                                <img src="./img/dentist-5.png" alt="" />
                                <img src="./img/dentist-5.png" className="clone" alt="" />
                                
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
                </div>

                <div className="info" id="4">

                </div>
                <div className="fog _1 off">
                    <img src="./img/fog.png" alt="" />
                </div>
                <div className="fog _2 off">
                    <img src="./img/fog.png" alt="" />
                </div>
                <div className="fog _3 off">
                    <img src="./img/fog.png" alt="" />
                </div>
            </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
        <script src="./slick.min.js"></script>
        
                    


        </BrowserRouter>
    )
}

export default Main;