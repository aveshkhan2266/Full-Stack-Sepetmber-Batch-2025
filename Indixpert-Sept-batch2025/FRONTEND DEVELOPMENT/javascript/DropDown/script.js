x = 0;
btn.onclick = () => {
    if (x == 0) {
        dropdown.style.height = "500px";
        btn.style.rotate="180deg";
        x = 1;
    }
    else {
        dropdown.style.height = "0px";
        btn.style.rotate="0deg";
        x = 0;
    }
}