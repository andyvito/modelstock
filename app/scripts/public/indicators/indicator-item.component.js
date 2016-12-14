(function(){
	'use strict';

	angular.module('public')
	.component('indicatorItem',{
		templateUrl: 'scripts/public/indicators/indicator-item.html',
		bindings:{
			indicator: '<'
		}
	});
})();