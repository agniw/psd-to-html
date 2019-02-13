new Glide('.glide', {
    type: 'carousel',
    gap: 20,
    perView: 3,
    breakpoints: {
        768: {
            perView: 2,
            gap: 15
        },
        480: {
            perView: 1
        }
    }
}).mount();