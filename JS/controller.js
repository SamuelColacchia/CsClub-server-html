appdb.controller('leaderCtrl', function($scope, getleadersservice) {
  $scope.getleaders = function() {
    getleadersservice.getleaders();
  };

  getleadersservice.getleaders()
    .then(function() {
      $scope.leaders = getleadersservice.allleaders();
    });
});
