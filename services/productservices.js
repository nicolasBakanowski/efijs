angular.module('appmain') // obtenemos la referencia al modulo principal

// servicio para agregar mensajes y recuperarlos
// Angular solo instancia el servicio una sola vez
// angular es el encargado de instanciarlo

// beneficios: Si tenemos una sola instancia podriamos guardar informacion
// del estado de nuestra aplicacion


.service('ProductService', function(){
    let listProducts=[];
    if (window.localStorage.getItem('producto'))
       listProducts = JSON.parse(window.localStorage.getItem('producto'));
   // Closures - JavaScript 
    return {
        getProduct: function () {
            return listProducts;
        },
        addPro: function (product) {
            listProducts.push(product);
            window.localStorage.setItem('producto',JSON.stringify(listProducts));

        },
        buscarProducto: function(nombreProducto){
            console.log(listProducts[0].name);
            for(n=0; n<listProducts.length; n++){
                console.log("hola");
                if(listProducts[n].name == nombreProducto){
                    console.log(listProducts[n].name, " Encontrado");
                    return listProducts[n];
                }
            }
            
        },
        eliminarProducto: function(nombreProducto){
            for(let n=0; n<lista.length; n++){
                if(lista[n].name == nombreProducto){
                    lista.splice(n - 1, 1);
                }
            }
        }


    }
});


