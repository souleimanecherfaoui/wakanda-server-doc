angular.module('wakanda-server-doc')
  .controller('navbarController', function($scope, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function () {
      $scope.searchString = '';
    });
  });
