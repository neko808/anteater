
var controller2 = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".pinned-element1", 0.3, {
  autoAlpha: 0,
  y: 100,
  ease: Linear.easeNone,
  stagger: {
    from: "left",
    amount: 0.4
  }
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#pinned"
})
  .setTween(tl)
  .addIndicators()
  .addTo(controller2);