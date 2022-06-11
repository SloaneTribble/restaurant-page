function contact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const greeting = document.createElement('div');
    greeting.innerText = "We would be very happy to hear from you any time.";

    contact.appendChild(greeting);

    const tel = document.createElement('div');
    tel.innerText = "555 - 323 - 4330";

    contact.appendChild(tel);

    const email = document.createElement('div');
    email.innerText = "bubby@whip.dip";

    contact.appendChild(email);

    const address = document.createElement('div');
    address.innerText = "Bubby's Whipped Dips \n 123 Fake St. \n Springfield, MO 10101";

    contact.appendChild(address);


    return contact;
}
 
export {contact};