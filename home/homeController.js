'use strict';

angular.module('wakanda-server-doc')
  .controller('homeController', function ($scope) {
    var sections = [
      {
        name: 'OVERVIEW',
        description: '',
        imageUrl: './images/overview.png',
        link: '#/doc/overview'
      },
      {
        name: 'DATA INTEGRATION',
        description: '',
        imageUrl: './images/data.png',
        link: '#/doc/data'
      },
      {
        name: 'AUTHENTICATION',
        description: '',
        imageUrl: './images/authentication.png',
        link: '#/doc/authentication'
      },
      {
        name: 'HTTP',
        description: '',
        imageUrl: './images/http.png',
        link: '#/doc/http'
      }
    ];
    $scope.sections = sections;
  });
