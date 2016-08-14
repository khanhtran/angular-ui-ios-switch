angular.module('app', ['uiSwitch'])

.controller('MyController', function($scope) {
   $scope.enabled = true;
  $scope.onOff = true;
  $scope.yesNo = true;


  $scope.changeCallback = function(param1, param2) {
    console.log('This is the state of my model ' + $scope.enabled + 'param1=' + param1 + ' param2=' + JSON.stringify(param2, false));
  };
});
