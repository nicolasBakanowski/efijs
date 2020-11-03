angular.module("appmain").
controller('filterProduct', ['$scope', 'ProductService', function($scope, prodservi){
    let productoFiltrado = '';
    $scope.productoBuscado = '';
    $scope.filtrarProducto = function(){
        productoFiltrado = prodservi.buscarProducto($scope.productoBuscado);
        console.log(productoFiltrado);
        return productoFiltrado;
    }
}])

