(function () {
  'use strict';

  angular
    .module('yoAngular')
    .controller('postBridgeFormController', postBridgeFormController);

  /** @ngInject */
  function postBridgeFormController($scope,bridgeFormFactory,toastr,$state) {
    var vm = this;
    var init = function () {
      vm.formData = {
        'inputDate':  new Date(),
        'inputPage': null,
        'inputShift': null,
        'formsData': {}
      }
    };
    vm.submitData = function () {
      $scope.$broadcast('submit-form');
    };

    $scope.$on('take-data',function(event, formData){
      var requestData = angular.copy(vm.formData);
      requestData.formsData = formData;
      requestData.inputDate = moment(requestData.inputDate).format('YYYY-MM-DD');
      bridgeFormFactory.postFormData(requestData).then(function(){
        toastr.success('Your data has been saved', 'Success');
      });
    });

    vm.getReportBtn = function () {
      $state.go('getForm');

    };


    init();
  }
})();
