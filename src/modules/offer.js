function offer() {
    //Offer

    class About {
        menu = document.querySelector('.menu-content')
        div = document.createElement('DIV')

        constructor(img, title, content, price, ...classes) {
            this.img = img
            this.title = title
            this.content = content
            this.price = price
            this.classes = classes
        }

        render() {
            if (this.classes) {
                this.classes = 'menu__item'
            } else {
                this.classes = classes
            }
            this.div.classList.add(`${this.classes}`)
            this.menu.append(this.div)
            this.div.innerHTML += `<img src="${this.img}"  alt="vegy" />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
             ${this.content}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Price:</div>
              <div class="menu__item-total"><span>$ ${this.price}</span> month</div>
            </div>`
        }
    }

    axios.get('http://localhost:3000/menu').then((data) => {
        data.data.forEach((item) => {
            new About(item.img, item.title, item.content, item.price).render()
        })

    })
}

export default offer