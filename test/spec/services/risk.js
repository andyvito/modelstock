'use strict';

describe('Service: risk', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var risk;
  beforeEach(inject(function (_risk_) {
    risk = _risk_;
  }));

  it('should do something', function () {
    expect(!!risk).toBe(true);
  });

});
