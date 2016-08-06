'use strict';

describe('Filter: toMonthName', function () {

  // load the filter's module
  beforeEach(module('modelsstockApp'));

  // initialize a new instance of the filter before each test
  var toMonthName;
  beforeEach(inject(function ($filter) {
    toMonthName = $filter('toMonthName');
  }));

  it('should return the input prefixed with "toMonthName filter:"', function () {
    var text = 'angularjs';
    expect(toMonthName(text)).toBe('toMonthName filter: ' + text);
  });

});
