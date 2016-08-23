'use strict';

describe('Service: data/areasData', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var data/areasData;
  beforeEach(inject(function (_data/areasData_) {
    data/areasData = _data/areasData_;
  }));

  it('should do something', function () {
    expect(!!data/areasData).toBe(true);
  });

});
