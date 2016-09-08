'use strict';

describe('Service: data/kindsData', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var data/kindsData;
  beforeEach(inject(function (_data/kindsData_) {
    data/kindsData = _data/kindsData_;
  }));

  it('should do something', function () {
    expect(!!data/kindsData).toBe(true);
  });

});
