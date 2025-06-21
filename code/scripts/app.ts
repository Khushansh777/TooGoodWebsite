// @ts-ignore
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

gsap.registerPlugin(ScrollTrigger);

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("main")?.style.transform ? "transform" : "fixed"
});

const nav = document.querySelector('nav') as HTMLElement;

// @ts-ignore
function bignavbarAnimation() {
    const mainNav = document.querySelector('.main-nav') as HTMLElement;
    const menuOption = document.getElementById('menu-option') as HTMLButtonElement;

    const timeline = gsap.timeline({ paused: true, reversed: false });
        timeline.addLabel('lol') 
    timeline.to(mainNav,{
            y:'10%',
            duration:0.3
        },'lol')
    
        timeline.to(nav,{
            backgroundColor:'#000',
            color:'#fff',
            duration:0.3,
            
        },'lol')
        timeline.to(menuOption,{
            backgroundColor:'#000',
            color:'#fff',
            duration:0.1
        },)
    menuOption.addEventListener('click',() =>{
        if(timeline.reversed()){
            timeline.play();
            menuOption.innerHTML ='<i class="fa-solid fa-xmark"></i>'
        }
        else{
        timeline.reverse();
        menuOption.innerHTML = '<i class="fa-solid fa-bars"></i>'
        }
    })
}

function navbarAnimation(){
    gsap.from(nav,{
        y:-100,
        opacity:0,
        duration:0.77
    })
}

function heroSectionAnimation(){
    document.querySelectorAll(".hero-row h1").forEach(function (elem) {
        gsap.from(elem, {
            opacty: 0, 
             y: 330,
            delay:1,
            duration: 4,
        });
    });
}

function cursorAnimation() {
    const video = document.querySelector('#hero video') as HTMLVideoElement;
    const cursor = document.querySelector('.cursor') as HTMLElement;
    video.addEventListener('mouseenter',() => {
        gsap.to(cursor,{
           opacity:1,
           scale:1
        })
    })
    video.addEventListener('mouseleave',() =>{
         gsap.to(cursor,{
           opacity:0,
           scale:0
        })
    })
    video.addEventListener('mousemove',(e) =>{
        gsap.to(cursor,{
            top:e.clientY ,
            left:e.clientX 
        })
    })
}

function imagesSelectorAnimation(){
    const elements = document.querySelectorAll('.element') as NodeListOf<HTMLElement>;

    elements.forEach(element =>{
        // This animation will fade in each element as you scroll to it
        gsap.from(element, {
            opacity: 0,
            y: 100,
            duration: 0.6,
            scrollTrigger: {
                trigger: element,
                scroller: 'main', // This is the critical fix
                start: 'top 75%',
                // markers: true // Markers will now appear in the correct position
            }
        });

        // This part handles the existing hover effect for the pop-up
        const selector = element.querySelector('.selector');
        const content = element.querySelector('.selector-more-content');
        if(selector && content){
            selector.addEventListener('mouseenter',() =>{
                gsap.to(content,{
                    opacity:1,
                    duration: 0.3
                })
            });
            element.addEventListener('mouseleave',() =>{
                gsap.to(content,{
                    opacity:0,
                    duration: 0.3
                })
            });
        }
    })
}

function shopCartAnimation(){
    const shop = document.querySelector('.shop') as HTMLElement
    if(shop){
    shop.addEventListener('mouseenter',() =>{
        gsap.to(shop,{
            borderBottom:' 1px solid #000',
        })
    })
    shop.addEventListener('mouseleave',() =>{
        gsap.to(shop,{
            borderBottom:'none',
        })
    })
    }
}

function pledgeAnimation(){
    const pledge = document.querySelector('.pledge') as HTMLElement;
    gsap.from(pledge,{
        opacity:0,
        y:-30,
        scrollTrigger:{
            // markers:true,
            scroller:'main',
            trigger:pledge,
            bottom:'50%',
            start:'-400%',
            top:'50%'
        }
    })
}


pledgeAnimation();
shopCartAnimation();
imagesSelectorAnimation();
cursorAnimation();
heroSectionAnimation();
navbarAnimation();
bignavbarAnimation();

ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

export{};