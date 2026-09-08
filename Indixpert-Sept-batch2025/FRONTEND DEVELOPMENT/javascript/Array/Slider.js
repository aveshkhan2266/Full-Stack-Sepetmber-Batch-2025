var cars=["car1.jpg","car2.jpg","car3.jpg","car4.jpg"];
var z=0;
function slider(){
    img.style.backgroundImage="url(./images/"+cars[z]+")";
}

slider();

right.onclick=()=>{
    if(z<3){
        z++;
    }
    else{
        z=0;
    }
    slider();
}

left.onclick=()=>{
    if(z>0){
        z--;
    }
    else{
        z=3;
    }
    slider();
}