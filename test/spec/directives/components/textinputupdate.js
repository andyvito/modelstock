'use strict';

describe('Directive: components/textInputUpdate', function () {

  // load the directive's module
  beforeEach(module('modelsstockApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<components/text-input-update></components/text-input-update>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the components/textInputUpdate directive');
  }));
});
