angular.module('appmain').
controller('login',['$scope','$location', 'loginService',function($scope, location, lgservice){
    let user={user:$scope.user, pass:$scope.pass};
    $scope.isadmin= function(){
       if (lgservice.auth($scope.user)){
           location.path('/admin');
           //path only admin - with crud acces
       }else{
           //path guest user- only view 
       }
    }
}]);    
