'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.data/kindsData
 * @description
 * # data/kindsData
 * Service in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .service('kindsData', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var factory = {
      kinds: null,
      getKinds: function () {
          return factory.kinds;
      },
      setKinds: function (kindsCol){
        ///factory.types = typesCol;
        factory.kinds = kindsCol.map( function (kind) {
          return {
            value: kind.toLowerCase(),
            display: kind
          }
        });
      },
    };

    // Public API here
    return factory;
  });
