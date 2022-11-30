document.body.addEventListener("click", Clicking)

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
    }
    else if(event.target.textContent === "Save"){
        console.log("Save Button Clicked");
    }
    else if(event.target.textContent === "Cancel"){
        console.log("Cancel Button Clicked")
    }
}


// Makes Darkmode 
const asidebg = document.querySelector("aside");
const newbutton = document.querySelector(".button1");
const darkMode = document.querySelector(".button2");
const savebutton = document.querySelector(".button3");
const linkedin = document.querySelector(".linkedin");
const internet = document.querySelector(".internet");
const cancelbutton = document.querySelector(".button4");
const notebox = document.querySelector(".notebox");
const textColor = document.querySelector(".text");

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









