let x = 10;
let y = 400;

document.addEventListener("keydown", (event) => {

    // Right Arrow → Plane aage
    if (event.keyCode == 39) {
        x += 10;
        y -= 10;
        planeImg.style.marginTop = y + "px";
        planeImg.style.marginLeft = x + "px";
        planeImg.style.transform = "rotateY(0deg)";
    }

    // Left Arrow → Plane peeche
    else if (event.keyCode == 37) {
        x -= 10;
          y += 10;
        planeImg.style.marginTop = y + "px";
        planeImg.style.marginLeft = x + "px";
        planeImg.style.transform = "rotateY(180deg)";
    }

    // Up Arrow → Plane upar
    else if (event.keyCode == 38) {
        y -= 10;
        planeImg.style.marginTop = y + "px";
        planeImg.style.transform="rotate(-10deg)";
    }
    
    // Down Arrow → Plane neeche
    else if (event.keyCode == 40) {
        y += 10;
        planeImg.style.marginTop = y + "px";
        planeImg.style.transform="rotate(10deg)";
    }

});