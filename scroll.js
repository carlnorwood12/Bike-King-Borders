gsap.set("#bannertext", { xPercent: 0 });
gsap.to("#bannertext", {
  xPercent: -50,
  color: '#8fb5c7',
  scrollTrigger: {
    scrub: true,
    trigger: ".video-container",
    start: "top",
    end: "bottom",
  },
});
gsap.to(".bannerheader", {
  backgroundColor: gsap.getProperty("html", "--black"),
  scrollTrigger: {
    scrub: true,
    trigger: ".video-container",
    start: "top",
    end: "bottom+=10",
  },
});