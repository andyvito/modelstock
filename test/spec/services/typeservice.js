'use strict';

describe('Service: typeService', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var typeService;
  beforeEach(inject(function (_typeService_) {
    typeService = _typeService_;
  }));

  it('should do something', function () {
    expect(!!typeService).toBe(true);
  });

});
