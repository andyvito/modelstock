'use strict';

describe('Controller: ModelsClosemonthCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var ModelsClosemonthCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModelsClosemonthCtrl = $controller('ModelsClosemonthCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModelsClosemonthCtrl.awesomeThings.length).toBe(3);
  });
});
