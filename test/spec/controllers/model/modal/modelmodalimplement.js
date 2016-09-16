'use strict';

describe('Controller: ModelModalModelmodalimplementctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var ModelModalModelmodalimplementctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModelModalModelmodalimplementctrlCtrl = $controller('ModelModalModelmodalimplementctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModelModalModelmodalimplementctrlCtrl.awesomeThings.length).toBe(3);
  });
});
