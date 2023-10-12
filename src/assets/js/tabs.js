// (function(){
//     const tabs = document.querySelectorAll(".js-tabs")
//     Array.from(tabs, tab =>{
//         const tabsLinks = tab.querySelectorAll(".js-tab-link");  
//         let currentActiveTab = tab.querySelector(".js-tab-link.is-active");


//         const toggleTab = (toggledTabLink = currentActiveTab) =>{
//             currentActiveTab = toggledTabLink || currentActiveTab;
//             console.log(toggledTabLink)
//             toggledTabLink.classList.toggle("is-active");

//             const toggledTabData =toggledTabLink.dataset.index;
//             const toggledTabArea = tab.querySelector(`.js-tab-area[data-indexed= ${toggledTabData}]`);

//             toggledTabArea.classList.toggle("is-active");
//         }

//         if(!currentActiveTab){
//             toggleTab(tabsLinks[0]);
//         }

//         tabsLinks.forEach(tabsLink =>{
//             tabsLink.addEventListener("click", function(e){
//               if(currentActiveTab === this ){
//                 return;
//               }
//               if(currentActiveTab){
//                 toggleTab();
//               }
//               toggleTab(this);
//             })
//         })
//     })
// })();


// const tabs = document.querySelectorAll(".js-tab .js-tab-link");
// tabs.forEach( tab =>{
//     tab.addEventListener("click", (e)=>{
//         document.querySelectorAll(".js-tab-link.is-active").forEach( elm =>{
//            console.log(elm.parentElement.querySelector(".is-active").classList.remove("is-active"))
//         })
//         e.target.classList.add("is-active")
    
// })



( function (){
    let a ="Mohamed"
    const tabs = document.querySelectorAll(".js-tab");
    Array.from(tabs, tab =>{
        const tabLinks = tab.querySelectorAll(".js-tab-link");
        let currentActiveTab = tab.querySelectorAll(".js-tab-link.is-active");

        const toggleTab = (toggledLink = currentActiveTab) =>{
            currentActiveTab = toggledLink || currentActiveTab;
            toggledLink.classList.toggle("is-active");
            const toggledData = toggledLink.dataset.index;
            // const toggleTabArea = tab.querySelector(`.js-tab-area[data-index=${toggledData}]`)
            toggleTabArea.classList.toggle("is-active");
        }
        if(!currentActiveTab){
            toggleTab(tabLinks[0])
        }
        tabLinks.forEach(tabLink =>{
            tabLink.addEventListener("click", function(e){
                if(currentActiveTab === this){
                   return;
                }
                if(currentActiveTab){
                    return toggleTab();
                }
                toggleTab(this)
            })
        })
    })
})();
