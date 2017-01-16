'use strict';

/**
 * Widget Header Directive
 */

angular
    .module('modelsstockApp')
    .directive('rdWidgetHeader', rdWidgetTitle);

function rdWidgetTitle() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            title: '@',
            icon: '@'
        },
        transclude: true,
        template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="col-xs-12" ng-transclude></div></div></div>',
        restrict: 'E'
    };
    return directive;
};