'use strict';

describe('Controller: ModelModelChangeriskCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var ModelModelChangeriskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModelModelChangeriskCtrl = $controller('ModelModelChangeriskCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModelModelChangeriskCtrl.awesomeThings.length).toBe(3);
  });
});
