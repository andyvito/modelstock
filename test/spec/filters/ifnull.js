'use strict';

describe('Filter: ifNull', function () {

  // load the filter's module
  beforeEach(module('modelsstockApp'));

  // initialize a new instance of the filter before each test
  var ifNull;
  beforeEach(inject(function ($filter) {
    ifNull = $filter('ifNull');
  }));

  it('should return the input prefixed with "ifNull filter:"', function () {
    var text = 'angularjs';
    expect(ifNull(text)).toBe('ifNull filter: ' + text);
  });

});
