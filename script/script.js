

const darkMode = document.querySelector(".button2");

darkMode.addEventListener("click", function changeText(){
    const initialText = "Dark Theme"
    if (darkMode.textContent === "Dark Theme")
    {darkMode.textContent = "Light Theme"}
    else{
        darkMode.textContent = initialText;
    }
})


document.body.classList.toggle("darkmode");

