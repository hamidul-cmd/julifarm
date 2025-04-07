// moblile nav code
let open = document.querySelector(".open");
let close = document.querySelector(".close");
body = document.querySelector("body");

let navlinks = document.querySelectorAll(".nav li");

var tr = gsap.timeline();
tr.to(".nav", {
  x: 0,
  duration: 0.2,
});

if (window.innerWidth < 1023) {
  tr.from(".nav li", {
    x: 150,
    duration: 0.3,
    stagger: 0.3,
    opacity: 0,
  });
}

tr.from(close, {
  opacity: 0,
  duration: 0.3,
  x: 50,
});

tr.pause();

open.addEventListener("click", function () {
  tr.play();
  body.classList.add("overflow-hidden");
});
close.addEventListener("click", function () {
  tr.reverse();
  body.classList.remove("overflow-hidden");
});

navlinks.forEach(function (link) {
  link.addEventListener("click", function () {
    tr.reverse();
    body.classList.remove("overflow-hidden");
  });
});
//bobile nav code over

//destop nav code
let headettr = gsap.timeline();

headettr.from(".logo", {
  y: -80,
  duration: 0.6,
  stagger: 0.3,
  opacity: 0,
});
if (window.innerWidth > 1023) {
  headettr.from(".nav li", {
    y: -100,
    duration: 0.6,
    stagger: 0.3,
  });

  headettr.from(".bay", {
    y: -80,
    duration: 0.6,
    stagger: 0.3,
    opacity: 0,
  });
}
headettr.from(".open", {
  y: -80,
  duration: 0.6,
  stagger: 0.3,
  opacity: 0,
});

headettr.from(".hero__content h1", {
  y: 80,
  duration: 0.8,
  stagger: 0.3,
  opacity: 0,
});
headettr.from(".hero__content p", {
  y: 80,
  duration: 0.8,
  stagger: 0.3,
  opacity: 0,
});
headettr.from(".hero__content a", {
  y: 80,
  duration: 0.8,
  stagger: 0.3,
  opacity: 0,
});

//desktop nav code over
