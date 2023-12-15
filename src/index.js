import './index.css';
import { Card } from "./Card.js" 

const header_menu_button = document.querySelector(".header__menu-button");
const header_navigation = document.querySelector(".header__nav");
const card_section = document.querySelector(".card-section");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const popup_close_button = popup.querySelector(".popup__button");
let is_header_menu_open = false;

header_navigation.classList.add("header__nav_closed");
popup.classList.add("popup_closed");


header_menu_button.addEventListener("click", (event) => {
    is_header_menu_open = !is_header_menu_open;
    if (is_header_menu_open) {
        header_navigation.classList.remove("header__nav_closed");
    } else {
        header_navigation.classList.add("header__nav_closed");
    }
});

popup_close_button.addEventListener("click", (event) => {
    popup.classList.add("popup_closed");
    overlay.classList.remove("overlay_opened");
});


function buy() {
    popup.classList.remove("popup_closed");
    overlay.classList.add("overlay_opened");
}

function create_card(card) {
    return new Card(card.title, card.price, card.image, card.id, buy).generateCard()
}

function generate_cards(cards) {
    cards.forEach(card => {
        const card_element = create_card(card);
        card_section.appendChild(card_element);
    })
}

// const myProducts = [
//     {
//         title: 'Название',
//         price: 0,
//         image: '#',
//         id: 100,
//     }, 
//     {
//         title: 'Название2',
//         price: 0,
//         image: '#',
//         id: 101,
//     }
// ];
// for (const myProduct of myProducts) {
//     const myProductCard = create_card(myProduct);
//     card_section.appendChild(myProductCard);
// }

fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => {
                generate_cards(json)
            })

