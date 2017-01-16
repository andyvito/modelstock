'use strict';

/**
 * @ngdoc service
 * @name modelsstockApp.data/lenData
 * @description
 * # data/lenData
 * Factory in the modelsstockApp.
 */
angular.module('modelsstockApp')
  .factory('lensData', function () {
    // Service logic
    // ...
    var factory = {
      lens: null,
      getLens: function () {
          return factory.lens;
      },
      setLens: function (lensCol){
        //factory.lens = lensCol;
        factory.lens = lensCol.map( function (len) {
          return {
            value: len.toLowerCase(),
            display: len
          }
        });
      }
    };

    // Public API here
    return factory;


  });
