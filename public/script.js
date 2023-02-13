window.onload = () => {

        var homePage = document.querySelector(".home");
        var homeButton = document.querySelector("#home");
        var title = document.querySelector(".name");
        var stick = document.querySelector(".side_nav > span");
        var arrow = document.querySelector(".arrow");
        var service_block = document.querySelector(".services_block");
        var navButtons = document.querySelectorAll(".side_nav .block");
        var backgrounds = document.querySelectorAll(".background");
        var open = document.querySelector(".open");
        var priceList = document.querySelector(".priceList_table");
        var sidebar = document.querySelector(".sidebar");
        var social_icons = document.querySelectorAll(".social_media");
        var dentists = document.querySelectorAll(".dentist");
        var dentistsBox = document.querySelector(".dentists");
        var fog = document.querySelectorAll(".fog");
        let letters = document.querySelectorAll(".letter");
        var lettersObj = {};
        let delay = [];
        var preLetter = setDelay(letters);
        var informations = document.querySelectorAll(".dentist_information");
        var backButton = document.querySelector(".back_button");
        var nextButton = document.querySelector(".staff .next_button");
        var prevButton = document.querySelector(".staff .prev_button");
        var dentistClones = document.querySelectorAll(".clone");
        var location = document.querySelector(".location");
        var language = document.getElementById("language");
        var lang_list = document.querySelector(".lang_list");
        let detect = new MobileDetect(window.navigator.userAgent);
        
        for (let i = 0; i < letters.length; i++) {
            const element = letters[i];
            lettersObj[`${i}`] = element;
        }
        for (let i = 0; i < letters.length; i++) {
            const element = letters[i];
            let elDelay = element.getAttribute("style");
            delay.push(elDelay);
        }

        console.log("Mobile: " + detect.mobile());       // телефон или планшет
        console.log("Phone: " + detect.phone());         // телефон
        console.log("Tablet: " + detect.tablet());       // планшет
        console.log("OS: " + detect.os());               // операционная система
        console.log("userAgent: " + detect.userAgent()); // userAgent

        checkSize()
        window.addEventListener("resize", () => {checkSize()});
        letters = document.querySelectorAll(".letter");
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
              document.querySelector(".loading").classList.add("on");
              addDisableToElement(document.querySelector(".blocked"))
          }
        }
        

        console.log(service_block);

        setTimeout(() => {
            welcomePage(homePage, homeButton, navButtons, stick, title, location);
        }, 500);

        openPriceList(open, priceList);  
        openLanguage(language, lang_list, letters);    

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
                        iconMove(social_icons);
                        addClassOn(service_block);
                        visiblePriceList(priceList);
                        removeStaffPage(sidebar, social_icons, fog);

                        hiddenElement(arrow);
                        hiddenElement(location);
                        break;
                    case "3":
                        // ---- WELCOME ANIMATION ---- //
                        
                        visible(lettersObj);        
                        toolsParalax(sidebar, fog , social_icons);
                        visibleToolsWhenHover(sidebar, social_icons);
                        addGr(dentists);
                        visibleDentists(preLetter ,dentists);
                        dentistsControl(dentists, dentistsBox, lettersObj, backButton, nextButton, dentistClones, prevButton);
                        backButtonControl(dentists, dentistsBox, lettersObj, informations, backButton, nextButton, dentistClones, prevButton);
                        controlSwitcher(nextButton, backButton, prevButton);

                        // ---- ----------------- ---- //

                        // ---- INFO ANIMATION ---- //



                        // ---- -------------- ---- //
                        iconMove(social_icons);
                        hiddenElement(arrow);
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

            
        arrow.addEventListener("click", () => {
            var page = arrow.parentElement.nextSibling;
            var el = document.getElementById(`${page.getAttribute("class")}`);
            var background = document.querySelector(`#b_${page.getAttribute("class")}`);

            iconMove(social_icons);
            addClassOn(service_block);
            visiblePriceList(priceList);
            removeStaffPage(sidebar, social_icons, fog);
            hiddenElement(arrow);
            sidebarControl(navButtons, el, stick, backgrounds, background , page);
        });
        noDelay(title.querySelector(".title"))
        noDelay(title.querySelector(".subtitle"))

        
        window.addEventListener("resize", () => {
            var active = document.querySelector(".block.active");
            
            setTimeout(() => {
                stickControl(active, stick);
            }, 700);
            scrollControl(backgrounds, document.querySelector(".background.onthis") , document.querySelector(`.${active.id}`));
            noDelayArr(letters, delay)
            
        })

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
            let elemDelay = delay[i];
            element.style.cssText = `transition-delay: 0s;`;
            setTimeout(() => {
                element.style.cssText = elemDelay;
            }, 1000);
        }
    }        
}

function openLanguage(language, lang_list, letters) {
    language.addEventListener("click" , function () {
        if (lang_list.classList.contains("hidden")) {
            visibleElement(lang_list);
            addClassActive(language)
            return;
        }
        hiddenElement(lang_list);
        language.classList.remove("active");

        
        // for (let i = 0; i < letters.length; i++) {
        //     letters[i].style.cssText = `transition-duration: 0s;`;
        //     letters[i].classList.remove("visible");
        // }
        
        // let lettersT = document.querySelectorAll(".letter");
        // noDelayArr(lettersT);
        // for (let i = 0; i < lettersT.length; i++) {
        //     lettersT[i].style.cssText = `transition-duration: 1s;`;
        //     lettersT[i].classList.add("visible");
        // }
        // setDelay(lettersT);
        
        
    })
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
    

    if (id == 5) {
        nextDentist = document.getElementById("d_1");
        nextInformation = nextDentist.nextElementSibling;
    } else
    {
        nextDentist = document.getElementById(`d_${id+1}`);
        nextInformation = nextDentist.nextElementSibling;
    }
    currentInformation.classList.remove("period");
    currentInformation.addEventListener("transitionend", function () {
        currentDentist.classList.remove("information", "switched");
        nextDentist.classList.add("information", "switched");
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
        currentDentist.classList.remove("information", "switched");
        prevDentist.classList.add("information", "switched");
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

function scrollControl(backgrounds, background , page) {
    setBackgroudImage(background, backgrounds, page);
    scrollIntoPage(page);
}
function sidebarControl(navButtons, el, stick, backgrounds, background , page) {
    if (!stick.classList.contains("disable")) {
        scrollControl(backgrounds, background , page);
        removeClassActive(navButtons);                
        stickControl(el, stick);
        addClassActive(el);   
    }
    addDisableToElement(stick);
}
function visibleDentists(preLetter , dentists) {
    preLetter.addEventListener("transitionend", function (){
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
function scrollIntoPage(element) {
    setTimeout(() => {
        element.scrollIntoView({
            block: "start",
            inline: "nearest", 
            behavior: "smooth",
        })
    }, 200);
    
}
function addClassActive(elem) {    
        elem.classList.add("active");    
}
function removeClassActive(arr) {
    for (var i = 0; i < arr.length; i++) {
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
        const clone = dentist.querySelector(".clone");
        const info = dentist.nextSibling; 
        console.log(dentist, info);
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
function setDelay(letters) {
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
    return letters[array[letters.length - 3]];
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


    

