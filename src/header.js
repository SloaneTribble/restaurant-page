function headerMaker(){
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Bubingo\'s Whipped Dips';

    const homeTab = document.createElement('button');
    homeTab.classList.add('home-tab');
    homeTab.textContent = 'home';

    const menuTab = document.createElement('button');
    menuTab.classList.add('menu-tab');
    menuTab.textContent = 'menu';

    const contactTab = document.createElement('button');
    contactTab.classList.add('contact-tab');
    contactTab.textContent = 'contact';

    header.appendChild(title);
    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);   

    return header;
}

export {headerMaker};