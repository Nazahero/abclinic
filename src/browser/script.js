
export function BrowserJs(){
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
        var dentists = document.querySelectorAll(".dentist");
        const dentistsBox = document.querySelector(".dentists");
        const fog = document.querySelectorAll(".fog");
        var letters = document.querySelectorAll(".letter");
        const lettersObj = {};
        const delay = []; 
        const preLetter = {};
        let informations = document.querySelectorAll(".dentist_information");
        const backButton = document.querySelector(".back_button");
        const nextButton = document.querySelector(".staff .next_button");
        const prevButton = document.querySelector(".staff .prev_button");
        const dentistClones = document.querySelectorAll(".clone");
        const location = document.querySelector(".location");
        const elementHints = document.querySelectorAll("[data-hint]");
        const hint = document.getElementById("hint");
        const clones = document.querySelectorAll(".clone");
        const contact = document.querySelector(".contact");
        const default_category = document.getElementById("default_category");
        const blog_view = document.querySelector(".blog_view");
        let pub_photos = document.querySelectorAll(".pub_photo");
        const blog_shadow = document.querySelector(".blog_shadow");
        const blogView_back = document.querySelector(".view_back");
        
        // ---------------------------- EVENTS ------------------------------ //
        
        
        let prevpath = window.location.pathname;
        
        
        setInterval(() => {
            if (prevpath != window.location.pathname) {
                setTimeout(() => {
                    pub_photos = document.querySelectorAll(".pub_photo");
                    BlogView(pub_photos, blog_view);
                }, 200);
                var active = document.querySelector(".block.active");
                scrollControl(backgrounds, document.querySelector(".background.onthis") , document.querySelector(`.${active.id}`), "instant");
                prevpath = window.location.pathname; 
            }
        }, 100);

         // --------------------------- BLOG SWITCH --------------------------------- //

         const BlogView_next = document.querySelector(".blog_view .next_slide");
         const BlogView_prev = document.querySelector(".blog_view .prev_slide");

         BlogView_next?.addEventListener("click", function () {
            const active_view = document.querySelector(".blog_view .image.active");
            active_view?.nextElementSibling.classList.add("active")
            active_view?.nextElementSibling.classList.remove("after");
            active_view.classList.remove("active");
            active_view.classList.add("before");
         })

         BlogView_prev?.addEventListener("click", function () {
            const active_view = document.querySelector(".blog_view .image.active");
            active_view?.previousElementSibling.classList.add("active")
            active_view?.previousElementSibling.classList.remove("before");
            active_view?.classList.remove("active");
            active_view?.classList.add("after");
         })
        
        // --------------------------- BLOG VIEW --------------------------------- //

        BlogView(pub_photos, blog_view);
       
        blogView_back.addEventListener("click", () => {
            blog_view.classList.remove("show");
        })
        blog_shadow.addEventListener("click", () => {
            blog_view.classList.remove("show");
        })
        


        // --------------------------- INFO BACK --------------------------------- //

        const infoImg = document.querySelector(".info_back img");
        const info = document.querySelector(".info");

        infoImg.style.top = `${info.scrollTop - (window.innerHeight * 0.7)}px`;
        info.addEventListener("scroll", function () {
            infoImg.style.top = `${info.scrollTop - (window.innerHeight * 0.7)}px`;
        })

        // --------------------- CONTACTS --------------------- //

        contact.firstElementChild.addEventListener("click", function () {
            contact.classList.toggle("opened");
        })

        // --------------------- COPY FUNCTIONS ----------------------- //

            var copy_button = document.getElementById("copy");
            copy_button.addEventListener("click", function (){
                const copyText = copy_button.previousElementSibling.innerHTML;
                const sysInput = document.createElement("input");
                sysInput.setAttribute("value", copyText); 

                document.body.appendChild(sysInput);

                sysInput.select();

                document.execCommand("copy");

                copy_button.parentElement.classList.add("copied");
                document.body.removeChild(sysInput)
            });
                    
                    
        
        // -------------------------------------------- //
        
        // --------------------------- BLOG CATEGORIES --------------------------- //
        
        const blog_buttons = document.querySelectorAll(".category");
        const pre_text = document.querySelector(".content .pre_text");
        var changed = false;


        for (let i = 0; i < blog_buttons.length; i++) {
            const button = blog_buttons[i];
            if (button.classList.contains("active") && (!changed)) {
                pre_text.innerHTML = `${pre_text.getAttribute("data-empty")}`;
                setTimeout(() => {
                    pub_photos = document.querySelectorAll(".pub_photo");
                    BlogView(pub_photos, blog_view);
                }, 200);
                changed = true;
            }
            button.addEventListener("click", function() {
                pre_text.innerHTML = `${pre_text.getAttribute("data-empty")}`;
                setTimeout(() => {
                    pub_photos = document.querySelectorAll(".pub_photo");
                    BlogView(pub_photos, blog_view);
                }, 200);
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

        
        // selectLanguage(langs ,lettersObj, delay, preLetter, lang_list, pre_text, dentistsBox);
        openPriceList(open, priceList);  

        var prevPosition = 0;
        var curPosition;
        var timeout;
        
        priceList.addEventListener("scroll", function (){
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                curPosition = priceList.scrollTop;
                if (!priceList.scrollTop == prevPosition) {
                    if (curPosition > prevPosition ) {
                      priceList.classList.add("openlist");
                      prevPosition = curPosition;
                      return;
                    }        
                }
                if (curPosition == 0 && curPosition < prevPosition) {
                    priceList.classList.remove("openlist");
                    prevPosition = curPosition;
                }
            }, 10);
        })

        
        setTimeout(() => {
            welcomePage(homePage, homeButton, navButtons, stick, title, location);

            letters = document.querySelectorAll(".letter");
            informations = document.querySelectorAll(".dentist_information")
            dentists = document.querySelectorAll(".dentist");

            for (let i = 0; i < letters.length; i++) {
                const element = letters[i];
                lettersObj[`${i}`] = element;
            }
            for (let i = 0; i < letters.length; i++) {
                const element = letters[i];
                const elDelay = element.getAttribute("style");
                delay.push(elDelay);
            }

            setDelay(letters, preLetter);

        }, 500);

        window.addEventListener("resize", () => {
            var active = document.querySelector(".block.active");
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
                        dentistHover(dentists); 
                        toolsParalax(sidebar, fog , social_icons);
                        visibleToolsWhenHover(sidebar, social_icons);
                        addGr(dentists);
                        visibleDentists(preLetter ,dentists);
                        dentistsControl(dentists, lettersObj, backButton, nextButton, prevButton);
                        backButtonControl(dentists, lettersObj, informations, backButton, nextButton, prevButton);
                        controlSwitcher(nextButton, backButton, prevButton);

                        // ---- ----------------- ---- //
                       


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
                        iconMove(social_icons);
                        removeStaffPage(sidebar, social_icons, fog);
                        hiddenElement(arrow);
                        hiddenElement(location);
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
            dentistHover(dentists); 
            toolsParalax(sidebar, fog , social_icons);
            visibleToolsWhenHover(sidebar, social_icons);
            addGr(dentists);
            visibleDentists(preLetter ,dentists);
            dentistsControl(dentists, lettersObj, backButton, nextButton, prevButton);
            backButtonControl(dentists, lettersObj, informations, backButton, nextButton, prevButton);
            controlSwitcher(nextButton, backButton, prevButton);
            // ---- -------------- ---- /

            // ---- -------------- ---- //
            iconMove(social_icons);
            hiddenElement(arrow);
            hiddenElement(location);
        });

        // ------------------ LAST FUNCTIONS --------------------- //
        noDelay(title.querySelector(".title"))
        noDelay(title.querySelector(".subtitle"))
        document.querySelector(".blocking")?.classList.add("off")
        document.querySelector(".blocking")?.classList.remove("on")
        // checkSize()
        // window.addEventListener("resize", () => {checkSize()});
        
        // -------------------------------------------------------- //

    }


function dentistHover(dentists) {
    for (let i = 0; i < dentists.length; i++) {
        const dentist = dentists[i];
        dentist.addEventListener("mouseenter", function () {
            dentist.classList.add("hover");
        })
        dentist.addEventListener("mouseleave", function () {
            dentist.classList.remove("hover")
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
        removeDisableFromElement(backButton)
        removeDisableFromElement(prev);
    }, 500);
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
function BlogView(pub_photos, blog_view) {
    for (let i = 0; i < pub_photos.length; i++) {
        const el = pub_photos[i];
        el.addEventListener("click", () => {
            if (!blog_view.classList.contains("show")) {
                blog_view.querySelector(".images").innerHTML = "";
                blog_view.classList.add("show");
                let there = false

                for (let l = 0; l < el.parentElement.parentElement.children?.length; l++) {
                    const photo = el.parentElement.parentElement.children[l].firstElementChild;
                
                    if (el == photo) {
                        there = true;
                    }
                    
                    blog_view.querySelector(".images").insertAdjacentHTML("beforeend",
                        `
                            <div class="image ${el == photo ? "active" : there ? "after" : "before"}">
                                <img src="${photo.getAttribute("src")}">
                            </div>
                        `
                    );
                }
            }                
        })
    }
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
        setTimeout(() => {
            elem.classList.add("visibled");
        }, 1500)
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
    }, 1000);
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
            current?.classList?.add("onthis");
        }, 500); 
        return;
    }
        for (var i = 0; i < arr.length; i++) {
            const back = arr[i];
            back.classList.remove("onthis");
        }
        current?.classList?.add("onthis");
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
function backButtonControl(dentists, letters, informations, back, next, prev) {
    back.addEventListener("click", () => {
        backStaff( dentists ,letters, informations, back, next, prev)
    })
}
function dentistsControl(dentists, letters, back, next, prev) {
    for (let i = 0; i < dentists.length; i++) {
        const dentist = dentists[i];
        const info = dentist.nextSibling; 
        dentist.addEventListener("click", () => {
            if (!dentist.classList.contains("disable")) {
                infoAnimation(dentist, dentists, letters, info, back);
                setDentistsBox(dentist);
                visibleElement(next);
                visibleElement(prev);     
            }     
        })
    }
}
function setOpacityZero(elements) {
    for (const key in elements) {
        if (Object.hasOwnProperty.call(elements, key)) {
            const element = elements[key];
            element.classList.add("opacityZ");
            element.classList.remove("opacityOI")
        }
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
        letter.style.cssText = `transition-delay: ${0.2* i }s`;        
    }
    preLetter["letter"] = letters[array[letters.length - 2]];
}
function infoAnimation(dentist, dentists ,letters, information, backButton) {
    setOpacityZero(letters)
    switchDentist(dentists, dentist);
    openInfo(information);
    backButtonVisible(backButton);
}
function backStaff( dentists ,letters, information, backButton, next, prev) {
    var info = document.querySelector(".information");
    if (!backButton.classList.contains("disable")) {
        hiddenElement(next);
        hiddenElement(prev);
        setOpacityOne(letters)
        closeDentists(dentists, info);
        backButtonHidden(backButton);
        removeDentistsBox(info)
        closeInfo(information);
    }
    addDisableToElement(backButton);
}
function openInfo(information) {
    information.classList.add("period");
}
function closeInfo(informations) {
    for (var i = 0; i < informations.length; i++) {
        const information = informations[i];
        information.classList.remove("period");
    }
}
function setDentistsBox(dentist) {
    dentist.parentElement.classList.add("noinfo", "alternative");
}
function removeDentistsBox(dentist) {
    dentist.parentElement.classList.remove("noinfo", "alternative");
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
function backButtonHidden(button) {
    button.classList.remove("visible");
    button.addEventListener("transitionend", () => {
        setTimeout(() => {
            removeDisableFromElement(button);
        }, 100);
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
    const interval = setInterval(() => {
        if (document.querySelector(".dentist")) {
            start();
            clearInterval(interval)
        }
    }, 100);

}

