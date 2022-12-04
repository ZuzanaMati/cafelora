import "./menu.css"
import { Drink } from "./components/Drink/drink.js"

export let Menu = (props) => {
    let { items } = props

    let element = document.createElement("section")
    element.classList.add("menu")
    element.innerHTML = `
    <div id="menu", class="container">
        <h2>Naše nabídka</h2>
          <p class="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div class="drinks-list">
          </div>

            <div class="order-detail">
                <a href="/objednavka">Detail objednávky</a>
            </div>
    </div>
`

    let drinkList = element.querySelector(".drinks-list")
    drinkList.append(...items.map((item) => Drink(item)))
    return element
}