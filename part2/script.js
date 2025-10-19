const paragraph = document.getElementById("text");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function() {
    paragraph.textContent = "It is new version!";
});

const box = document.getElementById("box");
const colorBtn = document.getElementById("colorBtn");
const fontBtn = document.getElementById("fontBtn");


colorBtn.addEventListener("click", () => {
    const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
});


fontBtn.addEventListener("click", () => {
    const sizes = ["14px", "18px", "22px", "26px"];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    box.style.fontSize = randomSize;
});

const list = document.getElementById("itemList");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

let counter = 1;

addBtn.addEventListener("click", () => {
    counter++;
    const newItem = document.createElement("li");
    newItem.textContent = `New item ${counter}`;
    list.appendChild(newItem);
});

removeBtn.addEventListener("click", () => {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
        counter--;
    }
});