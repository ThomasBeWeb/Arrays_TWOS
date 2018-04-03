//Liste des items entrés
var basket= [];

//Fonction ajout d'un item dans la liste
function exo01_addToBasket(){
    
    var itemAjout = document.getElementById("exo01_item").value;
    
    basket.push(itemAjout);    
    
    majVue();
    
}

function majVue(){
    
    //Vider la div exo01_basket
    var nodeBasket = document.getElementById("exo01_basket");
    
    while (nodeBasket.firstChild) {
        nodeBasket.removeChild(nodeBasket.firstChild);
    }
    
    for(var i = 0 ; i < basket.length ; i++){
        
        var newDiv = document.createElement('div');

        newDiv.className = "item";

        newDiv.innerHTML = basket[i];

       nodeBasket.appendChild(newDiv);      
    }        
}
