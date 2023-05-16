new Splide('#image-carousel', {
    direction: 'ttb',
    height: '200px'
}).mount();


new Splide('#service-carousel', {
    type: 'loop',
    height: '370px',
    width: '200px',
}).mount();

var swiper = new Swiper('#js-carousel', {
    slidesPerView: "auto",
    speed: 4000,
    loop: true,
    autoplay: {
        enable: true,
        delay: 1,
    }
});