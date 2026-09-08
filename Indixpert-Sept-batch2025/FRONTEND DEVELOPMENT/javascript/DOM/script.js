
heading=document.createElement("h1");
heading.innerHTML="Hello Avesh";
heading.style.color="red";
heading.style.fontSize="50px";
body.appendChild(heading);


box=document.createElement("div");
box.style.height="300px";
box.style.width="300px";
box.style.backgroundColor="blue";

body.appendChild(box);


littleBox=document.createElement("div");
littleBox.style.height="100px";
littleBox.style.width="100px";
littleBox.style.backgroundColor="yellow";

box.appendChild(littleBox);