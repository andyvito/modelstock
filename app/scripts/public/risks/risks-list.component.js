(function(){
	'use strict';

	angular.module('public')
	.component('risksList',{
		templateUrl: 'scripts/public/risks/risks-list.html',
		bindings:{
			risks: '<'
		}
	});
})();