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

function loadEditor(){
    let editor = document.getElementById("editor-container");
    editor.getElementsByClassName("page")[0].innerHTML = document.getElementById("diary-page").innerHTML;
    editor.classList.remove("hide");
}

function hideEditor(){
    document.getElementById("editor-container").classList.add("hide");
}