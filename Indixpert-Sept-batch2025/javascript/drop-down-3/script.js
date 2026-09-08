mainbox = document.createElement("div");
mainbox.style.display = "flex"
mainbox.style.justifyContent = "space-evenly";
mainbox.style.backgroundColor = "purple"
mainbox.style.height = "580px"
mainbox.style.width = "100%";
box.appendChild(mainbox)

box1 = document.createElement("div");
box1.style.width = "30%";
mainbox.appendChild(box1);
bar = document.createElement("div");
bar.style.height = "15%"
bar.style.width = "100%"
bar.style.backgroundColor = "green";
// bar.style.margin = "auto"
box1.appendChild(bar);

icon = document.createElement("i");
icon.setAttribute("class", "fa-solid fa-caret-down");
icon.style.float = "right";
icon.style.fontSize = "50px";
bar.appendChild(icon);

dropBox = document.createElement("div");
dropBox.style.height = "0%";
dropBox.style.width = "100%";
dropBox.style.backgroundColor = "lightblue";
// dropBox.style.margin="auto";
dropBox.style.transition = "2s";
box1.appendChild(dropBox);

x = 0;
icon.onclick = () => {
    if(x == 0){
        dropBox.style.height = "70%";
        icon.setAttribute("class","fa-solid fa-caret-up");
        x = 1;
    }
    else{
        dropBox.style.height = "0%";
        icon.setAttribute("class","fa-solid fa-caret-down");
        x=0;
    }
}

box2 = document.createElement("div");
box2.style.width = "30%";
mainbox.appendChild(box2);
bar1 = document.createElement("div");
bar1.style.height = "15%";
bar1.style.width = "30%";
bar1.style.backgroundColor = "green";
box2.appendChild(bar1);

icon1 = document.createElement("i");
icon1.setAttribute("class", "fa-solid fa-caret-down");
icon1.style.float = "right";
icon1.style.fontSize = "50px";
bar1.appendChild(icon1);

dropBox1 = document.createElement("div");
dropBox1.style.height = "0%";
dropBox1.style.width = "30%";
dropBox1.style.backgroundColor = "lightblue";
dropBox1.style.transition = "2s";
mainbox.appendChild(dropBox1);

y = 0;
icon1.onclick = () => {
    if (y == 0) {
        dropBox1.style.height = "70%";
        icon1.setAttribute("class", "fa-solid fa-caret-up");
        y = 1;
    } else {
        dropBox1.style.height = "0%";
        icon1.setAttribute("class", "fa-solid fa-caret-down");
        y = 0;
    }
}

bar2 = document.createElement("div");
bar2.style.height = "15%";
bar2.style.width = "30%";
bar2.style.backgroundColor = "green";
mainbox.appendChild(bar2);

icon2 = document.createElement("i");
icon2.setAttribute("class", "fa-solid fa-caret-down");
icon2.style.float = "right";
icon2.style.fontSize = "50px";
bar2.appendChild(icon2);

dropBox2 = document.createElement("div");
dropBox2.style.height = "0%";
dropBox2.style.width = "30%";
dropBox2.style.backgroundColor = "lightblue";
dropBox2.style.transition = "2s";
mainbox.appendChild(dropBox2);

z = 0;
icon2.onclick = () => {
    if (z == 0) {
        dropBox2.style.height = "70%";
        icon2.setAttribute("class", "fa-solid fa-caret-up");
        z = 1;
    } else {
        dropBox2.style.height = "0%";
        icon2.setAttribute("class", "fa-solid fa-caret-down");
        z = 0;
    }
}