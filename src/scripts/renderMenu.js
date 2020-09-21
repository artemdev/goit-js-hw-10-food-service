import menuItems from '../menu.json'
import menuTemplate from '../templates/menu.hbs'

const $ul = document.querySelector(".js-menu")

let items = ""
menuItems.forEach(item => {
    items += menuTemplate(item)
})

$ul.innerHTML = items