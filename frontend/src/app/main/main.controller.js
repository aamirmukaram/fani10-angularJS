(function () {
  'use strict';

  angular
    .module('yoAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,bridgeFormFactory,toastr) {
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


    init();
  }
})();
