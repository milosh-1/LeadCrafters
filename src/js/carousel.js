document.addEventListener("DOMContentLoaded", function() {
    let partnersContainer = document.querySelector(".swiper-wrapper");

    if (partnersContainer) {
        for (const x of Array(18).keys()) {
            partnersContainer.insertAdjacentHTML(
                "beforeend", `<div class="swiper-slide" id="${x + 1}">
                                            <img src="src/images/logos/${x + 1}.png" alt="partner">
                                          </div>`
            );
        }
    }

    let swiper = new Swiper(".sample-slider", {
        loop: true,
        autoplay: {
            pauseOnMouseEnter: true,
            delay: 0,
            disableOnInteraction: false,
        },
        speed: window.innerWidth > 700 ? 7500 : 9500,
        slidesPerView: "auto",
        spaceBetween: window.innerWidth > 700 ? 50 : 25,
        direction: "horizontal",
        centeredSlides: false,
        draggable: window.innerWidth > 700,

        modules: "Autoplay",
        simulateTouch: window.innerWidth > 700,
    });
});