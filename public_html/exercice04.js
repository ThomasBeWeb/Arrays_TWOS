//Creation du fichier JSON
var data = {items: [
]};

function exo04_addToBasket(){
    
    //Index l'item concerne
    var indexItem = 0;
    
    //Recupere la nouvelle valeur    
    var nom = document.getElementById("exo04_item").value;
    
    //Teste si elle existe dans data
    flag = false;
    
    for(var i = 0; i < data.items.length ; i++){
        
        if(data.items[i].name === nom){
            data.items[i].quantity++;
            flag = true;
            indexItem = i;
        }
    }
    
    //Si elle n'existe pas on l'ajoute au JSON avec une quantité de 1
    if(flag === false){
        addItem(nom,1);
        indexItem = (data.items.length) - 1;
    }
    
    //MAJ de la vue
    majVue4();
    
    //Affichage du popup
    showPopUp(indexItem);
    
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

function showPopUp(index){
    
    //Message à renvoyer
    var message = "";
    
    var item = data.items[index];
    
    if(item.quantity > 1){
        message = "La quantité du produit " + item.name  + " a été mise à jour";
    }else{
        message = "Le produit " + item.name  + " a été ajouté à votre panier";
    }
    
    document.getElementById("popupLbl").value = message;
    
    document.getElementById("popupLbl").classList.remove("hidden");
    
    setTimeout(function(){ document.getElementById("popupLbl").classList.add("hidden"); }, 1500);

}

function removePop(){
   alert("toto");
     document.getElementById("popupLbl").classList.add("hidden");
}