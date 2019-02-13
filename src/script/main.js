new Glide('#slider', {
  type: 'carousel',
  gap: 20,
  perView: 3,
  breakpoints: {
      768: {
          perView: 2,
          gap: 15
      },
      480: {
          perView: 1.25,
          gap: 10
      }
  }
}).mount();
