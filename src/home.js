    
function bodyMaker(){
        function component() {
        const element = document.createElement('div');
        
        element.classList.add('there');
        element.textContent = 'body';
        
        return element;
    }
    
    document.body.appendChild(component());

}

export {bodyMaker};
