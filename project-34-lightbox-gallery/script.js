// selecting all required elements

const gallery = document.querySelectorAll(".gallery .image")
const previewBox = document.querySelector(".preview-box")
const previewImg = previewBox.querySelector("img")
const closeIcon = previewBox.querySelector(".icon")
const currentImg = previewBox.querySelector(".current-img")
const totalImg = previewBox.querySelector(".total-img")
const shadow = document.querySelector(".shadow")

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickImgIndex;
        gallery[i].onclick = ()=>{
            clickImgIndex = newIndex
            function preview() {
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImgUrl
            }

            const prevBtn = document.querySelector(".prev")
            const nextBtn = document.querySelector(".next")
            if (newIndex == 0) {
                prevBtn.style.display = "none"
            }
            if (newIndex >= gallery.length - 1) {
                nextBtn.style.display = "none"
            }

            prevBtn.onclick = ()=>{
                newIndex--
                if (newIndex == 0) {
                    preview()
                    prevBtn.style.display = "none"
                }else{
                    preview()
                    nextBtn.style.display = "block"
                }
            }
            nextBtn.onclick = ()=>{
                newIndex++
                if(newIndex >= gallery.length - 1){
                    preview()
                    nextBtn.style.display = "none"
                }else{
                    preview()
                    prevBtn.style.display = "block"
                }
            }

            preview()
            previewBox.classList.add("show")
            shadow.style.display = "block"
            document.querySelector("body").style.overflow = "hidden"
            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex
                prevBtn.style.display = "block"
                nextBtn.style.display = "block"
                previewBox.classList.remove("show")
                shadow.style.display = "none"
                document.querySelector("body").style.overflow = "auto"
            }
        }
    }
}