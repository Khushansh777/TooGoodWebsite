// import gsap from "gsap";
// import gsap from "gsap";
// import gsap from "gsap";
// @ts-ignore
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});
const nav = document.querySelector('nav');
// @ts-ignore
function bignavbarAnimation() {
    const mainNav = document.querySelector('.main-nav');
    const menuOption = document.getElementById('menu-option');
    console.log(menuOption.innerHTML);
    console.log(menuOption);
    const timeline = gsap.timeline({ paused: true, reversed: false });
    timeline.addLabel('lol');
    timeline.to(mainNav, {
        y: '10%',
        duration: 0.3
    }, 'lol');
    timeline.to(nav, {
        backgroundColor: '#000',
        color: '#fff',
        duration: 0.3,
    }, 'lol');
    timeline.to(menuOption, {
        backgroundColor: '#000',
        color: '#fff',
        duration: 0.1
    });
    menuOption.addEventListener('click', (e) => {
        console.log(e);
        if (timeline.reversed()) {
            timeline.play();
            console.log(menuOption.innerHTML);
            menuOption.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        }
        else {
            timeline.reverse();
            menuOption.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
}
function navbarAnimation() {
    gsap.from(nav, {
        y: -100,
        opacity: 0,
        duration: 0.77
    });
}
function heroSectionAnimation() {
    gsap.from("#hero h1", {
        y: 30,
        opacity: 0,
        stagger: .3,
        duration: .5
    });
}
function cursorAnimation() {
    const video = document.querySelector('#hero video');
    const cursor = document.querySelector('.cursor');
    video.addEventListener('mouseenter', (e) => {
        console.log(e);
        gsap.to(cursor, {
            opacity: 1,
            scale: 1
        });
    });
    video.addEventListener('mouseleave', (e) => {
        console.log(e);
        gsap.to(cursor, {
            opacity: 0,
            scale: 0
        });
    });
    video.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            // x:e.x - 250,
            // y:e.y + 250,
            top: e.clientY,
            left: e.clientX
        });
    });
}
const selectorElement = document.querySelector('.selector-content');
selectorElement.addEventListener('mouseenter', (e) => {
});
export {};
