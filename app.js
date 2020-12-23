/* ELEMENTS */
const cardElement = document.querySelector(".card");
const containerElement = document.querySelector(".container");
const titleElement = document.querySelector(".title");
const sneakerElement = document.querySelector(".sneaker img");
const descriptionElement = document.querySelector(".info h3");
const sizesElement = document.querySelector(".sizes");
const purchaseElement = document.querySelector(".purchase button");


/* CONSTANTS */

const CARD_ANIMATION_STRONG = 25;


/* FUNCTIONS */

/**
 * Позволяет карточке крутиться в 3D
 *
 * @param {MouseEvent} event 
 */
function animateCardElementByMouseFollow(event) {
  let xAxis = (window.innerWidth / 2 - event.pageX) / CARD_ANIMATION_STRONG;
  let yAxis = (window.innerHeight / 2 - event.pageY) / CARD_ANIMATION_STRONG;

  cardElement.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}

// Если не уменьшить анимацию transform, то будет задержка.
// Иначе если убрать, то при наведении карточка дернеться в направлении мышки.
function handleCardElementAnimationIn() {
  cardElement.style.transition = `transform 0.05s ease`;
}

// Сбрасывает трансформацию карточки
function handleCardElementAnimationOut() {
  cardElement.style.transition = `transform 0.75s ease`;
  cardElement.style.transform = `rotateY(0deg) rotateX(0deg)`;
}

// Меняет расположение по оси Z элементов карточки для более глубокого эффекта 3D
function popoutCardElements() {
  titleElement.style.transform = 'translateZ(150px)';
  sneakerElement.style.transform = 'translateZ(200px) rotateZ(-45deg)';
  descriptionElement.style.transform = 'translateZ(125px)';
  sizesElement.style.transform = 'translateZ(100px)';
  purchaseElement.style.transform = 'translateZ(75px)';
}

// Возвращает расположение по оси Z элементов карточки
function popbackCardElements() {
  titleElement.style.transform = 'translateZ(0px)';
  sneakerElement.style.transform = 'translateZ(0px) rotateZ(0deg)';
  purchaseElement.style.transform = 'translateZ(0px)';
  descriptionElement.style.transform = 'translateZ(0px)';
  sizesElement.style.transform = 'translateZ(0px)';
}


/* EVENT-LISTENERS */

// Main drive card animation
containerElement.addEventListener("mousemove", animateCardElementByMouseFollow);

// Animate In
containerElement.addEventListener("mouseenter", () => {
  handleCardElementAnimationIn();
  popoutCardElements();
});

// Animate Out
containerElement.addEventListener("mouseleave", () => {
  handleCardElementAnimationOut();
  popbackCardElements();
});
