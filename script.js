
const preloader = document.querySelector("#preloader");
const menuBtn = document.querySelector("nav .navBtnDiv i");
const wrapper = document.querySelector("#wrapper");
const modal = document.querySelector("#modal");
const modalClose = document.querySelector("#modal i");
const modalNavs = document.querySelectorAll("#modal div a");

window.addEventListener("load",function(){
    preloader.classList.add("remove");
    wrapper.classList.remove("remove");
    
});


menuBtn.addEventListener("click",function(){
    wrapper.classList.add("remove");
    modal.classList.remove("remove");
});

modalClose.addEventListener("click",function(){
    wrapper.classList.remove("remove");
    modal.classList.add("remove");
})
for(let i=0; i<5; i++){
    modalNavs[i].addEventListener("click",function(){
        wrapper.classList.remove("remove");
        modal.classList.add("remove");
    })
}


// aos 
AOS.init({     
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
});
