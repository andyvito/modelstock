'use strict';

describe('Controller: AreaCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var AreaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AreaCtrl = $controller('AreaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AreaCtrl.awesomeThings.length).toBe(3);
  });
});
