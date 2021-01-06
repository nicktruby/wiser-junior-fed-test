window.addEventListener("DOMContentLoaded", () => {
  console.log("ready");
});

// Card state change

const card = document.querySelector('.card');
const cardToggle = card.querySelector('.card__toggle');

cardToggle.addEventListener('click', () => card.classList.toggle('active'))
