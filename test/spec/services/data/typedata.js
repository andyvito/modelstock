'use strict';

describe('Service: data/typeData', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var data/typeData;
  beforeEach(inject(function (_data/typeData_) {
    data/typeData = _data/typeData_;
  }));

  it('should do something', function () {
    expect(!!data/typeData).toBe(true);
  });

});
