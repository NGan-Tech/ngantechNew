new Splide('#image-carousel', {
    direction: 'ttb',
    height: '200px',
    autoplay: true,
    interval: 2500
}).mount();


new Splide('#service-carousel', {
    type: 'loop',
    height: '370px',
    width: '200px',
    drag: false,
    autoplay: true,
    interval: 2000,
}).mount();