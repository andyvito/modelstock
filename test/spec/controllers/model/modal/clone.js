'use strict';

describe('Controller: ModelModalCloneCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var ModelModalCloneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModelModalCloneCtrl = $controller('ModelModalCloneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModelModalCloneCtrl.awesomeThings.length).toBe(3);
  });
});
