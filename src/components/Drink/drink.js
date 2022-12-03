import "./drink.css"

export let Drink = (props) => {
    let { img, name, ingredients } = props

    let ingredientsHtml = ingredients.map((item) => `<div class="layer">
    <div class="layer__color" style="background-color: #${item.color}"></div>
    <div class="layer__label">${item.label}</div>
  </div>`).join("")

    let element = document.createElement("div")
    element.classList.add("drink")
    element.innerHTML = `
    <div class="drink__product">
            <div class="drink__cup">
              <img src="https://apps.kodim.cz/daweb/cafelora/assets/cups/${img}.png">
            </div>
            <div class="drink__info">
              <h3>${name}</h3>
              ${ingredientsHtml}
            </div>
          </div>
          <div class="drink__controls">
            <button class="order-btn">
              Objednat
            </button>
          </div>
    `
    return element
}