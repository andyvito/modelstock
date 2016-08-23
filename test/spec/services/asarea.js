'use strict';

describe('Service: asArea', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var asArea;
  beforeEach(inject(function (_asArea_) {
    asArea = _asArea_;
  }));

  it('should do something', function () {
    expect(!!asArea).toBe(true);
  });

});
