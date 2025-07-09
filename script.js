gsap.from("h1", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power2.out",
  delay: 0.3,
});

gsap.from("nav span", {
  opacity: 0,
  y: -20,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1.7)",
});

gsap.from(".second .container", {
  scrollTrigger: {
    trigger: ".second",
    start: "top 80%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".products h2", {
  scrollTrigger: {
    trigger: ".products h2",
    start: "top 90%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".products .card", {
  scrollTrigger: {
    trigger: ".products .container",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out",
});

gsap.from(".shop-btn", {
  scrollTrigger: {
    trigger: ".shop-btn",
    start: "top 90%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  ease: "back.out(1.7)",
});

gsap.from(".four", {
  scrollTrigger: {
    trigger: ".four",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
});

gsap.from("footer .left h5, footer .right h5", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 40,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out",
});

gsap.from(".end", {
  scrollTrigger: {
    trigger: ".end",
    start: "top %",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power2.out",
});
