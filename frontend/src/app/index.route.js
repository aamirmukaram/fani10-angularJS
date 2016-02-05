(function() {
  'use strict';

  angular
    .module('yoAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          formData : function(bridgeFormFactory) {
            return bridgeFormFactory.getFormData();
          }
        }
      })
      .state('form-data', {
        url: '/form-data',
        templateUrl: '/app/components/bridgeForm/bridgeFormTable.html',
        controller: 'bridgeFormController',
        controllerAs: 'bridgeFormCtrl',
        resolve: {
          formData : function(bridgeFormFactory) {
            return bridgeFormFactory.getFormData();
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
