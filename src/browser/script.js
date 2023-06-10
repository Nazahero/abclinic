
export function BrowserJs(){
    console.log("browser");
    function start() {
        const homePage = document.querySelector(".home");
        const homeButton = document.querySelector("#home");
        const title = document.querySelector(".name");
        const stick = document.querySelector(".side_nav > span");
        const arrow = document.querySelector(".arrow");
        const service_block = document.querySelector(".services_block");
        const navButtons = document.querySelectorAll(".side_nav .block");
        const backgrounds = document.querySelectorAll(".background");
        const open = document.querySelector(".open");
        const priceList = document.querySelector(".priceList_table");
        const sidebar = document.querySelector(".sidebar");
        const social_icons = document.querySelectorAll(".social_media");
        const dentists = document.querySelectorAll(".dentist");
        const dentistsBox = document.querySelector(".dentists");
        const fog = document.querySelectorAll(".fog");
        var letters = document.querySelectorAll(".letter");
        console.log("mobile");
        const lettersObj = {};
        const delay = []; 
        const preLetter = {};
        const informations = document.querySelectorAll(".dentist_information");
        const backButton = document.querySelector(".back_button");
        const nextButton = document.querySelector(".staff .next_button");
        const prevButton = document.querySelector(".staff .prev_button");
        const dentistClones = document.querySelectorAll(".clone");
        const location = document.querySelector(".location");
        const language = document.getElementById("language").querySelector("span");
        const lang_list = document.querySelector(".lang_list");
        // const detect = new MobileDetect(window.navigator.userAgent);
        const elementHints = document.querySelectorAll("[data-hint]");
        const hint = document.getElementById("hint");
        const langs = document.querySelectorAll(".lang_block");
        const clones = document.querySelectorAll(".clone");
        const default_category = document.getElementById("default_category");
        
        // --------------------- SET LETTERS ---------------------- //

        for (let i = 0; i < letters.length; i++) {
            const element = letters[i];
            lettersObj[`${i}`] = element;
        }
        for (let i = 0; i < letters.length; i++) {
            const element = letters[i];
            const elDelay = element.getAttribute("style");
            delay.push(elDelay);
        }

        // console.log("Mobile: " + detect.mobile());       // телефон или планшет
        // console.log("Phone: " + detect.phone());         // телефон
        // console.log("Tablet: " + detect.tablet());       // планшет
        // console.log("OS: " + detect.os());               // операционная система
        // console.log("userAgent: " + detect.userAgent()); // userAgent

        // ------------------------- CHECKING SIZE ---------------------------- //

        
        letters = document.querySelectorAll(".letter");


        // ---------------------------- EVENTS ------------------------------ //
        
        
        let prevpath = window.location.pathname;
        
        
        setInterval(() => {
            if (prevpath != window.location.pathname) {
                console.log("bam");
                var active = document.querySelector(".block.active");
                scrollControl(backgrounds, document.querySelector(".background.onthis") , document.querySelector(`.${active.id}`), "instant");
                prevpath = window.location.pathname; 
            }
        }, 100);
        
        // --------------------------- INFO BACK --------------------------------- //

        const infoImg = document.querySelector(".info_back img");
        const info = document.querySelector(".info");

        infoImg.style.top = `${info.scrollTop - (window.innerHeight * 0.7)}px`;
        info.addEventListener("scroll", function () {
            infoImg.style.top = `${info.scrollTop - (window.innerHeight * 0.7)}px`;
        })
        
        // --------------------------- BLOG CATEGORIES --------------------------- //
        
        const blog_buttons = document.querySelectorAll(".category");
        const pre_text = document.querySelector(".content .pre_text");
        var changed = false;


        for (let i = 0; i < blog_buttons.length; i++) {
            const button = blog_buttons[i];
            if (button.classList.contains("active") && (!changed)) {
                pre_text.innerHTML = `${pre_text.getAttribute("data-empty")}`;
                changed = true;
            }
            button.addEventListener("click", function() {
                pre_text.innerHTML = `${pre_text.getAttribute("data-empty")}`;
                changed = true;
            }, ) 
        }

        // -------------------------- HINT EVENTS ---------------------------- //

        for (let i = 0; i < elementHints.length; i++) {
            const element = elementHints[i];
            element.addEventListener("mouseover", function () {
                if (!hint.classList.contains("hovered")) {
                    hint.classList.add("hovered");
                    addClassOn(hint);
                    const Y = element.getBoundingClientRect().top + element.clientHeight * 0.4 - hint.clientHeight;
                    const X = element.getBoundingClientRect().left + element.clientWidth * 0.8;
                    hint.innerText = `${element.getAttribute("data-hint")}`;
                    if (X + hint.clientWidth < window.innerWidth) {
                        hint.style.left = `${X}px`;
                    } else {
                        hint.style.left = `${element.getBoundingClientRect().left - element.clientWidth - hint.clientWidth * 0.7}px`;
                    }
                    hint.style.top = `${Y}px`;
                }                             
            });
            element.addEventListener("mouseout", function (event) {
                if (hint.classList.contains("hovered")) {
                        hint.classList.remove("hovered");
                        hint.classList.remove("on");
                }                
            });
        }

        // --------------------- FIRST FUNCTIONS ------------------------ //
            welcomePage(homePage, homeButton, navButtons, stick, title, location);

        
        selectLanguage(langs ,lettersObj, delay, preLetter, lang_list, pre_text, dentistsBox);
        setDelay(letters, preLetter);
        openPriceList(open, priceList);  
        openLanguage(language, lang_list); 
        
        setTimeout(() => {
            welcomePage(homePage, homeButton, navButtons, stick, title, location);
        }, 500);

        window.addEventListener("resize", () => {
            var active = document.querySelector(".block.active");
            if (document.getElementById("staff").classList.contains("active")) {
                trimClones(clones);
            }
            scrollControl(backgrounds, document.querySelector(".background.onthis") , document.querySelector(`.${active.id}`));
            noDelayArr(letters, delay);
            // infoImg.style.top = `${info.}px`;

            
            setTimeout(() => {
                stickControl(active, stick);
            }, 700);
        })

        // -------------------- NAVIGATION BUTTON EVENTS ----------------------- //

        for (var i = 0; i < navButtons.length; i++) {
            const el = navButtons[i];
            el.addEventListener("click", () => {
                if ((el.classList.contains("active")) || (el.classList.contains("disable"))) {
                    return;
                } 
                var currentPage = document.querySelector(`.${el.id}`);
                var background = document.querySelector(`#b_${currentPage.getAttribute("class")}`);

                sidebarControl(navButtons, el, stick, backgrounds, background , currentPage);

                switch (currentPage.id) {
                    case "1":
                        iconMoveTimeOut(social_icons);
                        removeStaffPage(sidebar, social_icons, fog);
                        visibleElement(arrow)
                        visibleElement(location)
                        break;
                    case "2":
                        // ---- WELCOME ANIMATION ---- //
                        
                        visible(lettersObj);     
                        events(dentists, backButton, clones)
                        dentistHover(dentists , clones); 
                        toolsParalax(sidebar, fog , social_icons);
                        visibleToolsWhenHover(sidebar, social_icons);
                        addGr(dentists);
                        visibleDentists(preLetter ,dentists);
                        dentistsControl(dentists, dentistsBox, lettersObj, backButton, nextButton, dentistClones, prevButton);
                        backButtonControl(dentists, dentistsBox, lettersObj, informations, backButton, nextButton, dentistClones, prevButton);
                        controlSwitcher(nextButton, backButton, prevButton);

                        // ---- ----------------- ---- //

                        window.addEventListener("scroll", function () {
                            trimClones(clones);
                        })
                       


                        // ---- -------------- ---- //
                        iconMove(social_icons);
                        hiddenElement(arrow);
                        hiddenElement(location);
                        break;
                    case "3":
                        iconMove(social_icons);
                        addClassOn(service_block);
                        visiblePriceList(priceList);
                        removeStaffPage(sidebar, social_icons, fog);

                        hiddenElement(arrow);
                        hiddenElement(location);
                        break;
                    case "4":
                        return;
                        break;
                    case "5":
                        setTimeout(() => {
                            for (let i = 0; i < document.querySelectorAll(".swiper-wrapper").length; i++) {
                                const element = document.querySelectorAll(".swiper-wrapper")[i];
                                element.classList.add("active");
                            }
                            
                        }, 200);
                        const sidelist_buttons = document.querySelectorAll(".category");
                        for (let i = 0; i < sidelist_buttons.length; i++) {
                            const element = sidelist_buttons[i];
                            element.addEventListener("click", function () {
                                setTimeout(() => {
                                    for (let i = 0; i < document.querySelectorAll(".swiper-wrapper").length; i++) {
                                        const element = document.querySelectorAll(".swiper-wrapper")[i];
                                        element.classList.add("active");
                                    }
                                    
                                }, 300);
                            })
                        }
                        
                        removeStaffPage(sidebar, social_icons, fog);
                        iconMove(social_icons);
                        hiddenElement(arrow);
                        hiddenElement(location);

                        
                        break;                    
                    default:
                        return;
                        break;
                }

                
            });
        }

        // -------------------------- ARROW EVENTS ----------------------------- //

        arrow.addEventListener("click", () => {
            var page = arrow.parentElement.nextSibling;
            var el = document.getElementById(`${page.getAttribute("class")}`);
            var background = document.querySelector(`#b_${page.getAttribute("class")}`);

            sidebarControl(navButtons, el, stick, backgrounds, background , page);

            visible(lettersObj);     
            events(dentists, backButton, clones)
            dentistHover(dentists , clones); 
            toolsParalax(sidebar, fog , social_icons);
            visibleToolsWhenHover(sidebar, social_icons);
            addGr(dentists);
            visibleDentists(preLetter ,dentists);
            dentistsControl(dentists, dentistsBox, lettersObj, backButton, nextButton, dentistClones, prevButton);
            backButtonControl(dentists, dentistsBox, lettersObj, informations, backButton, nextButton, dentistClones, prevButton);
            controlSwitcher(nextButton, backButton, prevButton)
            // ---- ----------------- ---- /
            window.addEventListener("scroll", function () {
                trimClones(clones);
            })
            
            // ---- -------------- ---- //
            iconMove(social_icons);
            hiddenElement(arrow);
            hiddenElement(location);
        });

        // ------------------ LAST FUNCTIONS --------------------- //
        noDelay(title.querySelector(".title"))
        noDelay(title.querySelector(".subtitle"))
        document.querySelector(".blocking").classList.add("off")
        document.querySelector(".blocking").classList.remove("on")
        // checkSize()
        // window.addEventListener("resize", () => {checkSize()});
        
        // -------------------------------------------------------- //

    }

function events(dentists, backButton, clones) {
    for (let i = 0; i < dentists.length; i++) {
        const den = dentists[i];
        const denImg = den.querySelector("img");
        const cl = document.getElementById(`${den.getAttribute("data-clone")}`);
        const clImg = cl.querySelector("img");
        /*------------------- STARTING --------------------*/
        backButton.addEventListener("click", function () {
            cl.classList.remove("hovered");
            cl.classList.add("transitting");     
            denImg.classList.remove("unhovered");
        })
        cl.addEventListener("click", function () {
                cl.classList.remove("hovered"); 
                denImg.classList.remove("unhovered");
        })
        den.addEventListener("transitionstart", function() {
            if (den.parentElement.classList.contains("alternative")) {
                cl.classList.remove("on")
                cl.classList.add('hidden');
            } else {
                console.log("trimed");
                trimClone(denImg, cl)
            }
        })
        den.addEventListener("animationstart", function() {
            if (den.parentElement.classList.contains("alternative")) {
                cl.classList.remove("on")
                cl.classList.add('hidden');
            } else {
                console.log("trimed");
                trimClone(denImg, cl)
            }
        })
        /*-------------------- ENDING --------------------*/
        den.addEventListener("transitionend", function() {
            trimClones(clones);
            cl.classList.add("on");
            if (!den.parentElement.classList.contains("alternative")) {
                cl.classList.remove("hidden");
            }
            if (den.parentElement.classList.contains("alternative")) {
                cl.classList.remove("hovered"); 
            }
        })
        den.addEventListener("animationend", function() {
            trimClones(clones);
            cl.classList.add("on");
            if (!den.parentElement.classList.contains("alternative")) {
                cl.classList.remove("hidden");
            }
            if (den.parentElement.classList.contains("alternative")) {
                cl.classList.remove("hovered"); 
            }
        })
        // cl.addEventListener("transitionstart", function () {
        //     cl.classList.add("transitting");
        // })
        // cl.addEventListener("transitionend", function () {
        //     cl.classList.remove("transitting");
        // })
    }
}

function checkSize() {
    var X = window.innerWidth;
    var Y = window.innerHeight;
    if (X / Y <= 1.6 || X / Y >= 3.4) {
        document.querySelector(".blocking").classList.add("on")
        document.querySelector(".blocking").classList.remove("off")
        removeDisableFromElement(document.querySelector(".blocked"))
        document.querySelector(".loading").classList.remove("on");
    } else 
    {
        document.querySelector(".blocking").classList.add("off")
        document.querySelector(".blocking").classList.remove("on")
        addDisableToElement(document.querySelector(".blocked"))
    }
}
function trimClone(dentist, clone) {
    clone.style.cssText = `
            width: ${dentist.clientWidth}px;
            height: ${dentist.clientHeight}px;
            top: ${dentist.getBoundingClientRect().top}px;
            left: ${dentist.getBoundingClientRect().left}px;
    `;
}
function trimClones(clones) {
    for (let i = 0; i < clones.length; i++) {
        const clone = clones[i];
        const dentist = document.querySelector(`[data-clone="${clone.id}"] img`);
        clone.style.cssText = `
            width: ${dentist.clientWidth}px;
            height: ${dentist.clientHeight}px;
            top: ${dentist.getBoundingClientRect().top}px;
            left: ${dentist.getBoundingClientRect().left}px;
        `;
    }
}
function dentistHover(dentists, clones) {
    for (let i = 0; i < clones.length; i++) {
        const clone = clones[i];
        const dentist = dentists[i].querySelector("img");
        console.log(dentist);
        clone.addEventListener("mouseover", function () {
                if (!clone.classList.contains("hidden")) {
                    clone.classList.add("hovered");
                    dentist.classList.add("hovered");
                }            
        });
        clone.addEventListener("mouseout", function () {
            clone.classList.remove("hovered");
            dentist.classList.remove("hovered");
            if (!clone.classList.contains("hidden")) {
                dentist.classList.add("unhovered");
            }
        })
    }
}
function noDelay(elem) {
    elem.addEventListener("transitionend", function() {
        this.style.cssText = `transition-delay: 0s;`;
    })
}
function noDelayArr(array, delay) {
    if (document.querySelector("#staff").classList.contains("active")) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            const elemDelay = delay[i];
            element.style.cssText = `transition-delay: 0s;`;
            setTimeout(() => {
                element.style.cssText = elemDelay;
            }, 1000);
        }
    }        
}
function openLanguage(language, lang_list) {
    language.addEventListener("click" , function () {
        if (lang_list.classList.contains("hidden")) {
            visibleElement(lang_list);
            addClassActive(language.parentElement)
            return;
        }
        hiddenElement(lang_list);
        language.parentElement.classList.remove("active");

        
        
        
        // let lettersT = document.querySelectorAll(".letter");
        
        // setDelay(lettersT);
        
        
    })
}
function selectLanguage(langs ,lettersObj, delay, preLetter, lang_list, pre_text, dentistsBox) {

    for (let i = 0; i < langs.length; i++) {
        const element = langs[i];
        element.addEventListener("click", function () {
            removeClassActive(langs);
            addClassActive(element);
            hiddenElement(lang_list);
            pre_text.innerHTML = "Выберите категорию";
        

            /*--------------------------*/
            if (!(dentistsBox.classList.contains("alternative"))) {
                const letters = document.querySelectorAll(".letter");
                console.log(letters);
                for (let i = 0; i < letters.length; i++) {
                    letters[i].style.cssText = `transition-duration: 0s;`;
                    letters[i].classList.remove("visible");
                }
            }

            setTimeout(() => {
                const newLetters = document.querySelectorAll(".letter");
                for (let i = 0; i < newLetters.length; i++) {
                    const element = newLetters[i];
                    lettersObj[`${i}`] = element;
                }
                noDelayArr(newLetters, delay);
                for (let i = 0; i < newLetters.length; i++) {
                    newLetters[i].style.cssText = `transition-duration: 1s;`;
                    if (document.querySelector("#staff").classList.contains("active") && (!(dentistsBox.classList.contains("alternative")))) {
                        console.log("bibi");
                        newLetters[i].classList.add("visible");
                    }
                }
                if (!document.querySelector("#staff").classList.contains("active")) {
                    setDelay(newLetters, preLetter);
                }
            }, 200);
            
            
        });
    }
}
function controlSwitcher(nextbutton, backButton, prevButton) {
    nextbutton.addEventListener("click", function () {
        if (!nextbutton.classList.contains("disable")) {
            nextDentist(nextbutton, prevButton, backButton);
        }
        addDisableToElement(nextbutton);
        addDisableToElement(prevButton);
        addDisableToElement(backButton);
    })
    prevButton.addEventListener("click", function () {
        if (!nextbutton.classList.contains("disable")) {
            prevDentist(prevButton, nextbutton, backButton);
        }
        addDisableToElement(nextbutton);
        addDisableToElement(prevButton);
        addDisableToElement(backButton);
    })
}    
function nextDentist(button, prev, backButton) {
    var currentDentist = document.querySelector(".information");
    var currentInformation = currentDentist.nextElementSibling;
    var elem_id = currentDentist.id;
    var id = Number( elem_id.replace(/\D/g , '') );
    
    var nextDentist;
    var nextInformation;
    

    if (id == 7) {
        nextDentist = document.getElementById("d_1");
        nextInformation = nextDentist.nextElementSibling;
    } else
    {
        nextDentist = document.getElementById(`d_${id+1}`);
        nextInformation = nextDentist.nextElementSibling;
    }
    currentInformation.classList.remove("period");
    currentInformation.addEventListener("transitionend", function () {
        currentDentist.classList.remove("information");
        currentDentist.classList.add("switched")
        nextDentist.classList.add("information");
        nextInformation.classList.add("period");
    },{once: true});
    
    
    setTimeout(() => {
        removeDisableFromElement(button);
        removeDisableFromElement(prev);
    }, 4500);
    setTimeout(() => {
        removeDisableFromElement(backButton)
    }, 5000);
}
function prevDentist(button, next, backButton) {
    var currentDentist = document.querySelector(".information");
    var currentInformation = currentDentist.nextElementSibling;
    var elem_id = currentDentist.id;
    var id = Number( elem_id.replace(/\D/g , '') );
    
    var prevDentist;
    var prevInformation;
    

    if (id == 1) {
        prevDentist = document.getElementById("d_5");
        prevInformation = prevDentist.nextElementSibling;
    } else
    {
        prevDentist = document.getElementById(`d_${id-1}`);
        prevInformation = prevDentist.nextElementSibling;
    }
    currentInformation.classList.remove("period");
    currentInformation.addEventListener("transitionend", function () {
        currentDentist.classList.remove("information");
        currentDentist.classList.add("switched")
        prevDentist.classList.add("information");
        prevInformation.classList.add("period");
    },{once: true});
    
    
    setTimeout(() => {
        removeDisableFromElement(button);
        removeDisableFromElement(next);
    }, 4500);
    setTimeout(() => {
        removeDisableFromElement(backButton)
    }, 5000);
}
function scrollControl(backgrounds, background , page, ifsmooth) {
    setBackgroudImage(background, backgrounds, page);
    scrollIntoPage(page, ifsmooth);
}
function sidebarControl(navButtons, el, stick, backgrounds, background , page) {
    if (!stick.classList.contains("disable")) {
        scrollControl(backgrounds, background , page, "smooth");
        removeClassActive(navButtons);                
        stickControl(el, stick);
        addClassActive(el);   
    }
    addDisableToElement(stick);
}
function visibleDentists(preLetter , dentists) {
    preLetter["letter"].addEventListener("transitionend", function (){
        removeClassOff(dentists);
    }, )
};
function visibleToolsWhenHover(sidebar, social_icons) {
    window.addEventListener("mousemove", function (ev) {
        var Y = window.innerHeight;
        var X = window.innerWidth;
        if (ev.clientX >= 0 && ev.clientX <= 75) {
            sidebar.classList.add("hover");
        } else {
            sidebar.classList.remove("hover");
        }
        if ((ev.clientY <= Y && ev.clientY >= (Y - 200)) && (ev.clientX <= X && ev.clientX >= (X - 80))) {
            for (var i = 0; i < social_icons.length; i++) {
                const element = social_icons[i];
                element.classList.add("hover");
            }
        } else {
            for (var i = 0; i < social_icons.length; i++) {
                const element = social_icons[i];
                element.classList.remove("hover");
            }
        }
    });
}
function welcomePage(homePage, homeButton, navButtons, stick, title, location) {
    homePage.scrollIntoView();
    removeClassActive(navButtons);
    addClassActive(homeButton);
    title.classList.add("ready");
    setTimeout(() => {
        visibleElement(location);
    }, 1000); 
    stickControl(homeButton, stick);
}
function removeStaffPage(sidebar, social_icons, fog) {
    sidebar.classList.remove("paralax");
    for (var i = 0; i < social_icons.length; i++) {
        const element = social_icons[i];
        element.classList.remove("paralax");
    }
    addClassOff(fog);
}
function openPriceList(open, priceList) {
    open.addEventListener("click", () => {
        console.log("fu");
        priceList.classList.toggle('openlist');
    })
}
function toolsParalax(sidebar, fog, social_icons) {
    sidebar.classList.add("paralax");
    removeClassOff(fog);
    for (var i = 0; i < social_icons.length; i++) {
        const element = social_icons[i];
        element.classList.add("paralax");
    }
}
function addClassHidden(arr) {
    for (var i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.classList.add("hidden");
    }
}
function removeClassOff(elems) {
    for (var i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.classList.remove("off");
        elem.classList.add("visibled");
    }
}
function addGr(elems) {
    for (var i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.classList.add("gr");
    }
}
function addClassOff(elems) {
    for (var i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.classList.add("off");
    }
}
function visible(lettersObj) {
    setTimeout(() => {
        for (const key in lettersObj) {
            if (Object.hasOwnProperty.call(lettersObj, key)) {
                const element = lettersObj[key];
                element.classList.add("visible");
            }
        }
    }, 700);
}
function iconMove(icons){ 
    for (var i = 0; i < icons.length; i++){
            var icon = icons[i];
            icon.classList.add("high");
    }
}
function visiblePriceList(priceList) {
    setTimeout(() => {
        priceList.classList.add("view");        
    }, 3000);
}
function iconMoveTimeOut(icons) {
    setTimeout(() => {
        for (var i = 0; i < icons.length; i++){
            var icon = icons[i];
            icon.classList.remove("high");
        }
    }, 400);
}
function visibleElement(element) {
    element.classList.remove("hidden");
}
function hiddenElement(element) {
    element.classList.add("hidden");
}
function setBackgroudImage(current, arr, page) {
    if (page.id > 1) {
        setTimeout(() => {
            for (var i = 0; i < arr.length; i++) {
                const back = arr[i];
                back.classList.remove("onthis");
            }
            current.classList.add("onthis");
        }, 500); 
        return;
    }
        for (var i = 0; i < arr.length; i++) {
            const back = arr[i];
            back.classList.remove("onthis");
        }
        current.classList.add("onthis");
}
function scrollIntoPage(element, ifsmooth) {
    setTimeout(() => {
        element.scrollIntoView({
            block: "start",
            inline: "nearest", 
            behavior: ifsmooth,
        })
    }, 200);
    
}
function addClassActive(elem) {    
        elem.classList.add("active");    
}
function removeClassActive(arr) {
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        elem.classList.remove("active");
    }
}
function addClassOn(el) {
    if (!el.classList.contains("on")) {
        el.classList.add("on");
    }
}
function stickControl(active, stick) {
    stick.style = `
        height: ${active.clientHeight}px;
        top: ${active.getBoundingClientRect().top}px;
    `;
    stick.addEventListener("transitionend", function () {
        setTimeout(() => {
            removeDisableFromElement(stick);
        }, 500);
    })
}
function backButtonControl(dentists, dentistsBox, letters, informations, back, next, clones, prev) {
    back.addEventListener("click", () => {
        backStaff(dentistsBox, dentists ,letters, informations, back, clones, next, prev)
    })
}
function dentistsControl(dentists, dentistsBox, letters, back, next, dentistClones, prev) {
    for (let i = 0; i < dentists.length; i++) {
        const dentist = dentists[i];
        const clone = document.getElementById(`${dentist.getAttribute("data-clone")}`);
        const info = dentist.nextSibling; 
        clone.addEventListener("click", () => {
            if (!clone.classList.contains("disable")) {
                infoAnimation(dentist, dentistsBox, dentists, letters, info, back, dentistClones);
                setTimeout(() => {
                    visibleElement(next);
                    visibleElement(prev);
                }, 700);
            }            
        })
    }
}
function setOpacityZero(elements) {
    setTimeout(() => {
        for (const key in elements) {
            if (Object.hasOwnProperty.call(elements, key)) {
                const element = elements[key];
                element.classList.add("opacityZ");
                element.classList.remove("opacityOI")
            }
        }
    }, 700);    
}
function setOpacityOne(elements) {
    for (const key in elements) {
        if (Object.hasOwnProperty.call(elements, key)) {
            const element = elements[key];
            element.classList.remove("opacityZ");
            element.classList.add("opacityOI")
        }
    }
}
function setDelay(letters, preLetter) {
    var array = [];
    for (var i = 0; i < letters.length; i++)
        array.push(i);

    var currentIndex = array.length, temporaryValue, randomIndex ;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
      
        
      
    for (var i = 1; i-1 < letters.length; i++) {
        const letter = letters[array[i-1]];
        letter.style.cssText = `transition-delay: ${0.4 * i }s`;        
    }
    preLetter["letter"] = letters[array[letters.length - 4]];
}
function infoAnimation(dentist, dentistBox, dentists ,letters, information, backButton, clones) {
    setOpacityZero(letters)
    setDentistsBox(dentistBox);
    switchDentist(dentists, dentist);
    console.log(information);
    openInfo(information);
    addDisableToArray(clones);
    setTimeout(() => {
        backButtonVisible(backButton);
    }, 1000);
}
function backStaff( dentistBox, dentists ,letters, information, backButton, clones, next, prev) {
    var info = document.querySelector(".information");
    if (!backButton.classList.contains("disable")) {
        hiddenElement(next);
        hiddenElement(prev);
        setTimeout(() => {
            setOpacityOne(letters)
            removeDentistsBox(dentistBox);
            closeDentists(dentists, info);
            backButtonHidden(backButton, clones);
        }, 2000);
        closeInfo(information);
    }
    addDisableToElement(backButton);
}
function openInfo(information) {
    console.log(information);
    information.classList.add("period");
}
function closeInfo(informations) {
    for (var i = 0; i < informations.length; i++) {
        const information = informations[i];
        information.classList.remove("period");
    }
}
function setDentistsBox(dentistsBox) {
    dentistsBox.classList.add("noinfo", "alternative");
}
function removeDentistsBox(dentistsBox) {
    dentistsBox.classList.remove("noinfo", "alternative");
}

function closeDentists(dentists, current) {
    for (var i = 0; i < dentists.length; i++) {
        const elem = dentists[i];
        elem.classList.remove("information");
        elem.classList.remove("gr");
        elem.classList.remove("animate");
        elem.classList.add("close_animate");
    }
    current.classList.remove("close_animate");
}
function addDisableToElement(el) {
    el.classList.add("disable");
}
function addDisableToArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        const el = arr[i];
        el.classList.add("disable");
    }
}
function removeDisableFromElement(el) {
    el.classList.remove("disable");
}
function removeDisableFromArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        const el = arr[i];
        el.classList.remove("disable");
    }
}
function switchDentist(dentists, dentist) {
        for (var i = 0; i < dentists.length; i++) {
            const elem = dentists[i];
            elem.classList.remove("information");
            elem.classList.remove("close_animate");
            elem.classList.add("animate");
        }
        dentist.classList.add("information");
        dentist.classList.remove("animate");
}
function backButtonVisible(button) {
    button.classList.add("visible");
}
function backButtonHidden(button, clones) {
    button.classList.remove("visible");
    button.addEventListener("transitionend", () => {
        setTimeout(() => {
            removeDisableFromElement(button);
            removeDisableFromArray(clones);
        }, 700);
    })
}
// const homePage = document.querySelector(".home");
// const homeButton = document.querySelector("#home");
// const title = document.querySelector(".name");
// const stick = document.querySelector(".side_nav > span");
// const location = document.querySelector(".location");
// const navButtons = document.querySelectorAll(".side_nav .block");


//     document.querySelector(".blocking").classList.add("off");
//     document.querySelector(".blocking").classList.remove("on");
//     welcomePage(homePage, homeButton, navButtons, stick, title, location);

    start();

}

