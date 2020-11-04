angular.module("appmain").
controller('deleteproduct',['$scope','ProductService', function($scope, prodservi){    
    let productoFiltrado = '';
    $scope.productoBuscado = '';
    $scope.eliminarProducto = function(){
        console.log("Entrando controlador delete product")
        productoFiltrado = prodservi.eliminarProducto($scope.productoBuscado);
    }   
}]);