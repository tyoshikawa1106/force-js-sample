(function() {
  "use strict";
  var app = angular.module("Controllers", ["Services"]);

  // 例外処理
  app.factory("$exceptionHandler", function () {
    return function (exception, cause) {
      console.log(exception.message);
      var msg = "画面の処理中にエラーが発生しました。" + "ご迷惑をおかけしております。";
      alert(msg);
    };
  });

  // AccountsCtrl
  app.controller("AccountsCtrl", ["$scope", "AccountServices", function($scope, helper) {
    try {
      helper.getAccounts($scope);

      $scope.login = function(event) {
        event.preventDefault();
        force.login(function() {
          console.log('FORCE LOGIN!');
          // リスト取得
          helper.getAccounts($scope);
        });
      }

    } catch (e) {
      throw e;
    }
  }]);

  // AccountCtrl
  app.controller("AccountCtrl", ["$scope", "AccountServices", "$routeParams", function($scope, helper, $routeParams) {
    try {
      helper.getAccount($scope, $routeParams.id);
    } catch (e) {
      throw e;
    }
  }]);
})();