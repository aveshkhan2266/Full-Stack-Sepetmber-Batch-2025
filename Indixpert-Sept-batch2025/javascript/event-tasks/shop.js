btn = document.getElementById("bill");

btn.onclick = () => {
    ironPrice = 1200;
    fanPrice = 1500;
    SwitchPrice = 140;
    plugPrice = 65
    lightPrice = 180;
    wirePrice = 1000;
    cameraPrice = 3500;
    adjfanPrice = 1500
    bulbPrice = 150;
    total = 0;

    if (iron.checked){
        total += ironPrice;
    }
    if (fan.checked){
        total += fanPrice;
    }
    if (Switch.checked){
        total += SwitchPrice;
    }
    if (plug.checked){
        total += plugPrice;
    }
    if (light.checked){
        total += lightPrice;
    }
    if (wire.checked){
        total += wirePrice;
    }
    if (camera.checked){
        total += cameraPrice;
    }
    if (adjfan.checked){
        total += adjfanPrice;
    }
    if (bulb.checked){
        total += bulbPrice;
    }

    amount.innerHTML = "Total :- " + total;
}    