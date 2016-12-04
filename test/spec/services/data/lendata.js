'use strict';

describe('Service: data/lenData', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var data/lenData;
  beforeEach(inject(function (_data/lenData_) {
    data/lenData = _data/lenData_;
  }));

  it('should do something', function () {
    expect(!!data/lenData).toBe(true);
  });

});
