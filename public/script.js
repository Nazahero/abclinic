window.onload = () => {
    setTimeout(() => {
        let home = document.querySelector(".home");
        let span = document.querySelector(".side_nav span");
        let arrows = document.querySelectorAll(".arrow");
        let service_block = document.querySelector(".services_block");
        let blocks = document.querySelectorAll(".side_nav .block");
        let backgrounds = document.querySelectorAll(".background");
        let open = document.querySelector(".open");
        
        home.scrollIntoView();

        for (let i = 0; i < blocks.length; i++) {
            const eleme = blocks[i];
            eleme.classList.remove("active");
        }
        document.querySelector("#home").classList.add("active");

        document.querySelector(".name").classList.add("ready"); 

        Nav_span(document.querySelector("#home"), span);

        for (let i = 0; i < blocks.length; i++) {
            const el = blocks[i];
            el.addEventListener("click", () => {
                if (el.classList.contains("active")) {
                    return;
                }
                let currentPage = document.querySelector(`.${el.id}`);
                let background = document.querySelector(`#b_${currentPage.getAttribute("class")}`);
    
                removeClasses(blocks);
                addON(service_block);
                Nav_span(el, span);
                iconMove(currentPage);
                scrolling(currentPage);
                setBack(background, backgrounds, currentPage);

                
                el.classList.add("active");
                
            });
        }

        for (let i = 0; i < arrows.length; i++) {
            const arrow = arrows[i];
            
            arrow.addEventListener("click", () => {
                let page = arrow.parentElement.nextSibling;
                let el = document.getElementById(`${page.getAttribute("class")}`);
                let background = document.querySelector(`#b_${page.getAttribute("class")}`);
                
    
                removeClasses(blocks);
                addON(service_block);
                Nav_span(el, span);
                iconMove(page);
                setBack(background, backgrounds, page);
                scrolling(page);
                
                
                el.classList.add("active");
            });
        }

        open.addEventListener("click", () => {
            document.querySelector(".priceList_table").classList.toggle('openlist');
        })
        
        
    }, 1000);
        
        
};
function iconMove(page){
    let icons = document.querySelectorAll(".social_media");
    if (page.id > 1) {  
        for (let i = 0; i < icons.length; i++){
                let icon = icons[i];
                icon.classList.add("high");
        }
        return;
    }
    for (let i = 0; i < icons.length; i++){
        let icon = icons[i];
        icon.classList.remove("high");
    }
}
function setBack(current, arr, page) {
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
function scrolling(element) {
    setTimeout(() => {
        element.scrollIntoView({
            block: "start",
            inline: "nearest", 
            behavior: "smooth",
        })
    }, 200);
    
}

function removeClasses(arr) {
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        elem.classList.remove("active");
    }
}
function addON(el) {
    if (!el.classList.contains("on")) {
        el.classList.add("on");
    }
}

function Nav_span(active, span) {
    span.style = `
        height: ${active.clientHeight}px;
        top: ${active.getBoundingClientRect().top}px;
    `;
}

function navClick(blocks, service_block, span) {
    
}

function arrowClick(arrows, service_block, span) {
    
}


    


