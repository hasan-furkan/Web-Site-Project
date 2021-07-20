const display = document.querySelector("#display")
const number = document.querySelectorAll(".content")
const mathOpt = document.querySelectorAll(".mathOpt")
const equal = document.querySelector(".equal")
const clean = document.querySelector(".clean")

number.forEach(function(element){
   
    element.onclick = function(){

        if(display.textContent == "0"){
            display.textContent = "";
        }

    display.textContent+=this.textContent;      
}
})

clean.onclick = function(){
    display.textContent = "0";
}

mathOpt.forEach(function(element){
   
    element.onclick = function(){
    display.textContent+=this.textContent;      
}
})

equal.onclick = function(){
    display.textContent = eval(display.textContent);
}