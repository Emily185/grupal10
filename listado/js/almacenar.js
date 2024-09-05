document.addEventListener('DOMContentLoaded', ()=>{

// cargar los items almacenados
function cargarItems(){
 let itemsGuardados = localStorage.getItem('items');
 let items = [];
 if(itemsGuardados){
    items = JSON.parse(itemsGuardados);
 }
 // aca se llamaria a una funcion q maneja la lista, la actualiza y tendriamos q hacer que no se multiplique Funcion(items);
}


})