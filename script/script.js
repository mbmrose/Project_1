document.body.addEventListener("click", Clicking)

function Clicking(event){
    console.log("clicked", event.target.textContent);

    if(event.target.textContent === "Dark Theme"){
        console.log("Dark Theme Clicked");
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

function changebg(){
    document.body.classList.toggle("bgcolor")
}

// Makes Darkmode button text switch to "Light Mode" on click

const darkMode = document.querySelector(".button2");

darkMode.addEventListener("click", function changeText(){
    const initialText = "Dark Theme"
    if (darkMode.textContent === "Dark Theme")
    {darkMode.textContent = "Light Theme"}
    else{
        darkMode.textContent = initialText;
    }
})









