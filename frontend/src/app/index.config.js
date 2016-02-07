(function() {
  'use strict';

  angular
    .module('yoAngular')
    .config(config);

  /** @ngInject */
  function config(toastrConfig) {
    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = true;
    toastrConfig.autoDismiss = false;
    toastrConfig.newestOnTop = true;
    toastrConfig.maxOpened = 1;
    toastrConfig.preventOpenDuplicates = true;

  }

})();
