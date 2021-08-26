window.onload = function() {
    const to = window.location.search;
    const urlParams = new URLSearchParams(to);
    const item = urlParams.get('to');

    if(item !== null){
        const adonde = document.getElementById(item);
        adonde.scrollIntoView({behavior:"smooth", block:"start"});

        console.log(adonde);
    }

};