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
});
