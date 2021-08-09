

$(function () {
    const swiper = new Swiper('.swiper-container', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 5,
        coverflowEffect: {
            rotate: 0,
            stretch: 10,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiperNav = new Swiper('.swiper-container-nav', {
        grabCursor: true,
        centeredSlides: false,
        centeredSlidesBounds: false,
        freeMode: true,
        observeParents: true,
        observer: true,
        watchOverflow: true,
        breakpoints: {
            
            320: {
              slidesPerView: 1.5,
              spaceBetween: 20
            },
            
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }
    });
    const swiperLogo = new Swiper('.swiper-container-logo', {
        grabCursor: true,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesPerView: 4,
        spaceBetween: 50,
        watchOverflow: true,
        observeParents: true,
        observer: true,
        breakpoints: {
            
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }
    });
})
