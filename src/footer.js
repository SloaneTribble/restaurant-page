function footer(){
    const footer = document.createElement('div');
    footer.classList.add('footer');
    
    
    const tel = document.createElement('div');
    tel.innerText = "555 - 323 - 4350";
    
    footer.appendChild(tel);
    
    const email = document.createElement('div');
    email.innerText = "bubby@whip.dip";
    
    footer.appendChild(email);
    
    const address = document.createElement('div');
    address.innerText = '123 Fake St. Springfield MO 10101';

    footer.appendChild(address);

    return footer;
}

export {footer};