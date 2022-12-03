import "./menu.css"

export let Menu = (props) => {
    let { kavaUrl, kavaNazev, barva1, barva2, label } = props
    let element = document.createElement("section")
    element.classList.add("menu")
    element.innerHTML = `
    <div id="menu", class="container">
          <h2>Naše nabídka</h2>
          <p class="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div class="drinks-list">
          <div class="drink">
          <div class="drink__product">
            <div class="drink__cup">
              <img src="https://apps.kodim.cz/daweb/cafelora/assets/cups/${kavaUrl}.png">
            </div>
            <div class="drink__info">
              <h3>${kavaNazev}</h3>
              <div class="layer">
                <div class="layer__color" style="background-color: #${barva1}"></div>
                <div class="layer__label">voda</div>
              </div>
              <div class="layer">
                <div class="layer__color" style="background-color: #${barva2}"></div>
                <div class="layer__label">${label}</div>
              </div>
            </div>
          </div>
          <div class="drink__controls">
            <button class="order-btn">
              Objednat
            </button>
          </div>
        </div>
      </div>

      <div class="order-detail">
            <a href="/objednavka">Detail objednávky</a>
          </div>
        </div>
`
    return element
}