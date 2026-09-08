x=10;
document.addEventListener("keydown",(event)=>{
    if(event.keyCode==39){
        carImg.style.marginLeft=x+"px";
        carImg.style.transform="rotateY(0deg)";
        x+=10;
    }
    else if(event.keyCode==37){
        x-=10;
        carImg.style.marginLeft=x+"px";
        carImg.style.transform="rotateY(180deg)";
    }
})