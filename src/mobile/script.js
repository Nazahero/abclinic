export function MobileJs() {
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
        const contact = document.querySelector(".contact");
        const language = document.getElementById("language");
        const lang_list = document.querySelector(".lang_list");
        const blog_view = document.querySelector(".blog_view");
        let pub_photos = document.querySelectorAll(".pub_photo");
        const blogView_back = document.querySelector(".blog_shadow");
        const blog_shadow = document.querySelector(".view_back");
        // const langs = document.querySelectorAll(".lang_block");

        // setTimeout(() => {
        //     window.history.pushState("", "regenerate", "/photos");
        // }, 5000);

        // --------------------- LANGUAGE -------------------- //

        language.addEventListener("click", function () {
            if (!lang_list.classList.contains("visible")) {
                lang_list.classList.add("visible");
            }
        })
        window.addEventListener("touchstart", function () {
            if (lang_list.classList.contains("visible")) {
                setTimeout(() => {
                    lang_list.classList.remove("visible");
                }, 200);
            }
        })

        // --------------------- BLOG VIEW ------------------------- //

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

        BlogView(pub_photos, blog_view)

        blogView_back.addEventListener("click", () => {
            blog_view.classList.remove("show");
        })
        blog_shadow.addEventListener("click", () => {
            blog_view.classList.remove("show");
        })


        // --------------------- FIRST FUNCTIONS ------------------------ //
        // selectLanguage(langs ,lettersObj, delay, preLetter, lang_list);
        // setDelay(letters, preLetter);
        openPriceList(open, priceList);
        var prevPosition = priceList.scrollTop;
        var curPosition;
        priceList.addEventListener("scroll", function () {
            priceList.ontouchend = () => {
                curPosition = priceList.scrollTop;
                if (!priceList.scrollTop == prevPosition) {
                    if (curPosition > prevPosition) {
                        priceList.parentElement.classList.add("openlist");
                        prevPosition = curPosition;
                        return;
                    }
                }
                if (curPosition == 0 && curPosition < prevPosition) {
                    priceList.parentElement.classList.remove("openlist");
                    prevPosition = curPosition;
                }
            }
        })

        document.querySelector(".root").style.cssText = `height: ${window.innerHeight}px`;
        window.onload = () => {
            console.log("loaded");
            trimBackgrounds(backgrounds);
        }
        addClassOn(services[0]);
        serviseSwitcher(sNext, sPrev, services);
        // openLanguage(language, lang_list); 

        // --------------------- CATEGORY --------------------- //
        const interval = setInterval(() => {
            if (document.querySelector(".category")) {
                const categories = document.querySelectorAll(".category");
                var pub_back = document.querySelectorAll(".pub_back");
                const content = document.querySelector(".blog .content");
                var changed = false;


                for (let k = 0; k < pub_back.length; k++) {
                    const back = pub_back[k];
                    back.addEventListener("click", function () {
                        setTimeout(() => {
                            pub_photos = document.querySelectorAll(".pub_photo");
                            BlogView(pub_photos, blog_view);
                        }, 200);
                        content.classList.remove("on");
                    })
                };
                console.log(categories);
                for (let i = 0; i < categories.length; i++) {
                    const button = categories[i];
                    if (button.classList.contains("active") && (!changed)) {
                        setTimeout(() => {
                            pub_photos = document.querySelectorAll(".pub_photo");
                            BlogView(pub_photos, blog_view);
                        }, 200);
                        changed = true;
                    }
                    button.addEventListener("click", function() {
                        setTimeout(() => {
                            content.classList.add("on")
                            pub_photos = document.querySelectorAll(".pub_photo");
                            BlogView(pub_photos, blog_view);
                        }, 200);
                        changed = true;
                    }, ) 
                }
                clearInterval(interval)
            }
        }, 100);
        setTimeout(() => {
            clearInterval(interval)
        }, 10000);

        // ---------------------- INFO ----------------------- //

        const infoImg = document.querySelector(".info_back img");
        const info = document.querySelector(".info");

        infoImg.style.top = `${info.scrollTop}px`;
        info.addEventListener("scroll", function () {
            infoImg.style.top = `${info.scrollTop}px`;
        })

        // --------------------- CONTACTS --------------------- //

        contact.firstElementChild.addEventListener("click", function () {
            contact.classList.toggle("opened");
        })

        // --------------------- COPY FUNCTIONS ----------------------- //

        var copy_button = document.getElementById("copy");
        copy_button.addEventListener("click", function () {
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

        setTimeout(() => {
            welcomePage(homePage, homeButton, navButtons, stick, title, location);
        }, 500);

        window.addEventListener("resize", () => {
            var active = document.querySelector(".block.active");
            document.querySelector(".root").style.cssText = `height: ${window.innerHeight}px`;
            trimBackgrounds(backgrounds);
            setTimeout(() => {
                stickControl(active, stick);
            }, 700);
        })

        // -------------------- NAVIGATION BUTTON EVENTS ----------------------- //

        for (var i = 0; i < navButtons.length; i++) {
            const el = navButtons[i];
            el.addEventListener("click", () => {
                if ((el.classList.contains("active")) || (el.classList.contains("stopped")) || (el.classList.contains("disable"))) {
                    return;
                }

                const currentPage = document.querySelector(`.${el.id}`);

                stopping(navButtons);

                trimBackgrounds(backgrounds);

                sidebarControl(navButtons, el, stick, currentPage);

                switch (currentPage.id) {
                    case "3":
                        iconMoveTimeOut(social_icons);
                        visibleElement(location);
                        addClassOff(fog);
                        break;
                    case "2":
                        // ---- WELCOME ANIMATION ---- //

                        // dentistHover(dentists , clones); 
                        // dentistsControl(dentists, dentistsBox, lettersObj, backButton, nextButton, dentistClones, prevButton);
                        // controlSwitcher(nextButton, backButton, prevButton);
                        dentistSwitcher(nextButton, prevButton)
                        removeClassOff(fog);
                        iconMove(social_icons);
                        hiddenElement(location);
                        break;
                    case "4":
                        iconMove(social_icons);
                        addClassOff(fog);

                        hiddenElement(location);
                        break;
                    case "1":
                        iconMove(social_icons);
                        addClassOff(fog);

                        hiddenElement(location);

                        break;
                    case "5":
                        iconMove(social_icons);
                        addClassOff(fog);

                        
                        hiddenElement(location);
                        break;
                    default:
                        return;
                        break;
                }

                setTimeout(() => {
                    removeStopping(navButtons);
                }, 1600);

            });



        }

        // ------------------ LAST FUNCTIONS --------------------- //
        document.querySelector(".blocking").classList.add("off")
        document.querySelector(".blocking").classList.remove("on")


        // -------------------------------------------------------- //

    }

    function BlogView(pub_photos, blog_view) {
        for (let i = 0; i < pub_photos.length; i++) {
            const el = pub_photos[i];
            el.addEventListener("click", () => {
                if (!blog_view.classList.contains("show")) {
                    blog_view.querySelector(".images").innerHTML = "";
                    blog_view.classList.add("show");
                    console.log("beach");
                    let there = false;

                    console.log(el.parentElement.children);
    
                    for (let l = 0; l < el.parentElement.children?.length; l++) {
                        const photo = el.parentElement.children[l];
                    
                        if (el == photo) {
                            there = true;
                        }

                        console.log(photo);
                        
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

    function stopping(arr) {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            element.classList.add("stopped")
        }
    }
    function removeStopping(arr) {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            element.classList.remove("stopped")
        }
    }

    function trimBackgrounds(backgrounds) {
        for (let i = 0; i < backgrounds.length; i++) {
            const background = backgrounds[i];
            const X = background.clientWidth;
            const backgroundImg = background.firstElementChild;
            if (background.id == "b_services") {
                backgroundImg.style.cssText = `
                left: ${209 * (X / backgroundImg.clientWidth - 1)}%;
            `;
                break;
            }
            backgroundImg.style.cssText = `
            left: ${80 * (X / backgroundImg.clientWidth - 1)}%;
        `;
        }
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
            prevService = document.querySelector(`[data-service="${Number(curService) - 1}"]`);
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
            priceList.parentElement.classList.toggle('openlist');
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
    function iconMove(icons) {
        for (var i = 0; i < icons.length; i++) {
            var icon = icons[i];
            icon.classList.remove("high");
        }
    }
    function iconMoveTimeOut(icons) {
        setTimeout(() => {
            for (var i = 0; i < icons.length; i++) {
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
            } else if (pageEl.id > page.id) {
                high.push(pageEl);
            }
            if (pageEl.classList.contains("this_page")) {
                setTimeout(() => {
                    pageEl.classList.add("hidden");
                }, 1000);
            } else {
                pageEl.classList.add("hidden");
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
        page.classList.remove("hidden");

        for (let i = 0; i < pages.length; i++) {
            const p = pages[i];
            p.addEventListener("transitionend", function () {
                if (!page.classList.contains("this_page")) {
                    setTimeout(() => {
                        page.classList.add("hidden");
                    }, 200);
                }
            })
        }

    }

    // ------------------------------------------------ //

    function dentistSwitcher(nextButton, prevButton) {
        nextButton.addEventListener("click", function () {
            if (!nextButton.classList.contains("stopped")) {
                nextButton.classList.add("stopped");
                nextDentist(nextButton)
            }
        })
        prevButton.addEventListener("click", function () {
            if (!prevButton.classList.contains("stopped")) {
                prevButton.classList.add("stopped");
                prevDentist(prevButton)
            }
        })
    }

    function nextDentist(nextButton) {
        const curDen = document.querySelector(".dentist.on");
        const curInf = document.querySelector(`[data-information="${curDen.id}"]`);
        var nextDen;
        var nextInf;
        if (curDen.nextElementSibling) {
            nextDen = curDen.nextElementSibling;
        } else {
            nextDen = document.getElementById("d_1");
        }
        nextInf = document.querySelector(`[data-information="${nextDen.id}"]`);

        curDen.classList.remove("on");
        nextDen.classList.add("on");

        curInf.classList.remove("period");
        openInfo(nextInf);

        setTimeout(() => {
            nextButton.classList.remove("stopped")
        }, 4000);

    }

    function prevDentist(prevButton) {
        const curDen = document.querySelector(".dentist.on");
        const curInf = document.querySelector(`[data-information="${curDen.id}"]`);
        var prevDen;
        var prevInf;
        if (curDen.previousElementSibling) {
            prevDen = curDen.previousElementSibling;
        } else {
            prevDen = document.getElementById("d_7");
        }
        prevInf = document.querySelector(`[data-information="${prevDen.id}"]`);

        curDen.classList.remove("on");
        prevDen.classList.add("on");

        curInf.classList.remove("period");
        openInfo(prevInf);

        setTimeout(() => {
            prevButton.classList.remove("stopped")
        }, 4000);

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
        if (!el?.classList.contains("on")) {
            el?.classList.add("on");
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

    function openInfo(information) {
        console.log(information);
        information.classList.add("period");
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


    const interval = setInterval(() => {
        if (document.querySelector(".service") && document.querySelector(".nodiv")) {
            start();
            clearInterval(interval)
        }
    }, 100);

}

