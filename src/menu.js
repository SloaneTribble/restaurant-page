function menu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const classic = document.createElement('div');
    classic.classList.add('menu-item');

    const classicTitle = document.createElement('span');
    classicTitle.textContent = "Classic";

    const classicDescription = document.createElement('div');
    classicDescription.classList.add('item-description');
    classicDescription.textContent = "Our namesake dip \n $14";

    classic.appendChild(classicTitle);
    classic.appendChild(classicDescription);

    const spicy = document.createElement('div');
    spicy.classList.add('menu-item');
    spicy.textContent = 'spicy';



    const thin = document.createElement('div');
    thin.classList.add('menu-item');
    thin.textContent = 'thin';



    const herbed = document.createElement('div');
    herbed.classList.add('menu-item');
    herbed.textContent = 'herbed';



    const creamy = document.createElement('div');
    creamy.classList.add('menu-item');
    creamy.textContent = 'creamy';



    menu.appendChild(classic);
    menu.appendChild(spicy);
    menu.appendChild(thin);
    menu.appendChild(herbed);
    menu.appendChild(creamy);


    return menu;
}

export {menu};

// Photo by Abbie Tanner on Unsplash https://unsplash.com/@by_abigailkelly
// Photo by Vicky Ng on Unsplash https://unsplash.com/@vickyng
// Photo by Jesse Cortez on Unsplash https://unsplash.com/@zues_segami
// Photo by Semi O https://unsplash.com/@semce 
// Photo by Patrycja Polechonska on Unsplash https://unsplash.com/@ppolecho