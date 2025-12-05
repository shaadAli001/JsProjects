const noteContainer = document.querySelector(".notes_container");
const Createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input_box");

Createbtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img1 = document.createElement("img");
    let btn_copy = document.createElement("button");

    inputBox.className = "input_box";
    img1.src = "./images/delete.png";
    btn_copy.innerHTML = "copy";

    img1.className = "img1";
    btn_copy.className = "btn_copy";

    inputBox.setAttribute("contenteditable", "true", "autofocus");

    noteContainer.appendChild(inputBox).appendChild(img1);
    noteContainer.appendChild(inputBox).appendChild(btn_copy);

    inputBox.focus();
    document.execCommand("selectAll", false, null);
    document.getSelection().collapseToEnd();

});

noteContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "BUTTON") {
        notes = document.querySelectorAll(".input_box");
        notes.forEach((note) => {
            let text = note.childNodes[0]?.textContent || "";
            copy(text);
        });
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input_box");
        notes.forEach((note) => {
            note.onkeyup = function () {
                saveData();
            };
        });
    }
});

const copy = (text) => {
    navigator.clipboard
        .writeText(text)
        .then(() => alert("Copied!"))
        .catch(err => console.error("Copy failed:", err));
};

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
});
const saveData = () => {
    localStorage.setItem("notes", noteContainer.innerHTML);
};

const getData = () => {
    noteContainer.innerHTML = localStorage.getItem("notes");
};
getData();
