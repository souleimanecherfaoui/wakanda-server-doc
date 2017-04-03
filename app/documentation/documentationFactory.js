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
              name: 'Solution',
              url: '#/doc/overview/solution',
              parentPage: 'overview',
              page: 'solution'
            },
            {
              name: 'Project',
              url: '#/doc/overview/project',
              parentPage: 'overview',
              page: 'project'
            },
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
        },
        {
          name: 'Data Integration',
          url: '#/doc/data',
          page: 'data',
          children : [
            {
              name: 'Basics',
              url: '#/doc/data/basics',
              parentPage: 'data',
              page: 'basics'
            },
            {
              name: 'Client side',
              url: '#/doc/data/client-side',
              parentPage: 'data',
              page: 'client-side'
            },
            {
              name: 'Server Side',
              url: '#/doc/data/server-side',
              parentPage: 'data',
              page: 'server-side'
            },
            {
              name: 'Security',
              url: '#/doc/data/security',
              parentPage: 'data',
              page: 'security'
            },
            {
              name: 'Adding external data sources',
              url: '#/doc/data/adding-data-sources',
              parentPage: 'data',
              page: 'adding-data-sources'
            }
          ]
        },
        {
          name: 'Authentication',
          url: '#/doc/authentication',
          page: 'authentication',
          children: [
            {
              name: 'Default Mechanism',
              url: '#/doc/authentication/default',
              parentPage: 'authentication',
              page: 'default'
            },
            {
              name: 'Custom Authentication',
              url: '#/doc/authentication/custom',
              parentPage: 'authentication',
              page: 'custom'
            },
            {
              name: 'Custom Session Management',
              url: '#/doc/authentication/custom-session-management',
              parentPage: 'authentication',
              page: 'custom-session-management'
            }
          ]
        },
         {
          name: 'HTTP',
          url: '#/doc/http',
          page: 'http'
        },
        {
          name: 'Miscellaneous',
          url: '#/doc/miscellaneous',
          page: 'miscellaneous'
        },
        {
          name: 'User Space',
          url: '#/doc/userSpace',
          page: 'userSpace',
          children: [
            {
              name: 'Account Management',
              url: '#/doc/userSpace/accountManagement',
              parentPage: 'userSpace',
              page: 'accountManagement',
              children : [
                {
                  name: 'Profile',
                  url: '#/doc/userSpace/accountManagement/profile',
                  parentPage: 'accountManagement',
                  page: 'profile'
                },
                {
                  name: 'Change Password',
                  url: '#/doc/userSpace/accountManagement/changePassword',
                  parentPage: 'accountManagement',
                  page: 'changePassword'
                },  
                {
                  name: 'Billing',
                  url: '#/doc/userSpace/accountManagement/billing',
                  parentPage: 'accountManagement',
                  page: 'billing'
                },
                {
                  name: 'Tickets',
                  url: '#/doc/userSpace/accountManagement/ticket',
                  parentPage: 'accountManagement',
                  page: 'ticket'
                }                                            
              ]
            },

            {
              name: 'Cloud Application',
              url: '#/doc/userSpace/cloudApplication',
              parentPage: 'userSpace',
              page: 'cloudApplication',
              children:[
                {
                  name: 'Wakanda',
                  url: '#/doc/userSpace/cloudApplication/cloud-wakanda',
                  parentPage: 'cloudApplication',
                  page: 'cloud-wakanda'
                },
                {
                  name: 'RDS',
                  url: '#/doc/userSpace/cloudApplication/cloud-rds',
                  parentPage: 'userSpace',
                  page: 'cloud-rds'
                }
              ]
            },
            {
              name: 'On Premise Application',
              url: '#/doc/userSpace/on-premise-application',
              parentPage: 'userSpace',
              page: 'on-premise-application'
            },
            {
              name: 'Download',
              url: '#/doc/userSpace/download',
              parentPage: 'userSpace',
              page: 'download'
            },
            {
              name: 'Support',
              url: '#/doc/userSpace/support',
              parentPage: 'userSpace',
              page: 'support'
            }
          ]
        },
        {
          name: 'Deployment',
          url: '#/doc/deployment',
          page: 'deployment',
          children: [
            {
              name: 'Cloud Deployment',
              url: '#/doc/deployment/cloud-deployment',
              parentPage: 'deployment',
              page: 'cloud-deployment'
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
