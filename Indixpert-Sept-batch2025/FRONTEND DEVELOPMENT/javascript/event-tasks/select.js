first = document.getElementById("first");
second = document.getElementById("second");

var choice = document.getElementById("choice");

var btn = document.getElementById("btn");

var ans = document.getElementById("answer");

// --------------------------------------------------------------

btn.onclick = () => {
    // alert(first.value);
    // alert(second.value);
    // alert(choice.value);

    if (choice.value == "Add") {
        ans.innerHTML = parseInt(first.value) + parseInt(second.value);
    }
    else if (choice.value == "Sub") {
        ans.innerHTML = parseInt(first.value) - parseInt(second.value);
    }
    else if (choice.value == "Multi") {
        ans.innerHTML = parseInt(first.value) * parseInt(second.value);
    }
    else if (choice.value == "Divi") {
        ans.innerHTML = parseInt(first.value) / parseInt(second.value);
    }
    else if (choice.value == "Mod") {
        ans.innerHTML = parseInt(first.value) % parseInt(second.value);
    }
    else{
        alert("Please select any choice");
    }
}

