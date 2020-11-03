angular.module("appmain").
controller('addproduct',['$scope','$location','ProductService', function($scope,location,prodservi){    
    let product=[{code:$scope.code,name:$scope.name,detail:$scope.detail,
    price:$scope.price,stockmin:$scope.stockmin,stockmax:$scope.stockmax,active:$scope.active}]
    $scope.addProduct = function(){
        prodservi.addPro($scope.product);
        location.path('/admin');
        
        

    }
}]);