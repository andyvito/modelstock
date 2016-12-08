'use strict';

describe('Controller: ModelsAreadialogCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var ModelsAreadialogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModelsAreadialogCtrl = $controller('ModelsAreadialogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModelsAreadialogCtrl.awesomeThings.length).toBe(3);
  });
});