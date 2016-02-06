(function() {
  'use strict';

  angular
    .module('yoAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          formData : function(bridgeFormFactory) {
            return bridgeFormFactory.getFormData();
          }
        }
      })
      .state('form', {
        url: '/form',
        template: '<div class="container-flex bridge-form-table"><div class="page-header row"><div class="col-xs-12"><h1>Bridge Form Data</h1></div><div class="col-xs-1 col-xs-offset-1"><button ui-sref="home" type="button" class="btn btn-default btn-block">Back</button></div></div><div class="row search-area"><div class="col-xs-3 col-xs-offset-1"><div class="form-group multiple-search"><label for="multiple-search">Search Term</label> <input type="text" class="form-control" ng-model="bridgeFormCtrl.searchTerm" placeholder="Find data" id="multiple-search"></div></div><div class="col-xs-3 col-xs-offset-1 from-to"><div class="form-group"><label for="date-search-from">From Date</label> <input type="date" class="form-control" ng-model="bridgeFormCtrl.searchFrom" placeholder="From Date" id="date-search-from"></div></div><div class="col-xs-3 from-to"><div class="form-group"><label for="date-search-to">To Date</label> <input type="date" class="form-control" ng-model="bridgeFormCtrl.searchTo" placeholder="To Date" id="date-search-to"></div></div></div><div><table class="table table-striped"><thead><tr><th>id</th><th>jig</th><th>project_lot</th><th>panel_1</th><th>area_1</th><th>panel_2</th><th>area_2</th><th>panel_3</th><th>area_3</th><th>birdgeOperator</th><th>start_time</th><th>end_time</th><th>date</th><th>pageNum</th><th>shift</th><th>machine idol time</th></tr></thead><tbody><tr class="animate-repeat" ng-repeat="data in bridgeFormCtrl.formData | fromToFilter:bridgeFormCtrl.searchFrom:bridgeFormCtrl.searchTo | filter:bridgeFormCtrl.searchTerm"><td>{{data.id}}</td><td>{{data.jig}}</td><td>{{data.project_lot}}</td><td>{{data.panel_1}}</td><td>{{data.area_1}}</td><td>{{data.panel_2}}</td><td>{{data.area_2}}</td><td>{{data.panel_3}}</td><td>{{data.area_3}}</td><td>{{data.birdgeOperator}}</td><td>{{data.start_time}}</td><td>{{data.end_time}}</td><td>{{data.date}}</td><td>{{data.pageNum}}</td><td>{{data.shift}}</td><td>{{data.idolTime}}</td></tr></tbody></table></div></div>',
        controller: 'bridgeFormController',
        controllerAs: 'bridgeFormCtrl',
        resolve: {
          formData : function(bridgeFormFactory) {
            return bridgeFormFactory.getFormData();
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
