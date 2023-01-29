export function jsScript() {

        let homePage = document.querySelector(".home");
        let homeButton = document.querySelector("#home");
        let title = document.querySelector(".name");
        let stick = document.querySelector(".side_nav span");
        let arrow = document.querySelector(".arrow");
        let service_block = document.querySelector(".services_block");
        let navButtons = document.querySelectorAll(".side_nav .block");
        let backgrounds = document.querySelectorAll(".background");
        let open = document.querySelector(".open");
        let priceList = document.querySelector(".priceList_table");
        let sidebar = document.querySelector(".sidebar_container");
        let social_icons = document.querySelectorAll(".social_media");
        let dentists = document.querySelectorAll(".dentist");
        let fog = document.querySelectorAll(".fog");
        let letters = document.querySelectorAll(".letter");
        let preLetter = setDelay(letters);
        
        welcomePage(homePage, homeButton, navButtons, stick, title);

        for (let i = 0; i < navButtons.length; i++) {
            const el = navButtons[i];
            el.addEventListener("click", () => {
                if (el.classList.contains("active")) {
                    return;
                } 
                let currentPage = document.querySelector(`.${el.id}`);
                let background = document.querySelector(`#b_${currentPage.getAttribute("class")}`);

                sidebarControl(navButtons, el, stick);
                scrollControl(backgrounds, background , currentPage);

                switch (currentPage.id) {
                    case "1":
                        iconMoveTimeOut(social_icons);
                        removeStaffPage(sidebar, social_icons, fog);
                        visibleElement(arrow)
                        break;
                    case "2":
                        iconMove(social_icons);
                        addClassOn(service_block);
                        visiblePriceList(priceList);
                        removeStaffPage(sidebar, social_icons, fog);

                        hiddenElement(arrow);
                        break;
                    case "3":
                        // ---- WELCOME ANIMATION ---- //
                        
                        visible(letters);        
                        toolsParalax(sidebar, fog , social_icons);
                        visibleToolsWhenHover(sidebar, social_icons);
                        visibleDentists(preLetter ,dentists);
                        
                        // ---- ----------------- ---- //

                        // ---- INFO ANIMATION ---- //



                        // ---- -------------- ---- //
                        iconMove(social_icons);
                        hiddenElement(arrow);
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
                let page = arrow.parentElement.nextSibling;
                let el = document.getElementById(`${page.getAttribute("class")}`);
                let background = document.querySelector(`#b_${page.getAttribute("class")}`);
                
                addClassOn(service_block);
                hiddenElement(arrow);
                scrollControl(backgrounds, background , page);
                addClassActive(el);
            });

        openPriceList(open, priceList);      
        
       

function scrollControl(backgrounds, background , page) {
    setBackgroudImage(background, backgrounds, page);
    scrollIntoPage(page);
}
function sidebarControl(navButtons, el, stick) {
    removeClassActive(navButtons);                
    stickControl(el, stick);
    addClassActive(el);   
}
function visibleDentists(preLetter , dentists) {
    preLetter.addEventListener("transitionend", function (){
        removeClassOff(dentists);
    })
};
function visibleToolsWhenHover(sidebar, social_icons) {
    window.addEventListener("mousemove", function (ev) {
        let Y = window.innerHeight;
        let X = window.innerWidth;
        if (ev.clientX >= 0 && ev.clientX <= 75) {
            sidebar.classList.add("hover");
        } else {
            sidebar.classList.remove("hover");
        }
        if ((ev.clientY <= Y && ev.clientY >= (Y - 200)) && (ev.clientX <= X && ev.clientX >= (X - 80))) {
            for (let i = 0; i < social_icons.length; i++) {
                const element = social_icons[i];
                element.classList.add("hover");
            }
        } else {
            for (let i = 0; i < social_icons.length; i++) {
                const element = social_icons[i];
                element.classList.remove("hover");
            }
        }
    });
}
function welcomePage(homePage, homeButton, navButtons, stick, title) {
    homePage.scrollIntoView();
    removeClassActive(navButtons);
    title.classList.add("ready"); 
    stickControl(homeButton, stick);
}
function removeStaffPage(sidebar, social_icons, fog) {
    sidebar.classList.remove("paralax");
    for (let i = 0; i < social_icons.length; i++) {
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
    for (let i = 0; i < social_icons.length; i++) {
        const element = social_icons[i];
        element.classList.add("paralax");
    }
}
function addClassHidden(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.classList.add("hidden");
    }
}
function removeClassOff(elems) {
    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.classList.remove("off");
    }
}
function addClassOff(elems) {
    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.classList.add("off");
    }
}
function visible(letters) {
    setTimeout(() => {
        for (let i = 0; i < letters.length; i++) {
            letters[i].classList.add("visible");
        }
    }, 700);
}
function iconMove(icons){ 
    for (let i = 0; i < icons.length; i++){
            let icon = icons[i];
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
        for (let i = 0; i < icons.length; i++){
            let icon = icons[i];
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
            for (let i = 0; i < arr.length; i++) {
                const back = arr[i];
                back.classList.remove("onthis");
            }
            current.classList.add("onthis");
        }, 500); 
        return;
    }
        for (let i = 0; i < arr.length; i++) {
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
}
function setDelay(letters) {
    let array = [];
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
      
        
      
    for (let i = 1; i-1 < letters.length; i++) {
        const letter = letters[array[i-1]];
        letter.style.cssText = `transition-delay: ${0.4 * i }s`;        
    }
    return letters[array[letters.length - 3]];
}
}



    


