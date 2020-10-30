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
            console.log(product);
            listProducts.push(product);
            window.localStorage.setItem('prodcuto',JSON.stringify(listProducts));

        },
        
    }
});


