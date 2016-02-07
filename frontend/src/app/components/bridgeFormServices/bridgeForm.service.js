(function () {
  'use strict';

  angular
    .module('yoAngular')
    .factory('bridgeFormFactory', bridgeFormFactory);

  /** @ngInject */
  function bridgeFormFactory($http, $q, toastr,serverPath) {
    var url = serverPath + 'backend/';
    var formData = [];

    function getFormData() {
      var deferred = $q.defer();

      $http.get(url + 'getData.php')
        .then(getFormDataComplete)
        .catch(getFormDataFailed);

      function getFormDataComplete(response) {
        formData = response.data;
        deferred.resolve(response.data);
      }

      function getFormDataFailed() {
        toastr.error('Can\'t fetch form data.Please try again.', 'Error');
        deferred.reject();
      }

      return deferred.promise;
    }

    function postFormData(data) {
      var deferred = $q.defer();
      data = {'data':data};
      var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded'}};
      $http.post(url + 'postData.php', data, config)
        .then(postFormDataComplete)
        .catch(postFormDataFailed);

      function postFormDataComplete(response) {
        formData = response.data;
        deferred.resolve();
      }

      function postFormDataFailed() {
        toastr.error('Can\'t fetch form data.Please try again.', 'Error');
        deferred.reject();
      }

      return deferred.promise;

    }


    return {
      getFormData: getFormData,
      postFormData: postFormData
    };
  }
})();
