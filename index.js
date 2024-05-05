// **Slider

// let sliderList = document.getElementsByClassName("sliderList");
let sliderList = document.querySelector(".sliderMain .sliderList");
console.log(sliderList)
let items = document.querySelectorAll(".sliderMain .sliderList .sliderItem");
console.log(items)
let dots = document.querySelectorAll(".sliderMain .dots li");
console.log(dots)
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lenghtItem = items.length-1;
console.log(items.length)

next.onclick = function() {
    if(active + 1 > lenghtItem) {
        active = 0;
        
    } else {
        active += 1;
    }
    
    reloadSlider();
}

prev.onclick = function() {
    if(active - 1 < 0) {
        active = lenghtItem;
    } else {
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => {
    next.click()
},5000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    // console.log(checkLeft)
    sliderList.style.left = -checkLeft + "px";
    let lastActiveDot = document.querySelector(".sliderMain .dots li.active")
    lastActiveDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refreshSlider)
    refreshSlider = setInterval(() => {
        next.click()
    },5000)
}

for (let i = 0; i<dots.length; i++) {
    dots[i].addEventListener("click", function(){
        active = i;
        reloadSlider();
    })
}

//Hien thi ten sau khi dang nhap

