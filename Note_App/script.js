const noteContainer = document.querySelector(".notes_container");
const Createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input_box");

Createbtn.addEventListener('click', () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = 'input_box';
    img.src = './images/delete.png';
    inputBox.setAttribute("contenteditable", 'true', 'autofocus')
    noteContainer.appendChild(inputBox).appendChild(img);
});

noteContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.tagName === 'P') {
        console.log(e.target.tagName);
        notes = document.querySelectorAll(".input_box");
        notes.forEach(note => {
            note.onkeyup = function () {
                saveData();
            }
        })
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})
const saveData = () => {
    localStorage.setItem("notes", noteContainer.innerHTML)
}

const getData = () => {
    noteContainer.innerHTML = localStorage.getItem("notes");
}
getData();

