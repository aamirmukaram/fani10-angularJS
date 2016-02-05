(function () {
  'use strict';

  angular
    .module('yoAngular')
    .controller('bridgeFormController', bridgeFormController);

  /** @ngInject */
  function bridgeFormController(formData) {
    var vm = this;

    var init = function () {
      var idolTime = moment("00:00:00", "HH:mm:ss");
      if (formData.data != undefined) {

        for (var t = 0; t < formData.data.length - 1; t++) {
          idolTime = moment("00:00:00", "HH:mm:ss");
          idolTime = ( moment.utc(moment(formData.data[t + 1].start_time, "HH:mm:ss").diff(moment(formData.data[t].end_time, "HH:mm:ss"))).format("HH:mm:ss"));

          formData.data[t].idolTime = idolTime;
        }
      }
      vm.formData = formData.data;
      vm.searchTerm = '';
    };


    init();
  }
})();
