import { usePackage } from "../../../hooks/usePackage";

const Home = () => {
    const { info } = usePackage();
    const pack = info?.package;


    return (
        <div className="home" id="1">
            <div className="content">
                <div className="name" id="name">
                    <div className="title">abclinic.uz</div>
                    <span></span>
                    <div className="subtitle">{pack?.subTitle}</div> 
                </div>
                
                
            </div>
            
            <div className="win_logo" title="abclinic"><img src="/img/ablogo.png" alt="logo" /></div>
            <a href="https://yandex.ru/maps/org/9426831655" target="_blank" rel="noreferrer noopener" className="location hidden">
                <span className="material-symbols-outlined">location_on</span>
                {pack?.location} 
            </a>

            <div className="contact">
                <img src="/mobileImg/phone.png" alt="" />
                <div className="contacts">
                    <ul className="contact_list">
                        <li>
                            <div className="contact_text" >+998 95 122 88 55</div>                                 
                            <span id="copy">
                                <img src="/mobileImg/copy.png" className="copy_button" alt="copy" />
                                <img src="/mobileImg/copied.png" className="copied_button" alt="copied" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <span className="arrow"></span>
            <div className="shadow"></div>
        </div>
    )
}

export default Home;