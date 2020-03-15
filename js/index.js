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

// show the edit panel
function showEditPanel() {
    let ele = document.getElementsByClassName("edit-options");
    ele[0].style.bottom = "0";
}

function closeEditPanel() {
    let ele = document.getElementsByClassName("edit-options");
    ele[0].style.bottom = "-14rem";
}