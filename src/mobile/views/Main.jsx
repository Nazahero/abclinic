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
        
        <div className="wrapper">
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
                            <div className="block _5" data-hint="blogs" id="blog"><img src="./img/blog.png" alt="blog" /></div>
                        </div>
            </div>
            <div className="container">
                <div className="main_comment">
                    {props.pack.comment}
                </div>
                
                <div className="win_logo" title="abclinic"><img src="./img/ablogo.png" alt="logo" /></div>
                
                
                
                
     
                <div className="home page this_page" id="3">
                    {/* <div className="location hidden">
                        <a href="https://yandex.ru/maps/org/9426831655" target="_blank" rel="noreferrer noopener" className="location_link">
                            <span class="material-symbols-outlined">location_on</span>
                            {props.pack.location} 
                        </a>
                    </div> */}
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
                    
                    <div className="feedbacks">
                        <a href="https://yandex.uz/maps/org/9426831655/reviews/?ll=69.271993%2C41.288301&tab=reviews&z=15">
                            <img src="./img/feedbacks.png" alt="feedbacks" />
                        </a>
                    </div>

                    <div className="shadow"></div>
                </div>

                <div className="staff page page_left" id="2">
                    
                    <div className="fog _1 off">
                        <img src="./img/fog.png" alt="fog" />
                    </div>
                    <div className="fog _2 off">
                        <img src="./img/fog.png" alt="fog" />
                    </div>
                    <div className="fog _3 off">
                        <img src="./img/fog.png" alt="fog" />
                    </div> 

                    <div className="dentists">
                        <div className="next_button"><img src="./img/next.png" alt="" /></div>
                        <div className="prev_button"><img src="./img/next.png" alt="" /></div>
                          
                            <div className="dentist_information" data-information="d_4">
                                    <div className="dentist_name">Азимов Абдухамиджон Мухамаджон угли</div>
                                    <span></span>
                                    <div className="text">
                                            <span>
                                            С 2023 года является учредителем клиники «Azimov Brothers» <br /> 
                                            В 2018 году поступил на стоматологический факультет в Волгоградский Медицинский Университет – Россия. <br />
                                            В 2019 году стал обладателем «Ректорской Стипендии-ТГСИ» <br />
                                            В 2021 году стажировался в отделении Хирургической Стоматологии в городе Стамбул в клинике «Medipol University Dental Hospital» - Турция. <br />
                                            В 2022 году стал президентом Ассоциации Молодых Стоматологов <br />
                                            В 2022-2023 году обучался и стажировался в университете «ADEMA» на острове Пальма де Майорка в Королевстве Испания в рамках гранта «ERASMUS - 2022» <br />
                                            В 2023 году окончил Ташкентский Государственный Стоматологический Институт <br />
                                            </span>
                                        </div>
                                </div>
                            
                            
                            <div className="dentist_information" data-information="d_3">
                                    <div className="dentist_name">Азимов Иброхимжон Мухамаджон угли</div>
                                    <span></span>
                                    <div className="text">
                                            <span>
                                            2021 - Ташкентский Государственный Стоматологический Институт (стоматолог общей практики)
                                            2021 - нынешнее время - Магистр кафедры Челюстно-лицевой хирургии (Ташкентский Государственный Стоматологический Институт)
                                            2022 - нынешнее время - Advanced Master program - Biomimetic dentistry (Los Angeles)
                                            <br />
                                            Обладатель Государственной стипендии имени abu Ali ibn Sino
                                            Обладатель Государственной стипендии имени Yoosik Yang
                                            <br />    
                                   
                                            услуги:
                                            <br /> - лечение кариеса
                                            <br /> - восстановление сильно разрушенных зубов (основное направление)
                                            <br /> - композитные и керамические накладки (основное направление)
                                            <br /> - проф. гигиена
                                            <br /> - отбеливание
                                                                                  
                                            </span>
                                        </div>
                                </div>

                            
                            <div className="dentist_information" data-information="d_6">
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

                            
                            <div className="dentist_information" data-information="d_5">
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
                            
                            
                            <div className="dentist_information period" data-information="d_1">
                                    <div className="dentist_name">Профессор Азимов Мухаммаджон Исмаилович</div>
                                    <span></span>
                                    <div className="text">
                                            <span>
                                                • Признанный академик Всемирной Ассоциации стоматологов FDI<br />
                                                                    <br />
                                                •Действительный член - Академик всемирной академии стоматологов ADI<br />
                                                                    <br />
                                                • Признанный Академик Российской академии РТТФА<br />
                                                                    <br />
                                                • Профессор кафедры "Детская Челюстно-Лицевая хирургия"<br />
                                                                    <br />
                                                • Автор: 7 учебников, 4 монографий, более 250 научных публикаций, 15 учебно-методических пособий <br />
                                                                    <br />
                                                • Выпустил  21 д.м.н., 40 к.м.н.<br />
                                                                    <br />
                                                • Стаж работы: 53 года<br />
                                            </span>
                                        </div>
                                </div>

                        
                            <div className="dentist_information" data-information="d_2">
                                    <div className="dentist_name">Дусмухамедова Хурсанд Кучкаровна</div>
                                    <span></span>
                                    <div className="text">
                                            <span>
                                                empty
                                            </span>
                                        </div>
                                </div>
                                
                            
                            <div className="dentist_information" data-information="d_7">
                                <div className="dentist_name">Ким Татяна Юрьевна</div>
                                <span></span>
                                <div className="text">
                                        <span>
                                        2011 – ТМА
                                        2015 – резидентура в ANDC Корейский центр по направлению ортопедическая стоматология
                                        Ведет терапевтический и ортопедический прием взрослых. 
                                        Лечение зубов: профессиональная гигиена, лечение кариеса, эндодонтия, реставрации.
                                        Несъемное протезирование: металлокремические, циркониевые коронки (одиночные и мостовидные) на зубах и на имплантатах; 
                                        Эстетика: композитные и керамические виниры
                                        Ежегодно повышает квалификацию на конференциях, мастер-классах с участием международных лекторов. 
                                        Для записи на прием или получение подробной информации: +998 951 22 88 55
                                        </span>
                                    </div>
                            </div>

                            <div className="dentists_photos">
                                <div className="dentist on" id="d_1" data-clone="Director">
                                    <img src="./img/director.png" alt="dentist" />
                                </div>
                                <div className="dentist" id="d_2" data-clone="Xursand">
                                    <img src="./img/Xursand.png" alt="dentist" />
                                </div>
                                <div className="dentist" id="d_3" data-clone="Ibrohim">
                                    <img src="./img/Ibrohim.png" alt="dentist" />
                                </div>
                                <div className="dentist" id="d_4" data-clone="Abdukhamid">
                                    <img src="./img/Abdukhamid.png"  alt="" />
                                </div>
                                <div className="dentist" id="d_5" data-clone="Mansur">
                                    <img src="./img/Mansur.png" alt="dentist" />
                                </div>
                                <div className="dentist" id="d_6" data-clone="Viktoria">
                                    <img src="./img/Viktoria.png" alt="dentist" />
                                </div>
                                <div className="dentist" id="d_7" data-clone="Tatiana">
                                    <img src="./img/Tatiana.png" alt="dentist" />
                                </div>
                            </div>

                    </div>

                    <div className="background" id="b_staff">
                        <img src="./img/background.jpg" alt="" />
                    </div>

                </div>
                <div className="services page page_right" id="4">
                    
                    <div className="services_block">
                        <div className="next_button_s"><img src="./img/next.png" alt="" /></div>
                        <div className="prev_button_s"><img src="./img/next.png" alt="" /></div>
                        {serviceBlocks[0]}
                        {serviceBlocks[1]}
                        {serviceBlocks[2]}                        
                    </div>
                    <div className="priceList_container">
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
                    </div>
                    
                    <div className="background" id="b_services">
                        <img src="./img/cutting.jpg" alt="" />
                    </div>    
                </div>            

                <div className="info page page_left" id="1">

                </div>

                <div className="blog page page_right" id="5">
                    <div className="back_photo">
                        <img src="./img/blog_photo.jpg" alt="clinic" />
                        <div className="shadow da"></div>
                    </div>
                    <div className="blog_list">
                        
                    </div>
                </div>
                
                
                


                <a href="https://instagram.com/abclinic.uz?igshid=MDM4ZDc5MmU=" data-hint="instagram" target="_blank" rel="noreferrer noopener" className="insta social_media high"><img src="./img/Instagram_logo.png" alt="Instagram" /></a>   
                <a href="https://youtube.com" data-hint="youtube" target="_blank" rel="noreferrer noopener" className="youtube social_media high"><img src="./img/youtube_logo.png" alt="Youtube" /></a>
                <a href="https://t.me/abclinic_uz" data-hint="telegram" target="_blank" rel="noreferrer noopener" className="telegram social_media high"><img src="./img/telegram_logo.png" alt="Telegram" /></a>
                <a href="https://yandex.ru/maps/org/9426831655" data-hint="location" target="_blank" rel="noreferrer noopener" className="location social_media high"><img src="./img/location.png" alt="Location" /></a>

            </div>
          
        </div>
                    

    )
}

export default Main;