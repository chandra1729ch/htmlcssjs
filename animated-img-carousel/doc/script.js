const buttons=document.querySelectorAll("[data-carousel-button]");
// const a=document.getElementById("button")
// const slides=button.closest("[data-carousel]").querySelector("[data-slide]")
// const activeSlide=document.querySelector("[data-active]");
console.log(a);
console.log(buttons)
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const offset=button.dataset.carouselButoon==="next" ? 1 : -1;
        console.log("1")
        const slides=button.closest("[data-carousel]").querySelector("[data-slide]")
        const activeSlide=slide.querySelector("[data-active]");
        let newIndex=[...slides.children].indexOf(activeSlide)+offset;
        if(newIndex<0)newIndex=slides.children.length-1;
        if(newIndex>=slides.children.length)newIndex=0;

        slides.children[newIndex].dataset.active=true;
        delete activeSlide.dataset.active
        
    })
})