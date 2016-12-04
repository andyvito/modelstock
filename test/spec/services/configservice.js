'use strict';

describe('Service: configservice', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var configservice;
  beforeEach(inject(function (_configservice_) {
    configservice = _configservice_;
  }));

  it('should do something', function () {
    expect(!!configservice).toBe(true);
  });

});
