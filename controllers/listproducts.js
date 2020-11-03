angular.module('appmain').
controller('listarcontroller',['$scope','ProductService',function($scope,prodservi){
    $scope.lista=[];
    $scope.listarproducto = function(){
        $scope.lista = prodservi.getProduct();
        
    }
}]);    
