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
gsap.set("#bkblogo", {
  opacity: 0,
  duration: 10,
});
gsap.to("#bkblogo", {
  opacity: 1,
});
gsap.set(".contact-1", { opacity: 0 });
gsap.to(".contact-1", {
  opacity: 1,
});
