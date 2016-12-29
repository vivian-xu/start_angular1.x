
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

    $scope.colorInput = 'red';

    $scope.styleText = "{ 'color': red }";

    $scope.colors = [
      {name: '黑色', color: 'black' , type: "暗色" },
      {name: '白色', color: 'white' , type: "亮色", disabled: false },
      {name: '红色', color: 'red' , type: "暗色", disabled: true },
      {name: '蓝色', color: 'blue' , type: "暗色", disabled: false },
      {name: '黄色', color: 'yellow' , type: "亮色", disabled: true },
    ];

    $scope.colorChosen = $scope.colors[0];

    $scope.countries = {
      CN: '中国 China' ,
      US: '美国 United States',
      UK: '英国 United Kingdom',
      GR: '德国 Germany'
    };

    $scope.country = 'CN';

    $scope.template = {
      url: "views/part.html"
    };

    $scope.getUrl = function() {
      return this.template.url;
    }

    $scope.onClick = function( index ) {
      console.log(`点击了第 ${index} 行按钮`);
    };
  })
.filter("reverse", function(){
  return function( text ) {
    return text.split("").reverse().join("");
  }
});
