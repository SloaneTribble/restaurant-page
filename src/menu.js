function menu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const classic = menuItem("Classic Whip", "Our namesake dip", "14");
    const spicy = menuItem("Spicy", "A spicy twist on an old favorite", "17");
    const thin = menuItem("Thin", "Flavor takes center stage with this heritage selection", "12");
    const herbed = menuItem("Herbed", "A creamy dip featuring the rarest herbs", "15");
    const creamy = menuItem("Creamy", "Classic dip with a boost of cream", "16");

    menu.appendChild(classic);
    menu.appendChild(spicy);
    menu.appendChild(thin);
    menu.appendChild(herbed);
    menu.appendChild(creamy);

    return menu;
}

function menuItem(title, description, price){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemTitle = document.createElement('span');
    itemTitle.textContent = title;

    menuItem.appendChild(itemTitle);

    const itemDescription = document.createElement('div');
    itemDescription.classList.add("item-description");
    itemDescription.textContent = description;

    menuItem.appendChild(itemDescription);

    const itemPrice = document.createElement('span');
    itemPrice.textContent = price;

    menuItem.appendChild(itemPrice);

    return menuItem;
}

export {menu};
