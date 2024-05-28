gsap.set("#bannertext", { xPercent: 0 });
gsap.to("#bannertext", {
  xPercent: -100,
  scrollTrigger: {
    scrub: true,
    trigger: ".video-container",
    start: "top",
    end: "bottom+=1000",
  },
});