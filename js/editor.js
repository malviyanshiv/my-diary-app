/* variables declarations */
let toolbar = document.getElementsByClassName("toolbar")[0];
let sticky = toolbar.offsetTop;


/* Event Registrations */
window.onscroll = function() { windowScrollHandler()};
document.querySelector("#colorpicker").onchange = () => foreColor();
document.querySelector("#imageSelector").onchange = () => insertImage();


/* Event handlers */

function windowScrollHandler(){
    if (window.pageYOffset >= 30 )
        toolbar.classList.add("sticky");
    
    else
        toolbar.classList.remove("sticky");
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

function showImagePopup(ele) {
    console.log(ele);
}


/* -------------------------------- EDIT FUNCTIONS ------------------------------------- */
bold = ()=> document.execCommand("bold", false, null);
italic = ()=> document.execCommand("italic", false, null);
underline = ()=> document.execCommand("underline", false, null);
foreColor = ()=>document.execCommand("foreColor", false, document.querySelector("#colorpicker").value);

createImagePopup = (src)=> {
    return `<input type="button" data-src="${src}" class="image-element" onclick="showImagePopup(this);">`
}

insertImage = ()=> {
    /* upload image and get the url */
    let url = document.querySelector("#imageSelector").files[0].name;
    document.execCommand("insertHTML", false, createImagePopup(url));
}

justifyCenter = ()=> document.execCommand("justifyCenter", false, null);
justifyFull = ()=> document.execCommand("justifyFull", false, null);
justifyLeft = ()=> document.execCommand("justifyLeft", false, null);
justifyRight = ()=> document.execCommand("justifyRight", false, null);
redo = ()=> document.execCommand("redo", false, null);
undo = ()=> document.execCommand("undo", false, null);
indent = ()=> document.execCommand("indent", false, null);
outdent = ()=> document.execCommand("outdent", false, null);
strikethrough = ()=> document.execCommand("strikethrough", false, null);
subscript = ()=> document.execCommand("subscript", false, null);
superscript = ()=> document.execCommand("superscript", false, null);
createLink = ()=> {
    var selected = document.getSelection();
    let href = prompt("Enter the link:"); // needs and html input element
    if( href != null )
        document.execCommand("insertHTML",false,"<a href='"+href+"'>"+selected+"</a>");
};
unlink = ()=> document.execCommand("unlink", false, null);
insertHorizontalRule = ()=> document.execCommand("insertHorizontalRule", false, null);
insertOrderedList = ()=> document.execCommand("insertOrderedList", false, null);
insertUnorderedList = ()=> document.execCommand("insertUnorderedList", false, null);