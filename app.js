var app = angular.module('syncList', []);

app.controller('MainCtrl', ['$scope','$http', function($scope, $http) {

  $scope.list1 = [{id:2,name:'beta'}];
  $scope.list2 = [
    {id:1,name:'alpha'},
    {id:2,name:'beta'},
    {id:3,name:'gamma'}
  ];
  
  $http({method:'GET', url: "//api.github.com/users/mralexgray/repos" }).then(function(res) {
    $scope.list4 = res.data;
  }).then(function() {
    $scope.list3 = [$scope.list4[0]];
  });
  
}]);
