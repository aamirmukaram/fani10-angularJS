(function() {
  'use strict';

  angular
    .module('yoAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('postForm', {
        url: '/post-form',
        templateUrl: 'app/components/postBridgeForm/postBridgeForm.html',
        controller: 'postBridgeFormController',
        controllerAs: 'postBridgeFormCtrl',
        resolve: {
          formData : function(bridgeFormFactory) {
            return bridgeFormFactory.getFormData();
          }
        }
      })
      .state('getForm', {
        url: '/get-form',
        templateUrl:'app/components/getBridgeForm/getBridgeForm.html',
        controller: 'getBridgeFormController',
        controllerAs: 'getBridgeFormCtrl',
        resolve: {
          formData : function(bridgeFormFactory) {
            return bridgeFormFactory.getFormData();
          }
        }
      });

    $urlRouterProvider.otherwise('/post-form');
  }

})();
