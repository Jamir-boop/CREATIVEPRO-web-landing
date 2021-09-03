window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if (scrolled >= 1000 && scrolled <= 10000){
        document.querySelector(".scroll_top").style.visibility = "visible";
    }else{
        document.querySelector(".scroll_top").style.visibility = "hidden";;
    }


    if (scrolled >= 10000){
        document.querySelector(".scroll_comprar").style.visibility = "visible";
    }else{
        document.querySelector(".scroll_comprar").style.visibility = "hidden";
    }

});