
var AppD = angular.module('AppD', []);

AppD.directive("people", function(){
  return {
    restrict: "E",
    template: " <p>姓名: {{data.name}} </p> <p>性别: {{data.sex}} </p>  "
  }
});

AppD.controller("SecondCtrl", function ($scope) {
  $scope.data = {
    name: "Vivian",
    sex: "女"
  };
});


