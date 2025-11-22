gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#hero", {
opacity:1
},{
    scrollTrigger: {
              trigger: "header",
              start: "50% 50%",
              end: "bottom 20%",
              scrub: 1,
              markers: false
    },
        opacity: 0
    });

gsap.to("#letras", {
   y: -10,            
  repeat: -1,         
  yoyo: true,         
  ease: "sine.inOut"  // movimiento suave
});

gsap.from(".tarjeta", {
  scrollTrigger: {
    trigger: "#titulo",
    start: "70% 30%",   // cuando el hero está visible
    end: "bottom 0%",
    scrub: 1,
    markers: true
  },
  x: -300,   // empieza fuera de la pantalla a la izquierda
  opacity: 0,
  duration: 4,
  stagger: 0.8   // cada tarjeta aparece con un pequeño retraso
});



gsap.fromTo("#footer", {
    opacity:0
},{
    scrollTrigger: {
        trigger: "#cta",
        start:"50% 50%",
        end: "buttom 15%",
        scrub: 1,
        markers:false
    },
    opacity: 1
});

