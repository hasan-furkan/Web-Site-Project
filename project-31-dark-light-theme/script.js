const checkbox = document.getElementById("checkbox");
const h1 = document.getElementsByTagName("h1")
checkbox.addEventListener('change', ()=>{
    // change the theme of the website

    document.body.classList.toggle('dark')
})