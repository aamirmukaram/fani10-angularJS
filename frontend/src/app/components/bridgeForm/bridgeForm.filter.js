(function () {
  'use strict';

  angular
    .module('yoAngular')
    .filter('fromToFilter', fromToFilter);

  /** @ngInject */
  function fromToFilter() {
    return function (rows, from, to) {
      if(from  == undefined || to == undefined) {
        return rows;
      }
      var output = [];
      rows.forEach(function(row){
        from = moment(from).valueOf();
        to = moment(to).valueOf();
        var rowDate =  moment(row.date).valueOf();
        if(rowDate <= to && rowDate>=from) {
          output.push(row);
        }
      });
      return output;

    }

  }


})();
