(function () {
  'use strict';

  angular
    .module('yoAngular')
    .directive('bridgeForm', bridgeForm);

  /** @ngInject */
  function bridgeForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/postBridgeForm/directives/bridgeForm.directive.html',
      scope: {
        'formsData': '='
      },
      controller: bridgeFormController,
      controllerAs: 'bridgeFormCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function bridgeFormController($interval,$scope) {
      var vm = this;

      var init = function () {
        vm.jigData = ["1", "2", "3"];
        vm.panels =
          ["F101", "F102", "F103","F104", "F105", "F106","F107", "F108", "F109","F110",
           "F201", "F202", "F203","F204", "F205", "F206","F207", "F208", "F209","F210",
           "F301", "F302", "F303","F304", "F305", "F306","F307", "F308", "F309","F310",
           "F401", "F402", "F403","F404", "F405", "F406","F407", "F408", "F409","F410",
           "F501", "F502", "F503","F504", "F505", "F506","F507", "F508", "F509","F510"
          ];
        vm.formData = {
          "jig": "1",
          "projectLot": null,
          "bridgeOperator": null,
          "startTime": moment(new Date()).format('h:mm:ss a'),
          "endTime": moment(new Date()).format('h:mm:ss a'),
          "panelValue_1": "F101",
          "area_1": 0,
          "panelValue_2": "F101",
          "area_2": 0,
          "panelValue_3": "F101",
          "area_3": 0

        };

        vm.startTimerOn = true;
        vm.endTimerOn = true;

        vm.startTimePromise = $interval(function () {
          var date = moment(new Date());
          vm.formData.startTime = date.format('h:mm:ss a');
        }, 1000);

        vm.endTimePromise = $interval(function () {
          var date = moment(new Date());
          vm.formData.endTime = date.format('h:mm:ss a');
        }, 1000);

      };

      vm.startTimerBtn = function () {
        vm.startTimerOn = $interval.cancel(vm.startTimePromise);
        vm.startTimerOn = false;
      };

      vm.endTimerBtn = function () {
        vm.endTimerOn = $interval.cancel(vm.endTimePromise);
        vm.endTimerOn = false;
      };

      $scope.$on('submit-form',function(){
        $scope.$emit('take-data',vm.formData);
      });


      init();

    }
  }

})();
