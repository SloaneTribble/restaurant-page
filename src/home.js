    
function homeMaker(){
        function component() {
        const element = document.createElement('div');
        
        element.classList.add('home');
        element.textContent = 'home';
        
        return element;
    }
    
    document.body.appendChild(component());

}

export {homeMaker};
