(function(){
	'use strict';

	angular.module('public')
	.component('indicatorsHeader',{
		templateUrl: 'scripts/public/indicators/indicators-header.html',
		bindings:{
			indicators: '<'
		}
	});
})();