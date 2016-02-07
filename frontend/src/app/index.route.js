(function () {
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
        controllerAs: 'postBridgeFormCtrl'
      })
      .state('getForm', {
        url: '/get-form',
        templateUrl: 'app/components/getBridgeForm/getBridgeForm.html',
        controller: 'getBridgeFormController',
        controllerAs: 'getBridgeFormCtrl',
        resolve: {
          formData: function (bridgeFormFactory, usSpinnerService) {
            usSpinnerService.spin('spinner-main');
            return bridgeFormFactory.getFormData().then(function(){
              usSpinnerService.stop('spinner-main');
              return bridgeFormFactory.getFormData();
            });
          }
        }
      });

    $urlRouterProvider.otherwise('/post-form');
  }

})();
