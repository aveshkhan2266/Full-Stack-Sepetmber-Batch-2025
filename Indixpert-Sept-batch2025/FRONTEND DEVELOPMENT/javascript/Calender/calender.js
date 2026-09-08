var month=["January","Februry","March","April","May","June","July","August","Septmber","October","Nevember","December"];

var images=[""]
var z=0;
function slider(){
    // img.style.backgroundImage="url(../Array/images/"+month[z]+")";
    h1.innerHTML=month[z];
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