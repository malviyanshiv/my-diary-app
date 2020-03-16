/* variables declarations */
let toolbar = document.getElementsByClassName("toolbar")[0];
let sticky = toolbar.offsetTop;


/* Event Registrations */
window.onscroll = function() { windowScrollHandler()};


/* Event handlers */

function windowScrollHandler(){
    if (window.pageYOffset >= 30 )
        toolbar.classList.add("sticky");
    
    else
        toolbar.classList.remove("sticky");
}

function hideElement(className){
    let ele = document.getElementsByClassName(className);
    for(let i = 0; i < ele.length; i++)
        ele[i].classList.add("hide");
}

function showElement(className){
    let ele = document.getElementsByClassName(className);
    for(let i = 0; i < ele.length; i++)
        ele[i].classList.remove("hide");
}

function onclickHandler(current, toshow, tohide){
    let sidenavs = document.getElementsByClassName("side-nav__item");
    for(let i = 0; i < sidenavs.length; i++)
        sidenavs[i].classList.remove("side-nav__item-active");
    current.classList.add("side-nav__item-active");
    hideElement(tohide)
    showElement(toshow);
}


/* --------------------------- EDITOR ------------------------------- */

function showToolbars(cur, toolbars){
    let done = cur.classList.contains("toolbar__item-active");
    let tmp = document.getElementsByClassName("toolbar-active");
    while( tmp.length > 0 )
        tmp[0].classList.remove("toolbar-active");
    
    if( done ){
        cur.classList.remove("toolbar__item-active");
        return;
    }
    
    let act = document.getElementsByClassName("toolbar__item-active");
    while( act.length > 0 )
        act[0].classList.remove("toolbar__item-active");
        
    cur.classList.add("toolbar__item-active");
    for(let i = 0; i < toolbars.length; i++)
        document.getElementById(toolbars[i]).classList.add("toolbar-active");
}