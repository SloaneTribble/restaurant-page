    
function componentMaker(){
        function component() {
        const element = document.createElement('div');
        
        // Lodash, now imported by this script
        element.classList.add('there');
        
        return element;
    }
    
    document.body.appendChild(component());

}

componentMaker();
