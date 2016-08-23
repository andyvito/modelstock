'use strict';

describe('Directive: showFocus', function () {

  // load the directive's module
  beforeEach(module('modelsstockApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<show-focus></show-focus>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the showFocus directive');
  }));
});
