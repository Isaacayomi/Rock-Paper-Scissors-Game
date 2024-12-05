anime({
  targets: "section, .player__choice__image, .computer__choice__image",
  opacity: [0, 1],
  scale: [0, 1],
  easing: "easeOutExpo",
  delay: 300,
});

anime({
  targets: ".winner__decided",
  opacity: [0, 1],
  translateY: [1000, 0],
  easing: "easeOutExpo",
  delay: 400,
});
