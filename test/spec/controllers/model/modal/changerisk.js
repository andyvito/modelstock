'use strict';

describe('Controller: ModelModalChangeriskCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var ModelModalChangeriskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModelModalChangeriskCtrl = $controller('ModelModalChangeriskCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModelModalChangeriskCtrl.awesomeThings.length).toBe(3);
  });
});
