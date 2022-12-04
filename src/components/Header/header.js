import "./header.css"

export let Header = () => {
    let element = document.createElement("header")
    element.innerHTML = `
    <div id="home" class="header__content container">
    <div class="site-logo"></div>

        <div class="navigation">
          <button class="nav-btn"></button>
          <nav class="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
          </div>
        </div>`

    element.querySelector(".nav-btn").addEventListener("click", () => {
        let rolloutNav = element.querySelector(".rollout-nav")
        if (rolloutNav.classList.contains("nav-closed")) {
            rolloutNav.classList.remove("nav-closed")
        } else {
            rolloutNav.classList.add("nav-closed")
        }

    })

    element.querySelector(".rollout-nav").addEventListener("click", () => {
        console.log("klik")
        let rolloutNav = element.querySelector(".rollout-nav")
        rolloutNav.classList.add("nav-closed")
    })


    return element
}