

$(function () {
    const swiper = new Swiper('.swiper-container', {
        grabCursor: true,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesPerView: 4,
        spaceBetween: 50,
        watchOverflow: true,
        observeParents: true,
        observer: true,
        navigation: {
            nextEl: '.work-next',
            prevEl: '.work-prev',
          },
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

    const swiperVigodny = new Swiper('.swiper-container-vigodny', {
        grabCursor: true,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesPerView: 4,
        spaceBetween: 50,
        watchOverflow: true,
        observeParents: true,
        observer: true,
        navigation: {
            nextEl: '.vigodny-next',
            prevEl: '.vigodny-prev',
          },
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

    const swiperNav = new Swiper('.swiper-container-nav', {
        grabCursor: true,
        centeredSlides: false,
        centeredSlidesBounds: false,
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
            },

        1023: {
            slidesPerView: 6,
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
        navigation: {
            nextEl: '.logo-next',
            prevEl: '.logo-prev',
          },
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
