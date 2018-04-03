//Liste des items entrés
var basket3 = [];

var compteItems = [];

//Fonction ajout d'un item dans la liste
function exo03_addToBasket(){
    
    var itemAjout3 = document.getElementById("exo03_item").value;
    
    var testItem = isAlreadyIn(basket3,itemAjout3);

    if( testItem === false){
        
        basket3.push(itemAjout3);
        compteItems.push(1);
        
        majVue3();
        
    }else{
        
        for(var i = 0 ; i < basket3.length ; i++){
            if(itemAjout3 === basket3[i]){
                compteItems[i]  = compteItems[i] + 1;
            }
        }
    }
    
    
    
}

function majVue3(){
    
    //Vider la div exo03_basket
    var nodeBasket = document.getElementById("exo03_basket");
    
    console.log(compteItems);
    
    while (nodeBasket.firstChild) {
        nodeBasket.removeChild(nodeBasket.firstChild);
    }
    
    for(var i = 0 ; i < basket3.length ; i++){
        
        var newIl = document.createElement('li');

        newIl.innerHTML = basket3[i];

       document.getElementById("exo03_basket").appendChild(newIl);      
    }        
}
