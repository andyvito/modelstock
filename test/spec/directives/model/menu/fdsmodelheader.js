'use strict';

describe('Directive: model/menu/fdsModelHeader', function () {

  // load the directive's module
  beforeEach(module('modelsstockApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<model/menu/fds-model-header></model/menu/fds-model-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the model/menu/fdsModelHeader directive');
  }));
});
