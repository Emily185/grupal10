document.addEventListener('DOMContentLoaded', ()=>{

// cargar los items almacenados
function cargarItems(){
 let itemsGuardados = localStorage.getItem('items');
 let items = [];
 if(itemsGuardados){
    items = JSON.parse(itemsGuardados);
 }
 // aca se llamaria a una funcion q maneja la lista, la actualiza y tendriamos q hacer que no se multiplique Funcion(items);
 listaItems(items);
}

//funcion para listar los items
function listaItems(items){
let contenedorItems = document.getElementById('contenedor');
contenedorItems.innerHTML = ""; //para que no se este repitiendo la lista contantemente cuando se actualiza
items.forEach((item, () =>{ //creo un elemento de lista cada vez que se agrega un item al local storage
    let li = document.createElement('li');
    li.textContent = item;
    li.className = 'list-group-item';
    contenedorItems.appendChild(li); //lo inserto en el contenedor con appendChild
}))

}



})