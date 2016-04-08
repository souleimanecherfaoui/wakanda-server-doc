'use strict';

angular.module('wakanda-server-doc')
  .factory('documentationFactory', function () {

    function isAvailableDocPage(page, subpage) {
      var links = docPagesLinks();

      for (var i = 0; i < links.length; i++) {
        var pageInUrl = links[i].url.replace('#/doc/', '');

        if (pageInUrl === page && !subpage) {
          return true;
        }
        else if(pageInUrl === page && links[i].children) {
          for (var j = 0; j < links[i].children.length; j++) {
            if (links[i].children[j].page === subpage) {
              return true;
            }
          }
        }
      }

      return false;
    }

    function docPagesLinks() {
      //page property must equals to the part after #/doc/ or after #/doc/the_parent_page/
      return [
        {
          name: 'Overview',
          url: '#/doc/overview',
          page: 'overview',
          children: [
            {
              name: 'Bootstrap',
              url: '#/doc/overview/bootstrap',
              parentPage: 'overview',
              page: 'bootstrap'
            },
            {
              name: 'Modules',
              url: '#/doc/overview/modules',
              parentPage: 'overview',
              page: 'modules'
            },
            {
              name: 'Services',
              url: '#/doc/overview/services',
              parentPage: 'overview',
              page: 'services'
            }
          ]
        }
      ];
    }

    return {
      isAvailableDocPage: isAvailableDocPage,
      docPagesLinks: docPagesLinks
    };
  });
