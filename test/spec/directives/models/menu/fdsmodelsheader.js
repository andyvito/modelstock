'use strict';

describe('Directive: models/menu/fdsmodelsheader', function () {

  // load the directive's module
  beforeEach(module('modelsstockApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<models/menu/fdsmodelsheader></models/menu/fdsmodelsheader>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the models/menu/fdsmodelsheader directive');
  }));
});
