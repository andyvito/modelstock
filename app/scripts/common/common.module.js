(function(){
	"use strict";

	angular.module('common',[])
	.constant('ApiPath', 'http://192.168.1.150:3000')
	.config(config);

	config.$inject = ['$httpProvider'];
	function config($httpProvider){
		$httpProvider.interceptors.push('loadingHttpInterceptor'); 
	};
})();