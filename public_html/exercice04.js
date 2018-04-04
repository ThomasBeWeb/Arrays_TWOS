var data = {items: [
]};

function exo04_addToBasket(){
    
    //Recupere la nouvelle valeur    
    var nom = document.getElementById("exo04_item").value;
    
    //Teste si elle existe dans data
    flag = false;
    
    for(var i = 0; i < data.items.length ; i++){
        
        if(data.items[i].name === nom){
            data.items[i].quantity++;
            flag = true;
        }
    }
    
    if(flag === false){
        addItem(nom,1);
    }
    
    majVue4();
}

function addItem(nom,quantite){
    
    var lastIndex = (data.items.length) + 1;
    
  data.items.push(
    {id: lastIndex, name: nom, quantity: quantite}
   );;
}

function majVue4(){
    
    //Vider la div exo03_basket
    var nodeBasket = document.getElementById("exo04_basket");
    
    while (nodeBasket.firstChild) {
        nodeBasket.removeChild(nodeBasket.firstChild);
    }
    
    for(var i = 0; i < data.items.length ; i++){
        
        var newIl = document.createElement('li');

        newIl.innerHTML =  "<a href='#' onclick='remove(" + i + ")'> - </a> <a href='#' onclick='add(" + i + ")'> + </a>" + data.items[i].name + " Quantité:" + data.items[i].quantity;

       document.getElementById("exo04_basket").appendChild(newIl);      
    }      
}

function add(index){
    
    data.items[index].quantity++;
    
     majVue4();
}

function remove(index){
    
    data.items[index].quantity--;
    
    if(data.items[index].quantity === 0){
        data.items.splice(index,1);
    }
    
    majVue4();
}