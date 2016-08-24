'use strict';

describe('Service: kindService', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var kindService;
  beforeEach(inject(function (_kindService_) {
    kindService = _kindService_;
  }));

  it('should do something', function () {
    expect(!!kindService).toBe(true);
  });

});
