const offBtn = document.getElementById("ofBtn");
const onnBtn = document.getElementById("onBtn");
const hollder = document.getElementById("bulb");


const lightSrcObj = {
    on:`https://www.w3schools.com/js/pic_bulbon.gif`,
    of:`https://www.w3schools.com/js/pic_bulboff.gif`
}


offBtn.addEventListener("click",function(){
    hollder.src = lightSrcObj.of;
})



onnBtn.addEventListener("click",function(){
    hollder.src = lightSrcObj.on;
})