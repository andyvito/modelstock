'use strict';

/**
 * @ngdoc directive
 * @name modelsstockApp.directive:model/menu/fdsModelHeader
 * @description
 * # model/menu/fdsModelHeader
 */
angular.module('modelsstockApp')
  .directive('fdsModelHeader', function () {
    return {
      templateUrl: 'views/model/menu/fdsmodelheader.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the model/menu/fdsModelHeader directive');
      },
      controller: function($scope,$rootScope){
      		$scope.editMode = false;


      	    $scope.clickEdit = function(){
			  $scope.editMode = true;
		      $rootScope.$broadcast('btnEditModelClickEvent');  
		    };

		    $scope.clickCancel = function(){
		    	$scope.editMode = false;
		    	$rootScope.$broadcast('btnCancelModelClickEvent');
		    };

		    $scope.clickSave = function(){
		    	$scope.editMode = false;
		    	$rootScope.$broadcast('btnSaveModelClickEvent');
		    };


		    $scope.openCloneModal = function($event, item) {
			  $scope.editMode = false;
		      $rootScope.$broadcast('btnCloneModelClickEvent');  
		    };
      }
    };


});
