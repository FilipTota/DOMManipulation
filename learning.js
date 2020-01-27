let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function addItem() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addItemWithClick() {
    if(inputLength() > 0) { 
        addItem();
    }
}

function addItemWithKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        addItem();
    }
}

button.addEventListener("click", addItemWithClick);

input.addEventListener("keypress", addItemWithKeypress)