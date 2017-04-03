'use strict';

var app = angular.module('wakanda-server-doc', [
  'ui.router',
  'Snippets',
  'SnippetsThemeBootstrapButtons'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'homeController'
    })
    .state('documentation', {
      url: '/doc/{page}?scrollTo=',
      templateUrl: function ($stateParams) {
        return 'documentation/pages/' + $stateParams.page + '.html';
      },
      controller: 'documentationController'
    })
    .state('documentationSubPage', {
      url: '/doc/{page}/{subpage}?scrollTo=',
      templateUrl: function ($stateParams) {
        return 'documentation/pages/' + $stateParams.page + '/' + $stateParams.subpage +'.html';
      },
      controller: 'documentationController'
    })
    .state('documentationSubPage2', {
      url: '/doc/{page}/{subpage}/{subpage2}?scrollTo=',
      templateUrl: function ($stateParams) {
        return 'documentation/pages/' + $stateParams.page + '/' + $stateParams.subpage + '/' + $stateParams.subpage2 +'.html';
      },
      controller: 'documentationController'
    });
});

app.run(function($rootScope, $state, documentationFactory, $window, $location, $anchorScroll) {

  $rootScope.$on("$stateChangeStart",
    function (event, toState, toParams, fromState, fromParams) {
        //Check if we are going on main page (url /) to determine if we display sidebar or not
        if (toState.url === '/') {
          $rootScope.displaySidebar = false;
          $rootScope.mainContainerClass = 'col-xs-12 main';
        }
        else {
          $rootScope.displaySidebar = true;
          $rootScope.mainContainerClass = 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main';

          if ((toState.name === 'documentation' || toState.name === 'documentationSubPage')
            && !documentationFactory.isAvailableDocPage(toParams.page, toParams.subpage)) {
              $state.go('home');
              event.preventDefault();
          }
        }
    });

  $rootScope.$on('$stateChangeSuccess',function(){    
    if($state.params.scrollTo){
      $location.hash($state.params.scrollTo);
      $anchorScroll();  
    }else{
      $window.scrollTo(0,0);
    }
  });
});


