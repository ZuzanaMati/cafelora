import "./drink.css"
import { Layer } from "../Layer/Layer.js"

export let Drink = (props) => {
  let { id, name, ordered, image, layers } = props

  /* let ingredientsHtml = ingredients.map((item) => `<div class="layer">
  <div class="layer__color" style="background-color: #${item.color}"></div>
  <div class="layer__label">${item.label}</div>
</div>`).join("") */

  let orderedDrink = '';
  if (!ordered) {
    orderedDrink = 'Objednat';
  } else {
    orderedDrink = "Zrušit"
  }

  let element = document.createElement("div")
  element.classList.add("drink")
  element.innerHTML = `
    <div class="drink__product">
            <div class="drink__cup">
              <img src="${image}">
            </div>
            <div class="drink__info">
              <h3>${name}</h3>
            <div class="layer"></div>
            </div>
          </div>
          <div class="drink__controls">
            <button class="order-btn">
              ${orderedDrink}
            </button>
          </div>
    `
  if (ordered) {
    element.querySelector("button").classList.add("order-btn--ordered")
  }


  element.querySelector(".order-btn").addEventListener("click", () => {

    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Email zuzkamatiaskova@gmail.com",
      },
      body: JSON.stringify({ ordered: !ordered }),
    }).then((response) => response.json())
      .then((data) => {
        element.replaceWith(Drink(data.results))
      })

  })

  let layer = element.querySelector(".layer")
  layer.append(...layers.map((item) => Layer(item)))
  return element
}