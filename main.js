angular.module('appmain',['ngRoute']) // definimos un modulo
.config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider
        .when('/addproduct', {
          controller: "addproduct",
          templateUrl: "views/viewAddProduct.html"
        })
        .when('/listproduct', {
          controller: "listarcontroller",
          templateUrl: "views/productlist.html"
        })

      .otherwise({
        redirectTo: "/"
       });
  }
]);

