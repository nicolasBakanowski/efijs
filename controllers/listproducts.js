angular.module('appmain').
controller('listarcontroller',['$scope','ProductService',function($scope,prodservi){
    $scope.lista=[];
    $scope.listarproducto = function(){
        console.log("asd")
        $scope.lista = prodservi.getProduct();
        console.log($scope.lista);
    }
}]);    
