import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";
import { langs } from "./languages.js";

if (!localStorage.getItem("lang")) localStorage.setItem("lang", "ua");

let isPlay = false;

const classes = {
  opened: "opened",
  hidden: "hidden",
  active: "active",
};

const checkboxes_val = {
  requirements: ["minimum", "recommended"],
  versions: ["limited", "standard"],
};

const costEdit = [
  {
    price: 19.99,
    title: "Standad Edition",
  },
  {
    price: 18.99,
    title: "Standad Edition",
  },
  {
    price: 29.99,
    title: "Deluxe Edition",
  },
];
// ----------------------------------------------- queries arrays ------------------------------------------------
const faqItems = document.querySelectorAll(".faq-item");
const sections = document.querySelectorAll(".section");
const checkboxes = document.querySelectorAll(".checkbox");
const languages = document.querySelectorAll(".language");
const buyButtons = document.querySelectorAll(".buy-button");
// --------------------------------------------- FNs & handlers ---------------------------------------------------------
const formatValue = value => (value < 10 ? `0${value}` : value);

const toggleMenu = () => header.classList.toggle(classes.opened);

const toggleLanguage = ({ target }) => {
  localStorage.setItem("lang", target.dataset.lang), setTexts();
};

const getTimerValues = diff => ({
  seconds: (diff / 1000) % 60,
  minutes: (diff / (60 * 1000)) % 60,
  hours: (diff / (60 * 60 * 1000)) % 24,
  days: diff / (24 * 60 * 60 * 1000),
  // days: (diff / (24 * 60 * 60 * 1000)) % 30, //?????????????? 30?
});

const setTimerValues = values => {
  Object.entries(values).forEach(([key, value]) => {
    // console.log(key, ":", value)
    const timerValue = document.getElementById(key);
    timerValue.innerText = formatValue(Math.floor(value));
    // timerValue.innerText = formatValue(Math.floor(value));
  });
};

const startTimer = date => {
  const id = setInterval(() => {
    const diff = new Date(date) - new Date();

    if (diff < 0) {
      clearInterval(id);
      return;
    }

    setTimerValues(getTimerValues(diff));
  }, 1000);
};

const handleVideo = ({ target }) => {
  const info = target.parentElement;

  isPlay = !isPlay;
  info.classList.toggle(classes.hidden, isPlay);

  target.innerText = isPlay ? "Pause" : "Play";
  isPlay ? video.play() : video.pause();
};

const handleCheckbox = ({ currentTarget: { checked, name } }) => {
  const { active } = classes;
  const value = checkboxes_val[name][Number(checked)];

  const list = document.getElementById(value);
  const tabs = document.querySelectorAll(`[data-${name}]`);
  const siblings = list.parentElement.children;

  for (const item of siblings) item.classList.remove("active");

  for (const tab of tabs) {
    tab.classList.remove("active");
    tab.dataset[name] === value && tab.classList.add(active);
  }

  list.classList.add(active);
};

const initSlider = () => {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 2, //3
    spaceBetween: 20,
    initialSlide: 2, //2
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
};

const handleFaqItem = evt => {
  const { currentTarget: target } = evt;
  target.classList.toggle(classes.opened); //toggling & then define:

  const isOpened = target.classList.contains(classes.opened); //true if contains class 'opened'
  const height = target.querySelector("p").clientHeight; //qSelector from parent by tag "p"
  const content = target.querySelector(".faq-item__content");

  content.style.height = `${isOpened ? height : 0}px`;
};

const handleScroll = () => {
  const { scrollY: y, innerHeight: h } = window;
  sections.forEach(sec => {
    if (y > sec.offsetTop - h / 1.5) sec.classList.remove(classes.hidden);
    //what is that offsetTop?
  });
  // console.log(y);
};

const setTexts = () => {
  const content = langs[localStorage.getItem("lang")];

  Object.entries(content).forEach(([key, value]) => {
    const items = document.querySelectorAll(`[data-text="${key}"]`);
    items.forEach(item => (item.innerText = value));
  });
};

const handleBuyButton = ({ currentTarget: target }) => {
  const { value } = target.dataset;
  if (!value) return;

  const { price, title } = costEdit[value];

  modalTitle.innerText = title;
  modalPrice.innerText = `${price}$`;

  modal.classList.add(classes.opened);
  overlay.classList.add(classes.opened);

  document.body.style.overflow = "hidden"; //scroll off
};

const closeModal = () => {
  modal.classList.remove(classes.opened);
  overlay.classList.remove(classes.opened);
  document.body.style.overflow = ""; //scroll on
};
// ================================================ end & handlers ================================================
startTimer(`Jan 1, ${new Date().getFullYear() + 1} 00:00:00`);
initSlider();
setTexts();

window.addEventListener("scroll", handleScroll);
modalClose.addEventListener("click", closeModal);
menuButton.addEventListener("click", toggleMenu);
videoBtn.addEventListener("click", handleVideo);

checkboxes.forEach(box => box.addEventListener("click", handleCheckbox));
faqItems.forEach(item => item.addEventListener("click", handleFaqItem));
languages.forEach(lang => lang.addEventListener("click", toggleLanguage));
buyButtons.forEach(btn => btn.addEventListener("click", handleBuyButton));
