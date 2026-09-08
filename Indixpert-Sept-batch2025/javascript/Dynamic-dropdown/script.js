mainbox = document.createElement("div");
mainbox.style.height = "550px";
mainbox.style.width = "100%";
// mainbox.style.backgroundColor="red";
mainbox.style.paddingTop = "20px";
// mainbox.style.display="flex";
Body.appendChild(mainbox);

center = document.createElement("div");
center.style.height = "10%";
center.style.width = "30%";
center.style.backgroundColor = "purple";
center.style.margin = "auto";
mainbox.appendChild(center);

icon = document.createElement("i");
icon.setAttribute("class", "fa-solid fa-caret-down");
icon.style.float = "right";
icon.style.fontSize = "50px";
center.appendChild(icon);

dropBox = document.createElement("div");
dropBox.style.height = "0%";
dropBox.style.width = "30%";
dropBox.style.backgroundColor = "lightblue";
dropBox.style.margin = "auto";
dropBox.style.transition = "2s";
mainbox.appendChild(dropBox);

x = 0;
icon.onclick = () => {
    if (x == 0) {
        dropBox.style.height = "70%";
        icon.setAttribute("class", "fa-solid fa-caret-up");
        x = 1;
    }
    else {
        dropBox.style.height = "0%";
        icon.setAttribute("class", "fa-solid fa-caret-down");
        x = 0;
    }
}