let slider = tns({
    container : ".good4meSliderMy-Slider",
    "slideBy" : "1",
    "speed" : 400,
    "nav" : false,
    autoplay : true,
    controls : false,
    autoplayButtonOutput : false,
    responsive : {
        1600: {
            items : 4,
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




