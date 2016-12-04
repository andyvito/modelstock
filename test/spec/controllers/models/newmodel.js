'use strict';

describe('Controller: ModelsNewmodelCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var ModelsNewmodelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModelsNewmodelCtrl = $controller('ModelsNewmodelCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModelsNewmodelCtrl.awesomeThings.length).toBe(3);
  });
});
