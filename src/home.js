    
function homeMaker(){
        const element = document.createElement('div');
        
        element.classList.add('home');

        const intro = document.createElement('div');
        intro.classList.add('intro');
        intro.innerText = "Bubby's has been serving hand-whipped dips since 1956";

        element.appendChild(intro);

        const credit = document.createElement('span');
        credit.classList.add('photo-credit');
        credit.innerHTML = 'Photo by <a href="https://unsplash.com/@victoriakosmo">Victoria Shes</a> on <a href="https://unsplash.com/">Unsplash</a>';   

        element.appendChild(credit);
        return element;
}

export {homeMaker};

// Photo by Victoria Shes on Unsplash

