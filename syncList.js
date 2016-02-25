app.directive('syncList', function() {
  return {
    restrict: 'EA',
    scope: {
      nameField: '@',
      idField: '@',
      firstListModel: '=',
      secondListModel: '=',
    },
    controller: function($scope) {
      $scope.sync = function(item) {
        if (!$scope.isChecked(item[$scope.idField])) {
          if ($scope.firstListModel)
          // add item
            $scope.firstListModel.push(item);
        } else {
          // remove item
          for (var i = 0; i < $scope.firstListModel.length; i++) {
            if ($scope.firstListModel[i][$scope.idField] == item[$scope.idField]) {
              $scope.firstListModel.splice(i, 1);
            }
          }
          for (var j = 0; j < $scope.secondListModel.length; j++) {
            if ($scope.secondListModel[j][$scope.idField] == item[$scope.idField]) {
              $scope.secondListModel[j].selected = false;
            }
          }
        }
      };
      // isChecked fucntion for checkbox switching list
      $scope.isChecked = function(id) {
        var match = false;
        for (var i = 0; i < $scope.firstListModel.length; i++) {
          if ($scope.firstListModel[i][$scope.idField] == id) {
            match = true;
          }
        }
        return match;
      };
      $scope.$watch('$scope.firstListModel', function(firstListModel) {
        console.log("Change");
        console.log($scope.firstListModel);
      });
    },
    replace: true,
    templateUrl: 'syncList.html'
  };
});