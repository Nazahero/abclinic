export function MobileJs(){
        console.log("mobile");
        function start() {
        const homePage = document.querySelector(".home");
        const homeButton = document.querySelector("#home");
        const title = document.querySelector(".name");
        const stick = document.querySelector(".side_nav > span");
        const arrow = document.querySelector(".arrow");
        const services = document.querySelectorAll(".service");
        const navButtons = document.querySelectorAll(".side_nav .block");
        const backgrounds = document.querySelectorAll(".background");
        const open = document.querySelector(".open");
        const priceList = document.querySelector(".priceList_table");
        const sidebar = document.querySelector(".sidebar");
        const social_icons = document.querySelectorAll(".social_media");
        const dentists = document.querySelectorAll(".dentist");
        const dentistsBox = document.querySelector(".dentists");
        const fog = document.querySelectorAll(".fog");
        const informations = document.querySelectorAll(".dentist_information");
        const backButton = document.querySelector(".back_button");
        const nextButton = document.querySelector(".staff .next_button");
        const prevButton = document.querySelector(".staff .prev_button");
        const sNext = document.querySelector(".next_button_s");
        const sPrev = document.querySelector(".prev_button_s");
        const location = document.querySelector(".location");
        // const language = document.getElementById("language").querySelector("span");
        // const lang_list = document.querySelector(".lang_list");
        // const langs = document.querySelectorAll(".lang_block");
        




            
        // --------------------- FIRST FUNCTIONS ------------------------ //

        // selectLanguage(langs ,lettersObj, delay, preLetter, lang_list);
        // setDelay(letters, preLetter);
        openPriceList(open, priceList);  
        addClassOn(services[0]);
        serviseSwitcher(sNext, sPrev, services);
        // openLanguage(language, lang_list); 

        
        
        setTimeout(() => {
            welcomePage(homePage, homeButton, navButtons, stick, title, location);
        }, 500);

        window.addEventListener("resize", () => {
            var active = document.querySelector(".block.active");
            
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

                sidebarControl(navButtons, el, stick, currentPage);

                switch (currentPage.id) {
                    case "3":
                        iconMoveTimeOut(social_icons);
                        visibleElement(location);
                        break;
                    case "2":
                        // ---- WELCOME ANIMATION ---- //
                           
                        // dentistHover(dentists , clones); 
                        // dentistsControl(dentists, dentistsBox, lettersObj, backButton, nextButton, dentistClones, prevButton);
                        // controlSwitcher(nextButton, backButton, prevButton);

                        hiddenElement(location);
                        break;
                    case "4":
                        iconMove(social_icons);
                        // addClassOff(fog);

                        hiddenElement(location);
                        break;
                    case 4:
                        return;
                        break;
                
                    default:
                        return;
                        break;
                }

                
            });
        }

        // ------------------ LAST FUNCTIONS --------------------- //
        document.querySelector(".blocking").classList.add("off")
        document.querySelector(".blocking").classList.remove("on")

        
        // -------------------------------------------------------- //

    }


// function openLanguage(language, lang_list) {
//     language.addEventListener("click" , function () {
//         if (lang_list.classList.contains("hidden")) {
//             visibleElement(lang_list);
//             addClassActive(language.parentElement)
//             return;
//         }
//         hiddenElement(lang_list);
//         language.parentElement.classList.remove("active");

        
        
        
//         // let lettersT = document.querySelectorAll(".letter");
        
//         // setDelay(lettersT);
        
        
//     })
// }
// function selectLanguage(langs ,lettersObj, delay, preLetter, lang_list) {

//     for (let i = 0; i < langs.length; i++) {
//         const element = langs[i];
//         element.addEventListener("click", function () {
//             removeClassActive(langs);
//             addClassActive(element);
//             hiddenElement(lang_list);


//             /*--------------------------*/

//             const letters = document.querySelectorAll(".letter");
//             console.log(letters);
//             for (let i = 0; i < letters.length; i++) {
//                 letters[i].style.cssText = `transition-duration: 0s;`;
//                 letters[i].classList.remove("visible");
//             }

//             setTimeout(() => {
//                 const newLetters = document.querySelectorAll(".letter");
//                 for (let i = 0; i < newLetters.length; i++) {
//                     const element = newLetters[i];
//                     lettersObj[`${i}`] = element;
//                 }
//                 for (let i = 0; i < newLetters.length; i++) {
//                     newLetters[i].style.cssText = `transition-duration: 1s;`;
//                     if (document.querySelector("#staff").classList.contains("active")) {
//                         newLetters[i].classList.add("visible");
//                     }
//                 }
//                 if (!document.querySelector("#staff").classList.contains("active")) {
//                     setDelay(newLetters, preLetter);
//                 }
//         }, 200);
//         });
//     }
// }
// function controlSwitcher(nextbutton, backButton, prevButton) {
//     nextbutton.addEventListener("click", function () {
//         if (!nextbutton.classList.contains("disable")) {
//             nextDentist(nextbutton, prevButton, backButton);
//         }
//         addDisableToElement(nextbutton);
//         addDisableToElement(prevButton);
//         addDisableToElement(backButton);
//     })
//     prevButton.addEventListener("click", function () {
//         if (!nextbutton.classList.contains("disable")) {
//             prevDentist(prevButton, nextbutton, backButton);
//         }
//         addDisableToElement(nextbutton);
//         addDisableToElement(prevButton);
//         addDisableToElement(backButton);
//     })
// }    
// function nextDentist(button, prev, backButton) {
//     var currentDentist = document.querySelector(".information");
//     var currentInformation = currentDentist.nextElementSibling;
//     var elem_id = currentDentist.id;
//     var id = Number( elem_id.replace(/\D/g , '') );
    
//     var nextDentist;
//     var nextInformation;
    

//     if (id == 7) {
//         nextDentist = document.getElementById("d_1");
//         nextInformation = nextDentist.nextElementSibling;
//     } else
//     {
//         nextDentist = document.getElementById(`d_${id+1}`);
//         nextInformation = nextDentist.nextElementSibling;
//     }
//     currentInformation.classList.remove("period");
//     currentInformation.addEventListener("transitionend", function () {
//         currentDentist.classList.remove("information");
//         currentDentist.classList.add("switched")
//         nextDentist.classList.add("information");
//         nextInformation.classList.add("period");
//     },{once: true});
    
    
//     setTimeout(() => {
//         removeDisableFromElement(button);
//         removeDisableFromElement(prev);
//     }, 4500);
//     setTimeout(() => {
//         removeDisableFromElement(backButton)
//     }, 5000);
// }
// function prevDentist(button, next, backButton) {
//     var currentDentist = document.querySelector(".information");
//     var currentInformation = currentDentist.nextElementSibling;
//     var elem_id = currentDentist.id;
//     var id = Number( elem_id.replace(/\D/g , '') );
    
//     var prevDentist;
//     var prevInformation;
    

//     if (id == 1) {
//         prevDentist = document.getElementById("d_5");
//         prevInformation = prevDentist.nextElementSibling;
//     } else
//     {
//         prevDentist = document.getElementById(`d_${id-1}`);
//         prevInformation = prevDentist.nextElementSibling;
//     }
//     currentInformation.classList.remove("period");
//     currentInformation.addEventListener("transitionend", function () {
//         currentDentist.classList.remove("information");
//         currentDentist.classList.add("switched")
//         prevDentist.classList.add("information");
//         prevInformation.classList.add("period");
//     },{once: true});
    
    
//     setTimeout(() => {
//         removeDisableFromElement(button);
//         removeDisableFromElement(next);
//     }, 4500);
//     setTimeout(() => {
//         removeDisableFromElement(backButton)
//     }, 5000);
// }
function nextServ(services) {
    const curService = document.querySelector(".service.on").getAttribute("data-service");
    var nextService;
    if (Number(curService) < services.length) {
        nextService = document.querySelector(`[data-service="${Number(curService) + 1}"]`);
    } else {
        console.log("yy")
        nextService = document.querySelector(`[data-service="${1}"]`);
    }
    for (let i = 0; i < services.length; i++) {
        const serv = services[i];
        serv.classList.remove("on");
    }
    nextService.classList.add("on");
}
function prevServ(services) {
    const curService = document.querySelector(".service.on").getAttribute("data-service");
    var prevService;
    if (Number(curService) > 1) {
        prevService = document.querySelector(`[data-service="${Number(curService)-1}"]`);
    } else {
        prevService = document.querySelector(`[data-service="${3}"]`);
    }
    for (let i = 0; i < services.length; i++) {
        const serv = services[i];
        serv.classList.remove("on");
    }
    prevService.classList.add("on");
}
function serviseSwitcher(next, prev, services) {
    next.addEventListener("click", function () {
        nextServ(services);
    })
    prev.addEventListener("click", function () {
        prevServ(services);
    })
}
function scrollControl(page) {
    pageScroll(page);
}
function sidebarControl(navButtons, el, stick, page) {
    if (!stick.classList.contains("disable")) {
        scrollControl(page);
        removeClassActive(navButtons);                
        stickControl(el, stick);
        addClassActive(el);   
    }
    addDisableToElement(stick);
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
function openPriceList(open, priceList) {
    open.addEventListener("click", () => {
        console.log("fu");
        priceList.classList.toggle('openlist');
    })
}
function removeClassOff(elems) {
    for (var i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.classList.remove("off");
        elem.classList.add("visibled");
    }
}
function addClassOff(elems) {
    for (var i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.classList.add("off");
    }
}
function iconMove(icons){ 
    for (var i = 0; i < icons.length; i++){
            var icon = icons[i];
            icon.classList.remove("high");
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
            icon.classList.add("high");
        }
    }, 100);
}
function visibleElement(element) {
    element.classList.remove("hidden");
}
function hiddenElement(element) {
    element.classList.add("hidden");
}
// ------------------------------------------------ //

function pageScroll(page) {
    const pages = document.querySelectorAll(".page");
    const low = [];
    const high = [];
    for (let i = 0; i < pages.length; i++) {
        const pageEl = pages[i];
        if (pageEl.id < page.id) {
            low.push(pageEl);
        }else if(pageEl.id > page.id) {
            high.push(pageEl);
        }
        pageEl.classList.remove("this_page");
        pageEl.classList.remove("page_right");
        pageEl.classList.remove("page_left");
    }
    for (let i = 0; i < low.length; i++) {
        const element = low[i];
        element.classList.add("page_left");
    }
    for (let i = 0; i < high.length; i++) {
        const element = high[i];
        element.classList.add("page_right");
    }
    page.classList.add("this_page");
}

// ------------------------------------------------ //
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
        width: ${active.clientWidth}px;
        left: ${active.getBoundingClientRect().left}px;
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
function setOpacityOne(elements) {
    for (const key in elements) {
        if (Object.hasOwnProperty.call(elements, key)) {
            const element = elements[key];
            element.classList.remove("opacityZ");
            element.classList.add("opacityOI")
        }
    }
}
function infoAnimation(dentist, dentistBox, dentists ,letters, information, backButton, clones) {
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

start();

}

