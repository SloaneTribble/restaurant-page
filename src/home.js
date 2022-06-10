    
function homeMaker(){
        const element = document.createElement('div');
        
        element.classList.add('home');
        element.textContent = 'home';
        
        return element;
}

export {homeMaker};
