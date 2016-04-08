'use strict';

angular.module('wakanda-server-doc')
  .controller('documentationController', function ($scope, $stateParams) {
    $scope.currentPage = $stateParams.page;
    $scope.currentSubPage = $stateParams.subpage;
  });
