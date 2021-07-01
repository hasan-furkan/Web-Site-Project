const body = document.querySelector(".container")
const darkButton = document.querySelector(".dark");
const icon = document.querySelector(".far")
const a1 = document.querySelector(".a1")
const a2 = document.querySelector(".a2")
const a3 = document.querySelector(".a3")
const a4 = document.querySelector(".a4")
const a5 = document.querySelector(".a5")

darkButton.addEventListener("click", ()=>{
    darkButton.classList.toggle("dark");
    if(darkButton.classList.contains("dark")){
        body.style = `background-color: #1e1e1e; color: #fff; ` ;
        icon.style = `color: #fff;`;
        a1.style = `color: #fff;`;
        a2.style = `color: #fff;`;
        a3.style = `color: #fff;`;
        a4.style = `color: #fff;`;
        a5.style = `color: #fff;`;
    }else{
        body.style = `background-color: #fff; color: black;` ;
        icon.style = `color: #1e1e1e;`;
        a1.style = `color: #1e1e1e;`;
        a2.style = `color: #1e1e1e;`;
        a3.style = `color: #1e1e1e;`;
        a4.style = `color: #1e1e1e;`;
        a5.style = `color: #1e1e1e;`;
    }
    
});