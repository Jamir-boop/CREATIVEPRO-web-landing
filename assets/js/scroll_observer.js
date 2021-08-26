window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if (scrolled > 1000){
        document.querySelector(".scroll_top").style.visibility = "visible";

    }else{
        document.querySelector(".scroll_top").style.visibility = "hidden";
    }

});