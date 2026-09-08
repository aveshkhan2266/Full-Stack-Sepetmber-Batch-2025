// let btn = document.getElementById("btn");
// let dropdown = document.getElementById("dropdown");

// let btn1 = document.getElementById("btn1");
// let dropdown1 = document.getElementById("dropdown1");

// let btn2 = document.getElementById("btn2");
// let dropdown2 = document.getElementById("dropdown2");

let x = 0;
let y = 0;
let z = 0;

btn.onclick = () => {

    dropdown.style.height = "0px";
    btn.style.rotate = "0deg";
    y = 0;

    dropdown2.style.height = "0px";
    btn2.style.rotate = "0deg";
    z = 0;

    if (x == 0) {
        dropdown.style.height = "400px";
        btn.style.rotate = "180deg";
        x = 1;
    }
    else {
        dropdown.style.height = "0px";
        btn.style.rotate = "0deg";
        x = 0;
    }
}

btn1.onclick = () => {

    dropdown.style.height = "0px";
    btn.style.rotate = "0deg";
    x = 0;

    dropdown2.style.height = "0px";
    btn2.style.rotate = "0deg";
    z = 0;

    if (y == 0) {
        dropdown1.style.height = "400px";
        btn1.style.rotate = "180deg";
        y = 1;
    }
    else {
        dropdown1.style.height = "0px";
        btn1.style.rotate = "0deg";
        y = 0;
    }
}

btn2.onclick = () => {

    dropdown.style.height = "0px";
    btn.style.rotate = "0deg";
    x = 0;

    dropdown1.style.height = "0px";
    btn1.style.rotate = "0deg";
    y = 0;

    if (z == 0) {
        dropdown2.style.height = "400px";
        btn2.style.rotate = "180deg";
        z = 1;
    }
    else {
        dropdown2.style.height = "0px";
        btn2.style.rotate = "0deg";
        z = 0;
    }
}