( function() {
    const closeBanners = document.querySelectorAll(".c-banner__close");
    closeBanners.forEach( closeBanner =>{
        closeBanner.addEventListener("click", (event)=>{
           const banner = event.target.parentNode;
           banner.classList.add("collapse");
           banner.addEventListener("transitionend", function(e){
            if(e.target === this){
                this.remove();
            }
           })
        })
    })
})();



//  Tabs



const tabs = document.querySelectorAll(".c-tabs .js-tab-link")


console.log(tabs)


