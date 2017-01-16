'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.data/typeData
 * @description
 * # data/typeData
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('typesData', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var factory = {
      types: null,
      getTypes: function () {
          return factory.types;
      },
      setTypes: function (typesCol){
        ///factory.types = typesCol;
        factory.types = typesCol.map( function (type) {
          return {
            value: type.toLowerCase(),
            display: type
          }
        });
      },
    };

    // Public API here
    return factory;


  });
