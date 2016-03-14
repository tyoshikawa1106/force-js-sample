angular.module("myApp", ["Controllers", "ngRoute", "ngMessages"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "AccountsCtrl",
    templateUrl : "/template/accounts.html"
  }).
  when("/view/:id", {
    controller : "AccountCtrl",
    templateUrl : "/template/account.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);