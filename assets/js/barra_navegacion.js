const links = document.querySelectorAll('.scrollto');

links.forEach((item) => {
    item.addEventListener('click', function (){
        if (window.location.href.indexOf("portfolio") !== -1){
            window.location.href = "index.html?to="+item.getAttribute("data-link");

        }else{
            const adonde = document.getElementById(item.getAttribute("data-link"));
            adonde.scrollIntoView({behavior:"smooth", block:"start"});
        }
    })

});