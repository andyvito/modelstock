'use strict';

describe('Service: closeMonthService', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var closeMonthService;
  beforeEach(inject(function (_closeMonthService_) {
    closeMonthService = _closeMonthService_;
  }));

  it('should do something', function () {
    expect(!!closeMonthService).toBe(true);
  });

});
