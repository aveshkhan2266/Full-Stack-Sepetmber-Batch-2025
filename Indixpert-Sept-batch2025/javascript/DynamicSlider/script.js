const images = ["car1.jpg", "car2.jpg", "car3.jpg", "car4.jpg"];
x = 0;

window.onload = () => {
    slider();
}

function slider() {
    center.style.backgroundImage = "url(./images/"+ images[x] + ")";
}
// ---------------------------------------------------------

const mainBox = document.createElement("div");
mainBox.style.height = "500px";
mainBox.style.width = "80%";
// mainBox.style.backgroundColor="red";
mainBox.style.display = "flex";
mainBox.style.margin = "auto";
mainBox.style.marginTop = "40px";
body.appendChild(mainBox);

// ---------------------------------------------------------

const left = document.createElement("div");
left.style.height = "100%";
left.style.width = "10%";
// left.style.backgroundColor="yellow";
mainBox.appendChild(left);

// --------------------------------------------------------
const center = document.createElement("div");
center.style.height = "100%";
center.style.width = "80%";
center.style.backgroundSize = "cover";
center.style.borderRadius = "20px";
mainBox.appendChild(center);

// --------------------------------------------------------

const right = document.createElement("div");
right.style.height = "100%";
right.style.width = "10%";
// right.style.backgroundColor="yellow";
mainBox.appendChild(right);

// --------------------------------------------------------

const leftIcon = document.createElement("i");
leftIcon.setAttribute("class", "fa-solid fa-caret-left");
leftIcon.style.fontSize = "70px";
leftIcon.style.marginTop = "200px";
left.appendChild(leftIcon);

// ---------------------------------------------------------

const rightIcon = document.createElement("i");
rightIcon.setAttribute("class", "fa-solid fa-caret-right");
rightIcon.style.fontSize = "70px";
rightIcon.style.marginTop = "200px";
right.appendChild(rightIcon);

// ---------------------------------------------------------


rightIcon.onclick=()=>{
    if(x<3){
        x++;
    }
    else{
        x=0;
    }
    slider();
}

leftIcon.onclick=()=>{
   if(x>0){
    x--;
   }
   else{
    x=3;
   }
   slider();
}