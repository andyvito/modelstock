'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.ApiService
 * @description
 * # ApiService
 * Factory in the modelsstockApp.
 */
angular.module('modelsstockApp').
    factory('ApiService', function ($http, $q, $httpParamSerializerJQLike) {

        var makeAPICall = function(urlSuffix, method, data, params){
            var deferred = $q.defer();
            $http({
                method: method || 'GET',
                url: 'http://192.168.0.150:3000/' + urlSuffix, //TODO: put the url in app.config
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
            getAllDistinctTypes: function(){
                return makeAPICall('api/v1/type_distinct', 'GET', {}, {}); 
            },
            getAllDistinctKinds: function(){
                return makeAPICall('api/v1/kind_distinct', 'GET', {}, {}); 
            },
            getAllDistinctLens: function(){
                return makeAPICall('api/v1/len_distinct', 'GET', {}, {}); 
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

            getModelById: function(modelId){
                return makeAPICall('api/v1/model', 'GET', {}, {id:modelId});
            },
            updateModel: function(model){
                return makeAPICall('api/v1/model/'+model.id, 'PUT', {}, {code:model.code, name:model.name, description:model.description, len:model.len, cat:model.cat,
                                                                        kind:model.kind, comments:model.comments, more_info:model.more_info,
                                                                        curriculum:model.curriculum, file_doc:model.file_doc, active:model.active, is_qua:model.is_qua,
                                                                        version:model.version, initial_dates:model.initial_dates, original_author:model.original_author,
                                                                        final_dates:model.final_dates, final_author:model.final_author,risk_id:model.risk.id, 
                                                                        area_id:model.area.id});  

            },
            createModel: function(model){
                return makeAPICall('api/v1/model', 'POST', {code:model.code, name:model.name, description:model.description, len:model.len.display, cat:model.type.display,
                                                                        kind:model.kind.display, initial_dates:model.initial_dates, original_author:model.original_author,
                                                                        final_dates:model.final_dates, final_author:model.final_author, more_info:model.more_info,
                                                                        comments:model.comments, curriculum:model.curriculum, file_doc:model.file_doc, is_qua:model.is_qua,
                                                                        risk_id:model.risk.id, area_id:model.area.id},{});
            },
            saveBacktesting: function(backtesting){
                return makeAPICall('api/v1/backtest', 'POST', {}, {modelid:backtesting.modelid, result:backtesting.result, comments:backtesting.comments});  
            },
            updateFrecuency: function(model){
                return makeAPICall('api/v1/model_frecuency/'+model.id, 'PUT', {}, {year_backtesting:model.firstBacktesting.year, month_backtesting:model.firstBacktesting.month,
                                                                        frecuency:model.frecuency, met_validation:model.met_validation, met_hours_man:model.met_hours_man,
                                                                        qua_hours_man:model.qua_hours_man,comment:model.comment,cap_area:model.cap_area,cap_qua:model.cap_qua,
                                                                        cap_total:model.cap_total});   
            },
            cloneModel: function(model){
                return makeAPICall('api/v1/model_clone', 'POST', {modelid:model.id, new_code:model.newCode, new_name:model.newName}, {});   
            },
            loadCurrentDate: function(){
                return makeAPICall('api/v1/config', 'GET', {}, {'names[]':['current_year','current_month']});    
            },
            closeMonth: function(){
              return makeAPICall('api/v1/close_month', 'POST', {}, {});
            },
            getAllIndicators: function(){
                return makeAPICall('api/v1/indicators', 'GET', {}, {});
            },

        };
    });