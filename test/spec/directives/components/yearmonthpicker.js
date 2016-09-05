'use strict';

describe('Directive: components/YearMonthPicker', function () {

  // load the directive's module
  beforeEach(module('modelsstockApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<components/-year-month-picker></components/-year-month-picker>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the components/YearMonthPicker directive');
  }));
});
