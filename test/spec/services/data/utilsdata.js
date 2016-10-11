'use strict';

describe('Service: data/utilsdata', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var data/utilsdata;
  beforeEach(inject(function (_data/utilsdata_) {
    data/utilsdata = _data/utilsdata_;
  }));

  it('should do something', function () {
    expect(!!data/utilsdata).toBe(true);
  });

});
