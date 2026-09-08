a = 10;
y = 10;
document.addEventListener("keydown", (event) => {
    if (event.keyCode == 39) {
        // alert("hello");
        a+=10;
        box.style.marginLeft = a + "px";
    }
    else if(event.keyCode == 37){
        a-=10;
        box.style.marginLeft = a + "px";
    }
    else if(event.keyCode == 40){
        y+=10;
        box.style.marginTop = y + "px";
    }
    else if(event.keyCode == 38){
        y-=10;
        box.style.marginTop = y + "px";
    }
});
