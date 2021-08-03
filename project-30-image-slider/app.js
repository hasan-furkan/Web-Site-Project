let indexValue = 1;
showImg(indexValue);
function btmSlide(e) {
    showImg(indexValue = e)
}
function sideSlide(e) {
    showImg(indexValue += e)
}
function showImg(e) {
    let i;
    const img = document.querySelectorAll("img")
    const sliders = document.querySelectorAll(".btm-sliders i")
    if(e > img.length){
        indexValue = 1
    }
    if(e < 1){
        indexValue = img.length
    }
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue-1].style.display = "block";
}