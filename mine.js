let but = document.querySelector("button");

window.onscroll = function () {
    if (window.scrollY >= 600) {
        but.style.display = "block";
    } else {
        but.style.display = "none";
    }
}

but.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};

