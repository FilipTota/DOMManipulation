// adding elements to unordered list
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

// Function for checking length of input value
function inputLength() {
    return input.value.length;
}

// Function for adding element
function addItem() {
    let li = document.createElement("li");
    let button = document.createElement("button")
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(button);
    button.innerHTML = "Delete";
    input.value = "";
    button.onclick = deleteItem;
}

// Function for input with Click
function addItemWithClick() {
    if(inputLength() > 0) { 
        addItem();
    }
}

// Function for input with Enter
function addItemWithKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        addItem();
    }
}

// Function for class toggle
function onOffClass(event) {
    let done = event.target;
    done.classList.toggle("done");
}

// Function for deleting items in ul
function deleteItem(e) {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
}

// Adding elements to ul
button.addEventListener("click", addItemWithClick);
input.addEventListener("keypress", addItemWithKeypress);

// Changing list class
let list = document.getElementsByTagName("li");
for(let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", onOffClass);
}

// Deleting elements in ul
let item = document.querySelectorAll(".li-button");
for (let el of item) {
    el.addEventListener("click", deleteItem);
}