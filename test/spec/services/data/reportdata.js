'use strict';

describe('Service: data/reportData', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var data/reportData;
  beforeEach(inject(function (_data/reportData_) {
    data/reportData = _data/reportData_;
  }));

  it('should do something', function () {
    expect(!!data/reportData).toBe(true);
  });

});
