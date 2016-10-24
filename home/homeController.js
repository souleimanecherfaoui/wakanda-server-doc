'use strict';

angular.module('wakanda-server-doc')
  .controller('homeController', function ($scope) {
    var sections = [
      {
        name: 'Data Integration',
        description: 'Wakanda has an efficient relational data model, that allows you to work seamlessly with any datasource.',
        imageUrl: './images/datamodel.png',
        link: '#/doc/data'
      }
    ];
    $scope.sections = sections;
  });
