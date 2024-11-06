function updateHeader() {
    let header = document.getElementsByTagName("header")[0];
    let headerLogoGreen = document.querySelector("#logo-green");
    let headerLogoWhite = document.querySelector("#logo-white");

    if (document.body.scrollTop > 200) {
        headerLogoWhite.style.display = "none";
        headerLogoGreen.style.display = "block";
        header.style.backgroundColor = "#EFF7EA";

    } else {
        headerLogoGreen.style.display = "none"
        headerLogoWhite.style.display = "block";
        header.style.backgroundColor = "transparent";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateHeader();

    window.addEventListener("scroll", updateHeader, true);
    window.addEventListener("resize", updateHeader, true);
});

