import "./footer.css"

export let Footer = () => {
    let element = document.createElement("footer")
    element.innerHTML = `
    <div class="container">
        <div class="footer__content">
          Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
        </div>
      </div>
    `

    return element
}