gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 801px)", () => {
    // Creamos la timeline
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".header",
            start: "top top",
            end: "bottom top",
            scrub: 1,


        },
    });
    // Función de animación de la flecha
    function animateArrow() {
        gsap.to(".flecha", {
            y: 10,
            ease: "power2.inOut",
            duration: 0.6,
            yoyo: true,
            repeat: -1,
        });
    }
    // Llamamos a la función de animación de la flecha al principio
    animateArrow();
    // Agregamos las animaciones a la timeline
    tl.to(".contenedor_header", { opacity: 0, duration: 30, ease: "power2.out" })
        .to(".icono", { y: -150, duration: 30 }, "-=30")
        .to(".scroll-down", { y: -100, duration: 30 }, "-=30")
        .to(".contenedor_titles-welcome", { y: -400, duration: 30 }, "-=30")
        .to(".contenedor_titles-tomy", { y: -300, duration: 30 }, "-=30")
        .to(".contenedor_diegoobls", { y: -150, duration: 30 }, "-=30")
        .to(".contenedor_plusTL", { x: 700, rotation: 1000, duration: 30 }, "-=30")
        .to(".contenedor_equisBL", { y: -700, rotation: 1000, duration: 30 }, "-=30")
        .to(".contenedor_plusBR", { x: -700, rotation: 1000, duration: 30 }, "-=30")
        .to(".contenedor_equisTR", { y: 700, rotation: 1000, duration: 30 }, "-=30");

    //TL2

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".first_section",
            start: "top top",
            end: "bottom top",
            scrub: 1,

            pin: true
        },
    });
    tl2.to(".contenedor_first_section-img", { width: '80%', height: '80%', borderRadius: '10%', duration: 80, ease: "power2.inOut" })
        .to(".contenedor_first_section-imgimg", { borderRadius: '10%', duration: 80, ease: "power2.inOut" }, '-=80')
        .to(".first_section", { opacity: 0, duration: 60, ease: "power2.out", onComplete: setOpacity });
    function setOpacity() {
        gsap.set(".first_section", { opacity: 0 });
    }
    //TL3
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".second_section",
            start: "=-100% top",
            end: () => `+=${document.querySelector(".contenedor_second_section").offsetHeight}`,
            scrub: 1,


        },
    });
    tl3.to(".mid-title", { y: -800, duration: 30, ease: "power2.out" })
        .to(".img-1", { skewX: 10, y: -700, duration: 30, ease: "power2.out" }, '-=30')
        .to(".img-2", { skewX: -10, y: -500, duration: 30, ease: "power2.out" }, '-=30')
        .to(".img-3", { skewX: -10, y: -700, duration: 30, ease: "power2.out" }, '-=30')
        .to(".img-4", { skewX: 10, y: -500, duration: 30, ease: "power2.out" }, '-=30')

    //TL4
    // Iniciar el Swiper con opciones iniciales
    const swiper2 = new Swiper(".contenedor_third_section-one", {
        slidesPerView: 3,
        direction: 'horizontal',
        freeMode: true,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 1000,
        },
        breakpoints: {
            800: {
                slidesPerView: 4,
            },
        },
    });
    const swiper3 = new Swiper(".contenedor_third_section-one2", {
        slidesPerView: 3,
        freeMode: true,
        direction: 'horizontal', // Mantener la dirección vertical
        grabCursor: true,

        loop: true,
        autoplay: {
            delay: 1000,
            reverseDirection: true,
        },
        breakpoints: {
            800: {
                slidesPerView: 4,
            },
        },
    });
    swiper2.autoplay.stop();
    swiper3.autoplay.stop();
    // Inicializar ScrollTrigger para detectar el trigger general
    const triggerElement = document.querySelector(".third_section");
    let trigger = ScrollTrigger.create({
        trigger: triggerElement,
        start: "=-100% top",
        end: "=50% top",
        scrub: 1,
        onEnter: () => {

            swiper2.autoplay.start();
            swiper3.autoplay.start();
        },
        onLeave: () => {

            swiper2.autoplay.stop();
            swiper3.autoplay.stop();
        },
        onLeaveBack: () => {

            swiper2.autoplay.stop();
            swiper3.autoplay.stop();
        },
        onEnterBack: () => {

            swiper2.autoplay.start();
            swiper3.autoplay.start();
        },
    });
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".third_section",
            start: "=-500 top",
            end: "=500 top",
            scrub: 1,


        },
    });
    tl4.to(".contenedor_third_section-mid", { y: -350, duration: 60, ease: "power2.out" })
        .to(".contenedor_third_section-one", { y: -400, rotation: 10, duration: 60, ease: "power2.out" }, '-=60')
        .to(".contenedor_third_section-one2", { y: -300, rotation: -10, duration: 60, ease: "power2.out" }, '-=60')

    //TL5
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".four_section",
            start: "=-50% top",
            end: "bottom top",
            scrub: 1,
            markers:true

        },
    });
    tl5.to(".unde", { y: -200, x: 500, duration: 60, ease: "power2.out" })
        .to(".lets", { y: -200, x: -500, duration: 60, ease: "power2.out" }, '-=60')
        .to(".e1", { y: -300, duration: 60, ease: "power2.out" }, '-=60')
        .to(".e2", { y: -200, duration: 60, ease: "power2.out" }, '-=60')
        .to(".e3", { y: -100, duration: 60, ease: "power2.out" }, '-=60')
        .to(".container_form-title", { y: -100, duration: 60, ease: "power2.out" }, '-=60')


})

//-----------------------FIN 800 PX-------------------------------

mm.add("(max-width: 800px)", () => {

    // Creamos la timeline
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".header",
            start: "top top",
            end: "bottom top",
            scrub: 1,


        },
    });
    // Función de animación de la flecha
    function animateArrow() {
        gsap.to(".flecha", {
            y: 10,
            ease: "power2.inOut",
            duration: 0.6,
            yoyo: true,
            repeat: -1,
        });
    }
    // Llamamos a la función de animación de la flecha al principio
    animateArrow();
    // Agregamos las animaciones a la timeline
    tl.to(".contenedor_header", { opacity: 0, duration: 30, ease: "power2.out" })
        .to(".icono", { y: -150, duration: 30 }, "-=30")
        .to(".scroll-down", { y: -100, duration: 30 }, "-=30")
        .to(".contenedor_titles-welcome", { y: -400, duration: 30 }, "-=30")
        .to(".contenedor_titles-tomy", { y: -300, duration: 30 }, "-=30")
        .to(".contenedor_diegoobls", { y: -150, duration: 30 }, "-=30")
        .to(".contenedor_plusTL", { x: 700, rotation: 1000, duration: 30 }, "-=30")
        .to(".contenedor_equisBL", { y: -700, rotation: 1000, duration: 30 }, "-=30")
        .to(".contenedor_plusBR", { x: -700, rotation: 1000, duration: 30 }, "-=30")
        .to(".contenedor_equisTR", { y: 700, rotation: 1000, duration: 30 }, "-=30");

    //tl2
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".first_section",
            start: "=-50% top",
            end: "bottom top",
            scrub: 1,


        },
    });
    tl2.to(".contenedor_aboutme", { y: -250, duration: 60, ease: "power2.out" })
        .to(".text4", { y: -200, duration: 60, ease: "power2.out" }, '-=60')
        .to(".contenedor_first_section-img", { width: '80%', height: '80%', y: -250, duration: 60, ease: "power2.out" }, '-=60')


    //TL3
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".second_section",
            start: "=-60% top",
            end: '=+100% top',
            scrub: 1,


        },
    });
    tl3.to(".mid-title", { y: -700, duration: 60, ease: "power2.out" })
        .to(".img-1", { skewX: 10, y: -600, duration: 60, ease: "power2.out" }, '-=60')
        .to(".img-2", { skewX: -10, y: -400, duration: 60, ease: "power2.out" }, '-=60')
        .to(".img-3", { skewX: -10, y: -600, duration: 60, ease: "power2.out" }, '-=60')
        .to(".img-4", { skewX: 10, y: -400, duration: 60, ease: "power2.out" }, '-=60')


    //TL4
    // Iniciar el Swiper con opciones iniciales
    const swiper2 = new Swiper(".contenedor_third_section-one", {
        slidesPerView: 3,
        direction: 'horizontal',
        freeMode: true,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 1000,
        },
        breakpoints: {
            800: {
                slidesPerView: 4,
            },
        },
    });
    const swiper3 = new Swiper(".contenedor_third_section-one2", {
        slidesPerView: 3,
        freeMode: true,
        direction: 'horizontal', // Mantener la dirección vertical
        grabCursor: true,

        loop: true,
        autoplay: {
            delay: 1000,
            reverseDirection: true,
        },
        breakpoints: {
            800: {
                slidesPerView: 4,
            },
        },
    });
    swiper2.autoplay.stop();
    swiper3.autoplay.stop();
    // Inicializar ScrollTrigger para detectar el trigger general
    const triggerElement = document.querySelector(".third_section");
    let trigger = ScrollTrigger.create({
        trigger: triggerElement,
        start: "=-110% top",
        end: "bottom top",
        scrub: 1,
        onEnter: () => {

            swiper2.autoplay.start();
            swiper3.autoplay.start();
        },
        onLeave: () => {

            swiper2.autoplay.stop();
            swiper3.autoplay.stop();
        },
        onLeaveBack: () => {

            swiper2.autoplay.stop();
            swiper3.autoplay.stop();
        },
        onEnterBack: () => {

            swiper2.autoplay.start();
            swiper3.autoplay.start();
        },
    });
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".third_section",
            start: "=-110% top",
            end: "bottom top",
            scrub: 1,


        },
    });
    tl4.to(".contenedor_third_section-mid", { y: -350, duration: 60, ease: "power2.out" })
        .to(".contenedor_third_section-one", { y: -400, rotation: 10, duration: 60, ease: "power2.out" }, '-=60')
        .to(".contenedor_third_section-one2", { y: -300, rotation: -10, duration: 60, ease: "power2.out" }, '-=60')

    //TL5
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".four_section",
            start: "=-120% top",
            end: "=50% top",
            scrub: 1,


        },
    });
    tl5.to(".unde", { y: -200, x: 50, duration: 80, ease: "power2.out" })
        .to(".lets", { y: -200, x: -50, duration: 80, ease: "power2.out" }, '-=80')
        .to(".e1", { y: -150, duration: 80, ease: "power2.out" }, '-=80')
        .to(".e2", { y: -100, duration: 80, ease: "power2.out" }, '-=80')
        .to(".e3", { y: -50, duration: 80, ease: "power2.out" }, '-=80')
        .to(".container_form-title", { y: -50, duration: 80, ease: "power2.out" }, '-=80')

})

const contacts = document.querySelectorAll('.contenedor_four_section-elements-element-one');
contacts.forEach((element, index) => {

    element.addEventListener('click', () => {


        if (index == 0) {
            window.location.href = 'https://github.com/bloosterone/';
        } else if (index == 1) {
            const emailAddress = 'xldiegoo@example.com';
            const mailtoLink = `mailto:${emailAddress}`;
            window.location.href = mailtoLink;
        } else {
            window.location.href = 'https://www.linkedin.com/in/diego-pinto-irribarren-aa731120a/';
        }
    });
});
const proyects = document.querySelectorAll('.p1');
proyects.forEach((elements, index) => {

    elements.addEventListener('click', () => {


        if (index == 0) {
            window.location.href = 'https://plunderlings.vercel.app/';
        } else if (index == 1) {
            window.location.href = 'https://myshop-ruddy.vercel.app/';
        } else if (index == 2) {
            window.location.href = 'https://plunderlings-beta.vercel.app/';
        }
        else {
            window.location.href = 'https://bloosterone.github.io/tsoons/';
        }
    });
});