'use strict';

describe('Service: /data/models', function () {

  // load the service's module
  beforeEach(module('modelsstockApp'));

  // instantiate service
  var /data/models;
  beforeEach(inject(function (_/data/models_) {
    /data/models = _/data/models_;
  }));

  it('should do something', function () {
    expect(!!/data/models).toBe(true);
  });

});
