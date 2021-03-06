(function() {
  'use strict';

  angular
    .module('boilerplate')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        globalStyle: 'clear-nav'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/modules/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about',
        metaTags: {
          title: 'About Us'
        }
      })
      .state('mission', {
        url: '/our-mission',
        templateUrl: 'app/modules/mission/mission.html',
        controller: 'MissionController',
        controllerAs: 'mission',
        metaTags: {
          title: 'Our Mission'
        }
      })
      .state('contact', {
        url: '/contact-us',
        templateUrl: 'app/modules/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact',
        metaTags: {
          title: 'Contact Us'
        }
      })
      .state('clinic', {
        url: '/get-repairs',
        templateUrl: 'app/modules/clinic/clinic.html',
        controller: 'ClinicController',
        controllerAs: 'clinic',
        resolve: {
          /* @ngInject */
          metaTags: function(contentful) { return contentful.entries('sys.id=4NuCfazi64eCSG0mYEIe6u'); }
        },
        metaTags: {
          /* @ngInject */
          title: function(metaTags) { return metaTags.data.items[0].fields.title; },
          properties: {
            /* @ngInject */
            'og:title': function(metaTags) { return metaTags.data.items[0].fields.title; },
            /* @ngInject */
            'twitter:title': function(metaTags) { return metaTags.data.items[0].fields.title; },
            /* @ngInject */
            'og:description': function(metaTags) { return metaTags.data.items[0].fields.description; },
            /* @ngInject */
            'twitter:description': function(metaTags) { return metaTags.data.items[0].fields.description; },
            /* @ngInject */
            'og:image': function(metaTags) { return 'http:' + metaTags.data.items[0].fields.shareImage.fields.file.url; },
            /* @ngInject */
            'twitter:image': function(metaTags) { return 'http:' + metaTags.data.items[0].fields.shareImage.fields.file.url; }
          }
        }
      });

    $urlRouterProvider.otherwise('/');

  }

})();
