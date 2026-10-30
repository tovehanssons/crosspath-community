//Bildkarusell 

"use strict";

// Hämtar bildkarusellen i HTML-fliken
document.querySelectorAll(".carousel").forEach((carousel) => {

  // Hämtar alla bilder för karusellen
  const items = carousel.querySelectorAll(".carousel__item");

  // Skapar en prick för varje bild
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  // Lägger till prickarna i karusellen
  carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
    `
  );

  // Hämtar alla tre prickarna
  const buttons = carousel.querySelectorAll(".carousel__button");

  // forEach-loopen gör så att man kan klicka på prickarna för att byta bild
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {

      // Avmarkerar alla bilder
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );

      // Avmarkerar alla prickar
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      // Visar den valda bilden och markerar rätt prick
      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Visar första bilden och markerar första pricken när sidan laddas
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});