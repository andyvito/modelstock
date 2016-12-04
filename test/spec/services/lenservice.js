'use strict';

describe('Service: lenService', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var lenService;
  beforeEach(inject(function (_lenService_) {
    lenService = _lenService_;
  }));

  it('should do something', function () {
    expect(!!lenService).toBe(true);
  });

});
