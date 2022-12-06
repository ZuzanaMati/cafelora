import "./layer.css"

export let Layer = (props) => {
    let { color, label } = props

    let element = document.createElement("div")
    element.classList.add("layer")
    element.innerHTML =
        `<div class="layer__color" style="background-color: ${color}"></div>
    <div class="layer__label">${label}</div>`

    return element
}