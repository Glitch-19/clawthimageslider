const slides=document.querySelectorAll(".slides img");
let displayindex=0;
let intervalid=null;
const b1=document.getElementById("b1");
const img1=document.getElementById("i1");
const b2=document.getElementById("b2");
const img2=document.getElementById("i2");
const b3=document.getElementById("b3");
const img3=document.getElementById("i3");
const b4=document.getElementById("b4");
const img4=document.getElementById("i4");
const b5=document.getElementById("b5");
const img5=document.getElementById("i5");
var b1clicked=false;

document.addEventListener("DOMContentLoaded",initializeslider);

function initializeslider(){
if(slides.length>0){
   slides[displayindex].classList.add("displayslide"); 
    intervalid=setInterval(shownext,5000);
}
}
function displayslide(index){
    if(index>=slides.length){
        displayindex=0;
    }else if(index<0){
        displayindex=slides.length-1;
    }
    slides.forEach(slide=>{
    slide.classList.remove("displayslide");
    }
    );
   slides[displayindex].classList.add("displayslide");
}

function showprev(){
    displayindex--;
    displayslide(displayindex);
}

function shownext(){
   
    displayindex++;
    displayslide(displayindex);
}
b1.addEventListener("click", event => {
    displayindex = 0;
    displayslide(displayindex);
    
});
b2.addEventListener("click", event => {
    displayindex = 1;
    displayslide(displayindex);
});
b3.addEventListener("click", event => {
    displayindex = 2;
    displayslide(displayindex);
});
b4.addEventListener("click", event => {
    displayindex = 3;
    displayslide(displayindex);
});

b5.addEventListener("click", event => {
    displayindex = 4;
    displayslide(displayindex);
});
