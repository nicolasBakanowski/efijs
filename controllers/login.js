angular.module('appmain').
controller('login',['$scope','loginService',function($scope,lgservice){
    user=[{user:$scope.user, pass:$scope.pass}];
    $scope.isadmin= function(){
       if (lgservice.auth(user)){
           //path only admin - with crud acces
       }else{
           //path guest user- only view 
       }

    }
}]);    
