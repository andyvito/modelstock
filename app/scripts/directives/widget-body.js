'use strict';

/**
 * Widget Body Directive
 */

angular
    .module('modelsstockApp')
    .directive('rdWidgetBody', rdWidgetBody);

function rdWidgetBody() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            loading: '@?',
            classes: '@?'
        },
        transclude: true,
        template: '<div class="header-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="header-content" ng-transclude></div></div>',
        restrict: 'E'
    };
    return directive;
};