(function () {
  'use strict';

  angular
    .module('yoAngular')
    .controller('getBridgeFormController', getBridgeFormController);

  /** @ngInject */
  function getBridgeFormController(formData) {
    var vm = this;

    var init = function () {
      var idolTime = moment("00:00:00", "HH:mm:ss");
      if (formData.data != undefined) {
        for (var t = 0; t < formData.data.length - 1; t++) {
          idolTime = null;
          idolTime = moment(formData.data[t + 1].date +" "+formData.data[t + 1].start_time, "YYYY-MM-DD HH:mm:ss").valueOf() - moment(formData.data[t].date +" "+formData.data[t].end_time, "YYYY-MM-DD HH:mm:ss").valueOf();
          formData.data[t].idolTime = moment.utc(idolTime).format("HH:mm:ss");
        }
      }
      vm.formData = formData.data;
      vm.searchTerm = '';
    };


    init();
  }
})();
