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
gsap.set("#h1text", { xPercent: -100, opacity: 0 });

gsap.to("#h1text", {
  xPercent: 0,
  opacity: 1,
  duration: 5,
  stagger: 2,
  scrollTrigger: {
    scrub: true,
    trigger: "#bkblogo",
    start: "top",
    end: () => {
      const extraDistance = window.innerHeight * 2;
      return `bottom+=${extraDistance}`;
    },
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
