import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Chill, Drink, Unwind..."],
    typeSpeed: 120,
    loop: true
  });
}

export { loadDynamicBannerText };
