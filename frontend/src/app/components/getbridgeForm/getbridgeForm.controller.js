(function () {
  'use strict';

  angular
    .module('yoAngular')
    .controller('getBridgeFormController', getBridgeFormController);

  /** @ngInject */
  function getBridgeFormController(formData,usSpinnerService) {
    var vm = this;

    var init = function () {
      var idolTime = moment("00:00:00", "HH:mm:ss");
      vm.searchTerm = '';
      vm.idolTimeSum = 0;
      vm.totalPanels = 0;
      vm.totalArea = 0;

      if (formData.data != undefined) {
        for (var t = 0; t < formData.data.length - 1; t++) {
          idolTime = null;
          idolTime = moment(formData.data[t + 1].date + " " + formData.data[t + 1].start_time, "YYYY-MM-DD HH:mm:ss").valueOf() - moment(formData.data[t].date + " " + formData.data[t].end_time, "YYYY-MM-DD HH:mm:ss").valueOf();

          vm.idolTimeSum = vm.idolTimeSum + idolTime;
          vm.totalArea = vm.totalArea + Number(formData.data[t + 1].area_1) + Number(formData.data[t + 1].area_2) + Number(formData.data[t + 1].area_3);
          if(formData.data[t + 1].panel_1.indexOf("F") > -1) {
            vm.totalPanels = vm.totalPanels + 1;
          }
          if(formData.data[t + 1].panel_2.indexOf("F") > -1) {
            vm.totalPanels = vm.totalPanels + 1;
          }
          if(formData.data[t + 1].panel_3.indexOf("F") > -1) {
            vm.totalPanels = vm.totalPanels + 1;
          }
          formData.data[t].idolTime = moment.utc(idolTime).format("HH:mm:ss");
        }

        //Adding last total area
        vm.totalArea = vm.totalArea + Number(formData.data[formData.data.length - 1].area_1) +
          Number(formData.data[formData.data.length - 1].area_2) +
          Number(formData.data[formData.data.length - 1].area_3);

        //Adding last total panels

        if(formData.data[formData.data.length - 1].panel_1.indexOf("F") > -1) {
          vm.totalPanels = vm.totalPanels + 1;
        }
        if(formData.data[formData.data.length - 1].panel_2.indexOf("F") > -1) {
          vm.totalPanels = vm.totalPanels + 1;
        }
        if(formData.data[formData.data.length - 1].panel_3.indexOf("F") > -1) {
          vm.totalPanels = vm.totalPanels + 1;
        }



        vm.idolTimeSum = moment.utc(vm.idolTimeSum).format("HH:mm:ss");
      }

      vm.formData = formData.data;

    };


    init();
  }
})();
