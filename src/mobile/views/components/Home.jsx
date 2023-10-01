import { NavLink } from "react-router-dom";
import { usePackage } from "../../../hooks/usePackage";

const Home = (props) => {
    const { info } = usePackage();
    const pack = info?.package;


    return (
        <div className="home page" id="2">
            <div className="content">
                <div className="name" id="name">
                    <div className="title">abclinic.uz</div>
                    <span></span>
                    <div className="subtitle">{pack?.subTitle}</div>
                </div>

                <div className="background" id="b_home">
                    <img ref={props.Background} src="/mobileImg/big cab.jpg" alt="homeImg" />
                </div>
            </div>

            <div className="feedbacks">
                <a href="https://yandex.uz/maps/org/9426831655/reviews/?ll=69.271993%2C41.288301&tab=reviews&z=15">
                    <img src="/mobileImg/feedbacks.png" alt="feedbacks" />
                </a>
            </div>
            {/* <div className="lang">
                <span className="material-symbols-outlined clickable" data-hint="language" id="language">language</span>
                <div className="lang_list">
                    <NavLink to="/ru" className="lang_block" id="ru">ru</NavLink>
                    <NavLink to="/en" className="lang_block" id="en">en</NavLink>
                    <NavLink to="/uz" className="lang_block" id="uz">uz</NavLink>
                </div>
            </div> */}
            <div className="contact">
                <img src="/mobileImg/phone.png" alt="" />
                <div className="contacts">
                    <ul className="contact_list">
                        <li>
                            <div className="contact_text" >+998 95 122 88 55</div>
                            <span id="copy">
                                <img src="/mobileImg/copy.png" className="copy_button" alt="copy" />
                                <img src="/mobileImg/copied.png" className="copied_button" alt="copyied" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <a href="https://instagram.com/abclinic.uz?igshid=MDM4ZDc5MmU=" data-hint="instagram" target="_blank" rel="noreferrer noopener" className="insta social_media"><img src="/img/Instagram_logo.png" alt="Instagram" /></a>
            <a href="https://youtube.com" data-hint="youtube" target="_blank" rel="noreferrer noopener" className="youtube social_media"><img src="/img/youtube_logo.png" alt="Youtube" /></a>
            <a href="https://t.me/abclinic_uz" data-hint="telegram" target="_blank" rel="noreferrer noopener" className="telegram social_media"><img src="/img/telegram_logo.png" alt="Telegram" /></a>

            <div className="shadow"></div>
        </div>
    )
}

export default Home;