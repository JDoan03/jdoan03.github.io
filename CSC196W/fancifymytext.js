function bigger() {
    myAlert();
    document.getElementById("bigger").style.fontSize="24pt";
}

function myAlert() {
    alert("Hello, world!");
}

function fancyShm() {
    var input = document.getElementById("bigger");
    if(document.getElementById("style").checked == true) {
        input.style.fontWeight="bold";
        input.style.color="blue";
        input.style.textDecoration="underline blink";
    } else {
        input.style.fontWeight="normal";
        input.style.color="black";
        input.style.textDecoration="none"; 
    }
}

function moo() {
    document.getElementById("bigger").value = document.getElementById("bigger").value.toUpperCase();
    var par = document.getElementById("bigger").value;
    var parts = par.split(".");
    par = parts.join("-Moo")
    document.getElementById("bigger").value = par;
}
