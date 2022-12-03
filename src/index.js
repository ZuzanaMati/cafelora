import './style.css';
import { Header } from "./components/Header/header.js"
import { Banner } from "./components/Banner/banner.js"
import { Menu } from './components/Menu/menu.js';
import { Gallery } from './components/Gallery/gallery.js';
import { Contact } from './components/Contact/contact.js';
import { Footer } from './components/Footer/footer.js';

let pageElement = document.createElement('div');
pageElement.classList.add('page');

let main = document.createElement('main')
main.append(
    Banner(),
    Menu({
        items: [
            {
                img: "lungo",
                name: "lungo",
                ingredients: [
                    {
                        color: "red",
                        label: "doppio"
                    }, {
                        color: "blue",
                        label: "voda"
                    },
                ]
            },
            {
                img: "doppio",
                name: "doppio",
                ingredients: [
                    {
                        color: "red",
                        label: "doppio"
                    }
                ]
            }
        ]
    }),
    Gallery(),
    Contact()
)

pageElement.append(
    Header(),
    main,
    Footer()
)

document.querySelector('#app').append(pageElement);
