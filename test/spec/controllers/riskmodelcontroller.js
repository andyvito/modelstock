'use strict';

describe('Controller: RiskmodelcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var RiskmodelcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RiskmodelcontrollerCtrl = $controller('RiskmodelcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RiskmodelcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
