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
        .when('/login', {
          controller: "login",
          templateUrl: "views/login.html"
        })
        .when('/admin', {
          templateUrl: "views/admin.html"
        })
        .when('/buscarProductos', {
          controller: "filterProduct",
          templateUrl: "views/filterProduct.html"
        })
        .when('/eliminarProductos', {
          controller: "deleteproduct",
          templateUrl: "views/deleteProduct.html"
        })
        .when('/', {
          templateUrl: "views/home.html"
        })
      .otherwise({
        redirectTo: "/"
       });
  }
]);

