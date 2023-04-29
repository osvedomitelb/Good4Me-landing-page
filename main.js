let slider = tns({
    container : ".good4meSliderMy-Slider",
    "items" : "1",
    "slideBy" : "1",
    "speed" : 400,
    "nav" : false,
    autoplay : true,
    controls : false,
    autoplayButtonOutput : false,
    responsive : {
        1600: {
            items : 6,
            gutter : 20
        },
        1000: {
            items: 3,
            gutter : 20
        },
        700: {
            items: 2,
            gutter : 20
        },
        480: {
            items: 1,
            gutter : 20
        }
    }
});



document.querySelectorAll(".slideBig").forEach(slide => slide.addEventListener("click", function () {
    let activeImg = document.querySelector("div[data-active]");
    if (activeImg.firstElementChild.className == "img") activeImg.firstElementChild.className = "bigPhoto";
    else if (activeImg.firstElementChild.className == "bigPhoto") activeImg.firstElementChild.className = "img";
    console.log(activeImg);
}));




