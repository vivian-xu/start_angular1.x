
var App = angular.module('App', []);

App.controller("FirstCtrl", function( $scope ){
    $scope.list = [
      {
        name: "Harry"
      },
      {
        name: "Tom"
      },
      {
        name: "Jerry"
      }
    ];

    $scope.data = {
      message: "Hello",
      deleted: false,
      important: false,
      error: false,
      style: ""
    };

    $scope.warning = true;

    $scope.onClick = function( index ) {
      console.log(`点击了第 ${index} 行按钮`);
    };

  })
.filter("reverse", function(){
  return function( text ) {
    return text.split("").reverse().join("");
  }
});
