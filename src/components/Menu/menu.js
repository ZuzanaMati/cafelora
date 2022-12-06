import "./menu.css"
import { Drink } from "./components/Drink/drink.js"

export let Menu = (props) => {
  let { drinks } = props

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
  if (drinks === undefined) {
    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks`, {
      method: "GET",
      headers: {
        "Authorization": "Email zuzkamatiaskova@gmail.com",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(Menu({
          drinks: data.results
        }))
      })
  } else {
    let drinkList = element.querySelector(".drinks-list")
    drinkList.append(...drinks.map((item) => Drink(item)))
  }


  return element
}