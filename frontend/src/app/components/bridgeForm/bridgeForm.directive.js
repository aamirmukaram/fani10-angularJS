(function() {
  'use strict';

  angular
    .module('yoAngular')
    .directive('bridgeForm', bridgeForm);

  /** @ngInject */
  function bridgeForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/bridgeForm/bridgeForm.html',
      scope: {},
      controller: bridgeFormController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function bridgeFormController() {
      var vm = this;

    }
  }

})();
