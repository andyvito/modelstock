'use strict';

describe('Controller: ModelsCardsBackgroundCtrl', function () {

  // load the controller's module
  beforeEach(module('modelsstockApp'));

  var ModelsCardsBackgroundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModelsCardsBackgroundCtrl = $controller('ModelsCardsBackgroundCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModelsCardsBackgroundCtrl.awesomeThings.length).toBe(3);
  });
});
