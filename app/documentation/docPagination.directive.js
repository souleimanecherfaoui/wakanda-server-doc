angular.module('wakanda-server-doc')
  .directive('docPagination', function (documentationFactory) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'documentation/docPagination.html',
      link: function (scope, element, attributes) {

        var links = documentationFactory.docPagesLinks();
        var currentPage = attributes.page;
        var currentSubPage = attributes.subpage;

        for (var i = 0; i < links.length; i++) {
          var currentLink = links[i];

          if (currentLink.page === currentPage) {
            if (hasChildren(currentLink)) {
              if (currentSubPage) {
                for (var j = 0; j < currentLink.children.length; j++) {
                  var currentSubLink = currentLink.children[j];

                  if (currentSubLink.page === currentSubPage) {
                    //Next link
                    if (j < currentLink.children.length - 1) {
                      scope.isNextLink = true;
                      scope.nextLink = currentLink.children[j + 1];
                    }
                    else {
                      scope.isNextLink = i < links.length - 1;
                      scope.nextLink = scope.isNextLink ? links[i + 1] : null;
                    }

                    //Prev link
                    if (j > 0) {
                      scope.isPrevLink = true;
                      scope.prevLink = currentLink.children[j - 1];
                    }
                    else {
                      scope.isPrevLink = true;
                      scope.prevLink = currentLink; //currentLink is parent of currentSubLink
                    }
                    return;
                  }
                }
              }
              else {
                //Next link
                scope.isNextLink = true;
                scope.nextLink = currentLink.children[0];

                //Prev link
                scope.isPrevLink = i > 0;
                if (scope.isPrevLink) {
                  var prevLink = links[i - 1];
                  scope.prevLink = hasChildren(prevLink) ? prevLink.children[prevLink.children.length - 1] : prevLink;
                }
              }
            }
            else {
              //Next link
              scope.isNextLink = i < links.length - 1;
              scope.nextLink = scope.isNextLink ? links[i + 1] : null;

              //Prev link
              scope.isPrevLink = i > 0;
              if (scope.isPrevLink) {
                var prevLink = links[i - 1];
                scope.prevLink = hasChildren(prevLink) ? prevLink.children[prevLink.children.length - 1] : prevLink;
              }
            }

            return;
          }
        }

        function hasChildren(link) {
          return link.children && link.children.length > 0;
        }
      }
    };
  });
