import './style.css';
import { Header } from "./components/Header/header.js"
import { Banner } from "./components/Banner/banner.js"

console.log('funguju!');

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main')
main.append(
    Banner()
)

pageElement.append(
    Header(),
    main
)

document.querySelector('#app').append(pageElement);
