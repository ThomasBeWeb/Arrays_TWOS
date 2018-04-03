//Liste des items entrés
var basket2= [];

//Fonction ajout d'un item dans la liste
function exo02_addToBasket(){
    
    var itemAjout2 = document.getElementById("exo02_item").value;
    
    var testItem = isAlreadyIn(basket2,itemAjout2);

    if( testItem === false){
        basket2.push(itemAjout2);
        majVue2();
    }else{
        alert("Cette valeur a déjà été entré");
    }
    
    
    
}

function isAlreadyIn(panier,element){
    
    var flag = false;
    
    for(var i = 0 ; i < panier.length ; i++){
        if(panier[i] === element){
            flag = true;
        }
    }
    
    return flag;
}

function majVue2(){
    
    //Vider la div exo02_basket
    var nodeBasket = document.getElementById("exo02_basket");
    
    while (nodeBasket.firstChild) {
        nodeBasket.removeChild(nodeBasket.firstChild);
    }
    
    for(var i = 0 ; i < basket2.length ; i++){
        
        var newIl = document.createElement('li');

        newIl.innerHTML = basket2[i];

       document.getElementById("exo02_basket").appendChild(newIl);      
    }        
}
