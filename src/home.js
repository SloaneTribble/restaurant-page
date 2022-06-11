    
function homeMaker(){
        const element = document.createElement('div');
        
        element.classList.add('home');

        const intro = document.createElement('div');
        intro.classList.add('intro');
        intro.innerText = "With pride and passion, Bubby's has served hand-whipped dips since 1956.";

        element.appendChild(intro);

        const credit = document.createElement('span');
        credit.classList.add('photo-credit');
        credit.innerHTML = `Photos by <a href="https://unsplash.com/@victoriakosmo">Victoria Shes</a> on <a href="https://unsplash.com/">Unsplash</a>
        and <a href='https://pngtree.com/so/Mayonnaise'>pngtree.com</a>` ;   

        element.appendChild(credit);
        return element;
}

export {homeMaker};

// Photo by Victoria Shes on Unsplash

