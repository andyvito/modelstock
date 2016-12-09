(function(){
	"use strict";

	angular.module('public')
	.component('modelsItem', {
		templateUrl: 'scripts/public/models-item/models-item.html',
		bindings:{
			model: '<'
		}
	});

})();