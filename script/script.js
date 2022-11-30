// Assignment 2


// Event listener

document.body.addEventListener("click", Clicking)


// All of the consts

const asidebg = document.querySelector("aside");
const newbutton = document.querySelector(".button1");
const darkMode = document.querySelector(".button2");
const savebutton = document.querySelector(".button3");
const linkedin = document.querySelector(".linkedin");
const internet = document.querySelector(".internet");
const cancelbutton = document.querySelector(".button4");
const notebox = document.querySelector(".notebox");
const textColor = document.querySelector(".text");


// Function for clicking buttons

function Clicking(event){
    console.log("clicked", event.target.textContent);

    if(event.target.textContent === "Light Theme"){
        console.log("Dark Theme Clicked");
        changebg();
    }
    else if (event.target.textContent === "Dark Theme"){
        console.log("Light Theme Clicked");
        changebg();
    }
    else if(event.target.textContent === "New Note"){
        console.log("New Note Clicked");
        newbtn();
        textclearing();
    }
    else if(event.target.textContent === "Save"){
        console.log("Save Button Clicked");
        notelist();
    }
    else if(event.target.textContent === "Cancel"){
        cancelbtn();
        console.log("Cancel Button Clicked");
    }
}


// Makes Darkmode

function changebg(){
    document.body.classList.toggle("bgcolor");
    asidebg.classList.toggle("asidecolor");
    newbutton.classList.toggle("newbuttoncolor");
    darkMode.classList.toggle("darkbutton");
    savebutton.classList.toggle("savecolor");
    linkedin.classList.toggle("lncolor");
    internet.classList.toggle("internetcolor");
    cancelbutton.classList.toggle("cancelcolor")
    notebox.classList.toggle("noteboxcolor");
    textColor.classList.toggle("textcolor");
}


// Makes Darkmode button text switch to "Light Mode" on click

darkMode.addEventListener("click", function changeText(){
    const initialText = "Dark Theme"
    if (darkMode.textContent === "Dark Theme")
    {darkMode.textContent = "Light Theme"}
    else{
        darkMode.textContent = initialText;
    }
})


// Makes cancel button remove save and notebox

function cancelbtn(){
    cancelbutton.classList.add("hideitem");
    savebutton.classList.add("hideitem");
    notebox.classList.add("hideitem");
}


// Makes new button add save and notebox

function newbtn(){
    cancelbutton.classList.remove("hideitem");
    savebutton.classList.remove("hideitem");
    notebox.classList.remove("hideitem");
}


// Clears text when clicking "New Note"

function textclearing(){
    notebox.value = ""
}




let notesArray = [{title : "Note One", body: "This is my first note"}]

function notelist(){
    const noteTitle = prompt("Enter a note title...");
    const noteInput = document.querySelector(".notebox");

    let notes = {
        title: noteTitle,
        body: noteInput.value,
    }

    noteTitle.value = ""
    noteInput.value = ""

    addToList(notes);

    notesArray.push(notes);

    console.log(notesArray)
}

function addToList(notes){
    const myNotes = document.querySelector(".notes");
    const newNote = document.createElement("li");
        newNote.textContent = `${notes.title}`;
        myNotes.appendChild(newNote)
}