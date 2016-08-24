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
      controller: function($scope,$rootScope,$uibModal){
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
		        if ($event.stopPropagation) $event.stopPropagation();
		        if ($event.preventDefault) $event.preventDefault();
		        var modalInstance = $uibModal.open({
		          animation: true,
		          controller: 'ModelModalCloneCtrl',
		          templateUrl: 'views/model/modal/clone.html',
		          resolve: {
		            
		          }
		    })};
      }
    };


});
