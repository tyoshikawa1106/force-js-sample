(function() {
  "use strict";
  var app = angular.module("Services", [])

  // 例外処理
  app.factory("$exceptionHandler", function () {
    return function (exception, cause) {
      console.log(exception.message);
      var msg = "画面の処理中にエラーが発生しました。" + "ご迷惑をおかけしております。";
      alert(msg);
    };
  });

  // AccountServices
  app.factory("AccountServices", ["$rootScope", function($rootScope) {
    // Get Account List
    function getAccounts(scope) {
      var query = 'SELECT Id,Name,AccountNumber FROM Account ORDER BY Name ASC LIMIT 200';
      force.query(query, function (response) {
        scope.accounts = response.records;
        // Viewに反映
        $rootScope.$apply();
      });
    }

    // Get Account
    function getAccount(scope, accountId) {
      if (accountId) {
        var query = 'SELECT Id,Name,AccountNumber FROM Account WHERE Id = ' + '\'' + accountId + '\'' +' ORDER BY Name ASC LIMIT 200';
        force.query(query, function (response) {
          if (response.records.length > 0) {
            scope.account = response.records[0];
            console.log(scope.account);
          }
          
          // Viewに反映
          $rootScope.$apply();
        });
      }
    }

    return {
      getAccounts: function(scope) {
        return getAccounts(scope);
      },
      getAccount: function(scope, accountId) {
        return getAccount(scope, accountId);
      },
    };
  }]);
})();