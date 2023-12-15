class Card {
    constructor(title, price, image, id, openPopup) {
        this._title = title;
        this._price = price;
        this._image = image;
        this._id = id;
        this._openPopup = openPopup;
    }

    _getTemplate() {
        const cardElement = document.querySelector('#card-template').content.cloneNode(true);
        this._templateTitle = cardElement.querySelector(".card__title");
        this._templatePrice = cardElement.querySelector(".card__price");
        this._templateImage = cardElement.querySelector(".card__image");
        this._templateButton = cardElement.querySelector(".card__button");
        return cardElement;
    }

    generateCard() { 
        this._element = this._getTemplate();
        this._templateImage.src = this._image;
        this._templateImage.alt = this._title;
        this._templateTitle.textContent = this._title;
        this._templatePrice.textContent = `Цена: ${this._price} руб.`;
        this._templateButton.addEventListener('click', this._openPopup);
        return this._element;
    }
}

export { Card };