btn.onclick = () => {
    if (choice.value == "fiveRate") {
        var output = st.value / 100 * 5;
    }
    else if (choice.value == "tenRate") {
        var output = st.value / 100 * 10;
    }
    else if (choice.value == "twentfiveRate") {
        var output = st.value / 100 * 25;
    }
    else if (choice.value == "fiftyRate") {
        var output = st.value / 100 * 50;
    }
    else {
        alert("Select Choice");
    }

    discount = output - st.value;

    if (gs.value == "gstfive") {
        var result = discount / 100 * 5;
    }

    gst=discount+result;

    alert(gst);

}

