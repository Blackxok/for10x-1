// swiper slider
new Swiper(".swiper", {
    // navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination
    pagination: {
        el: ".swiper-pagination",
        // klick
        clickable: true,
    },
    // kalonka mayda bo'sa
    watchOverflow: true,

    // nechta kalonka
    slidesPerView: 3,

    // kalonkalar orasi
    spaceBetween: 10,

    // scroll mishka
    // mousewheel: {
    //     sesitivity: 3,
    // },

    hashNavigation: {
        watchState: true,
    },
});

// -----------------------------------------
// swiper slider
new Swiper(".swiper_udo", {
    // navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination
    pagination: {
        el: ".swiper-pagination",
        // klick
        clickable: true,
    },
    // kalonka mayda bo'sa
    watchOverflow: true,

    // nechta kalonka
    slidesPerView: 1,

    // kalonkalar orasi
    spaceBetween: 10,

    // scroll mishka
    // mousewheel: {
    //     sesitivity: 3,
    // },

    hashNavigation: {
        watchState: true,
    },
});
