'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.ApiService
 * @description
 * # ApiService
 * Factory in the modelsstockApp.
 */
angular.module('modelsstockApp').
    factory('ApiService', function ($http, $q) {

        var makeAPICall = function(urlSuffix, method, data, params){
            var deferred = $q.defer();
            $http({
                method: method || 'GET',
                url: 'http://192.168.33.10:3000/' + urlSuffix, //TODO: put the url in app.config
                data: data || {},
                timeout: 120000,
                params: params,
                headers: {'Content-Type': 'application/json'}
            }).success(function(data){
                deferred.resolve(data);
            }).error(function (error_data, error_code){
                if(error_code === 400){
                    deferred.reject(error_data);
                }
                else{
                    deferred.reject('Unable to communicate with the web service');
                }
            });
            return deferred.promise;
        };

        return {
            getAllTypes: function(){
                return makeAPICall('api/v1/type_model_data', 'GET', {}, {}); 
            },
            getAllRisks: function(){
                return makeAPICall('api/v1/risk_model_data', 'GET', {}, {});   
            },
            saveNewRisk: function(newRisk){
                return makeAPICall('api/v1/risk_model_data', 'POST', {name:newRisk.name}, {});     
            },
            deleteRisk: function(id){
                return makeAPICall('api/v1/risk_model_data/'+id, 'DELETE', {}, {});   
            },
            updateRisk: function(updateRisk){
                return makeAPICall('api/v1/risk_model_data/'+updateRisk.id, 'PUT', {}, {name:updateRisk.name});     
            },
            getAllAreasByRisks: function(id){
                return makeAPICall('api/v1/areasByRisk', 'GET', {}, {riskid:id});   
            },
            saveNewArea: function(newArea){
                return makeAPICall('api/v1/areasByRisk', 'POST', {riskid:newArea.riskid, name:newArea.name,lead:newArea.lead}, {});   
            },
            deleteAreaByRisk: function(riskid,areaid){
                return makeAPICall('api/v1/areasByRisk/'+riskid, 'DELETE', {}, {areaid:areaid});   
            },
            updateAreaByRisk: function(updateArea){
                return makeAPICall('api/v1/areasByRisk/'+updateArea.riskid, 'PUT', {}, {areaid:updateArea.id, name:updateArea.name, lead:updateArea.lead});   
            },
            /*getAllModelsByRisks: function(id){
                return makeAPICall('api/v1/modelsByRisk', 'GET', {}, {riskid:id});     
            },*/
            getAllModels: function(){
                return makeAPICall('api/v1/models_data', 'GET', {}, {});     
            },

            

        };
    })
;
