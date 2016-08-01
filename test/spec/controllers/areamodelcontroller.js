'use strict';

describe('Controller: AreamodelcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var AreamodelcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AreamodelcontrollerCtrl = $controller('AreamodelcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AreamodelcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
