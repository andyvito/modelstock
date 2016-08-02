'use strict';

describe('Service: data/riskData', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var data/riskData;
  beforeEach(inject(function (_data/riskData_) {
    data/riskData = _data/riskData_;
  }));

  it('should do something', function () {
    expect(!!data/riskData).toBe(true);
  });

});
