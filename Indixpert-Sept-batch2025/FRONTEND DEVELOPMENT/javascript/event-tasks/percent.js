btn.onclick = () => {
    if (choices.value == "fiveRate") {
        var output = input.value / 100 * 5;
    }
    else if (choices.value == "tenRate") {
        var output = input.value / 100 * 10;
    }
    else if (choices.value == "twentfiveRate") {
        var output = input.value / 100 * 25;
    }
    else if (choices.value == "fiftyRate") {
        var output = input.value / 100 * 50;
    }
    else {
        alert("Select Choice");
    }

    
    r.innerHTML = input.value-output;
}