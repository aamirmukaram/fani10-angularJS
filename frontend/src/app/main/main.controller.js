(function () {
  'use strict';

  angular
    .module('yoAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,bridgeFormFactory,toastr,$templateCache,$state) {
    var vm = this;
    var init = function () {
      vm.formData = {
        'inputDate':  new Date(),
        'inputPage': null,
        'inputShift': null,
        'formsData': {}
      }
    };

    console.log('app/main/main.html',$templateCache.get('app/main/main.html'));
    console.log('app/components/bridgeForm/bridgeFormTable.html',$templateCache.get('app/components/bridgeForm/bridgeFormTable.html'));
    console.log('app/components/bridgeForm/directive/bridgeForm.html',$templateCache.get('app/components/bridgeForm/directive/bridgeForm.html'));
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
      console.log('app/main/main.html',$templateCache.get('app/main/main.html'));
      console.log('app/components/bridgeForm/bridgeFormTable.html',$templateCache.get('app/components/bridgeForm/bridgeFormTable.html'));
      console.log('app/components/bridgeForm/directive/bridgeForm.html',$templateCache.get('app/components/bridgeForm/directive/bridgeForm.html'));
      $state.go('form');

    };


    init();
  }
})();
