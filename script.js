gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#hero", 
  { opacity: 1 }, 
  { 
    opacity: 0,
    scrollTrigger: {
      trigger: "header",
      start: "50% 50%",
      end: "bottom 20%",
      scrub: 1,
      markers: false
    }
  }
);

gsap.from("#hero h1", { 
  y: -50, 
  opacity: 0, 
  duration: 1 
});

gsap.from("#hero p", { 
  y: -30, 
  opacity: 0, 
  duration: 1, 
  delay: 0.5 
});


gsap.to("#titulo", {
  y: -50,
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "#titulo",
    start: "top 80%", 
    end: "top 50%",
    scrub: 1,
    markers: false
  }
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
    start: "70% 30%",  
    end: "bottom 0%",
    scrub: 1,
    markers: false
  },
  x: -300,   // empieza fuera de la pantalla a la izquierda
  opacity: 0,
  duration: 4,
  stagger: 0.8   // cada tarjeta aparece con un pequeño retraso
});


gsap.from("#servicios-destacados", {
  scrollTrigger: {
    trigger: ".tarjeta",
    start: "bottom -10%",
    end: "bottom 10%",
    scrub: 1,
    markers: false
  },
  rotation: 360,        
  ease: "none"
})


gsap.from(".servicio", {
  scrollTrigger: {
    trigger: "#caracteristicas",
    start: "90% 30%",   
    end: "bottom 0%",
    scrub: 1,
    markers: false
  },
  x: -300,   
  opacity: 0,
  duration: 4,
  stagger: 0.8   // cada tarjeta aparece con un pequeño retraso
});

gsap.to(".comentario", {
  scale: 1.05,        
  duration: 0.9,       
  yoyo: true,          
  ease: "power1.inOut",
  repeat: 1,
  scrollTrigger: {
    trigger: ".servicio", 
    start: "bottom -20%",          
    end: "bottom 0%",
    toggleActions: "play none none reset", // cada vez que entras, vuelve a jugar                 
    markers: false
  }
});

gsap.fromTo("#footer", {
    opacity:0
},{
    scrollTrigger: {
        trigger: "#cta",
        start:"30% bottom",
        end: "buttom 15%",
        scrub: 1,
        markers:false
    },
    opacity: 1
});


