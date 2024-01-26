const mobile = document.getElementById("mobile");
const nav = document.getElementById("nav-bar");
const close = document.getElementById("close-bar");
if (mobile) {
  mobile.addEventListener("click", (e) => {
    nav.style.right = "0px";
  });
  close.addEventListener("click", (e) => {
    nav.style.right = "-300px";
  });
}

var typed = new Typed("#name", {
  strings: [" Muna Yadav"],
  typeSpeed: 60,
});
var typed = new Typed("#work", {
  strings: ["Cloud Engineer☁️", "Android Developer", " र केहि त गर्छु नै"],
  typeSpeed: 90,
});

$("html, body").animate(
  {
    scrollTop: $(".about-us").offset().top,
  },
  500
);
