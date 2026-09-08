btn = document.getElementById("bill");


btn.onclick = () => {
    applePrice = 350;
    bananaPrice = 50;
    mangoPrice = 99;
    strawberryPrice = 450;
    dragonFruitPrice = 120;
    lichiPrice = 180;
    grapesPrice = 320;
    orangePrice = 70;
    pineapplePrice = 100;
    total = 0;
    dis = 0;
    mygst=0;

    if (apple.checked) {
        // total=total+applePrice;
        total += applePrice;
    }
    if (banana.checked) {
        total += bananaPrice;
    }
    if (mango.checked) {
        total += mangoPrice;
    }
    if (strawberry.checked) {
        total += strawberryPrice;
    }
    if (dragonFruit.checked) {
        total += dragonFruitPrice;
    }
    if (lichi.checked) {
        total += lichiPrice;
    }
    if (grapes.checked) {
        total += grapesPrice;
    }
    if (orange.checked) {
        total += orangePrice;
    }
    if (pineapple.checked) {
        total += pineapplePrice;
    }


     if (Gst.value == 5) {
        mygst = total * 5 / 100;
    }
    else if (Gst.value == 10) {
        mygst = total * 10 / 100;
    }
    else if (Gst.value == 18) {
        mygst = total * 18 / 100;
    }
    else if (Gst.value == 28) {
        mygst = total * 28 / 100;
    }
    else {
        alert("Select Gst Rate");
    }

    AmountAfterGST=total+mygst;

    if (Discount.value == 5) {
        dis = AmountAfterGST * 5 / 100;
    }
    else if (Discount.value == 10) {
        dis = AmountAfterGST * 10 / 100;
    }
    else if (Discount.value == 15) {
        dis = AmountAfterGST * 15 / 100;
    }
    else if (Discount.value == 20) {
        dis = AmountAfterGST * 20 / 100;
    }
    else if (Discount.value == 25) {
        dis = AmountAfterGST * 25 / 100;
    }
    else {
        alert("Select Discount Rate");
    }
   

    amount.innerHTML = "Total :- " + total;
    CartGst.innerHTML = "Gst :- " + mygst +"( "+Gst.value+"% )";
    d.innerHTML = "Discount :- " + dis+"( "+Discount.value+"% )";
    TotalBill.innerHTML = "Total bill is : " +(AmountAfterGST-dis);
}

