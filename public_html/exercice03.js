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
                showJustTheLine(i);
            }
        }
    }
}

function add(index){
    
    compteItems[index] += 1;
    
     showJustTheLine(index);
}

function remove(index){
    
    compteItems[index] -= 1;
    
    if(compteItems[index] === 0){
        basket3.splice(index,1);
        compteItems.splice(index,1);
        majVue3();
    }else{
       showJustTheLine(index);
    }
}


function majVue3(){
    
    //Vider la div exo03_basket
    var nodeBasket = document.getElementById("exo03_basket");
    
    while (nodeBasket.firstChild) {
        nodeBasket.removeChild(nodeBasket.firstChild);
    }
    
    for(var i = 0 ; i < basket3.length ; i++){
        
        var newIl = document.createElement('li');

        newIl.innerHTML =  "<a href='#' onclick='remove(" + i + ")'> - </a> <a href='#' onclick='add(" + i + ")'> + </a>" +basket3[i] + " Quantité:" + compteItems[i];

       document.getElementById("exo03_basket").appendChild(newIl);      
    }      
}

function showJustTheLine(position){
    var listChildren = document.getElementById("exo03_basket").childNodes;
   listChildren[position].innerHTML =  "<a href='#' onclick='remove(" + position + ")'> - </a> <a href='#' onclick='add(" + position + ")'> + </a>" +basket3[position] + " Quantité:" + compteItems[position];
}
