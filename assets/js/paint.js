function configureListeners() {
    var images = document.getElementsByTagName('img');  


     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity)      
    } 
}

//If not transparent, decrease opacity.
function addOpacity(event) {
    if(!this.classList.contains('dim')){
        this.classList.add('dim');
    }
    getProductInfo(event.target.id);     
}

//If transparent, default opacity
function removeOpacity(event) {
     if(this.classList.contains('dim')){
         this.classList.remove('dim');
     }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            colorName = 'Lime Green'
            price = '$19.99'
            updatePrice(colorName, price)     
            break;           
        case 'pn2':
            colorName = 'Medium Brown'
            price = '$11.14'
            updatePrice(colorName, price)    
            break;            
        case 'pn3':
            colorName = 'Royal Blue'
            price = '$22.99'
            updatePrice(colorName, price)  
            break;   
        case 'pn4':
            colorName = 'Solid Red'
            price = '$13.42'
            updatePrice(colorName, price)  
            break;   
        case 'pn5':
            colorName = 'Solid White'
            price = '$21.98'
            updatePrice(colorName, price)       
            break;   
        case 'pn6':
            colorName = 'Solid Black'
            price = '$4.99'
            updatePrice(colorName, price)        
            break;   
        case 'pn7':
            colorName = 'Solid Cyan'
            price = '$8.22'
            updatePrice(colorName, price) 
            break;   
        case 'pn8':
            colorName = 'Solid Purple'
            price = '$11.99'
            updatePrice(colorName, price)   
            break;   
        case 'pn9':
            colorName = 'Solid Yellow'
            price = '$14.99'
            updatePrice(colorName, price) 
            break;   
        default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');// select element with corresponding id
        colorPrice.textContent = price;// display price
        
        let color = document.getElementById('color-name');// select element with corresponding id
        color.textContent = colorName;//display color name
    }
    
}
