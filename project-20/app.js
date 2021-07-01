const body = document.querySelector("body")
const darkButton = document.querySelector(".dark");
const form = document.querySelector("form")

darkButton.addEventListener("click", ()=>{
    darkButton.classList.toggle("dark");
    if(darkButton.classList.contains("dark")){
        body.style = `background-color: black; color: #fff; ` ;
        form.style = `border: 4px solid #fff;`;
    }else{
        body.style = `background-color: #fff; color: black;` ;
        form.style = `border: 4px solid black;`;
    }
    
});