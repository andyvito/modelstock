'use strict';

describe('Filter: toMonth', function () {

  // load the filter's module
  beforeEach(module('modelsstockApp'));

  // initialize a new instance of the filter before each test
  var toMonth;
  beforeEach(inject(function ($filter) {
    toMonth = $filter('toMonth');
  }));

  it('should return the input prefixed with "toMonth filter:"', function () {
    var text = 'angularjs';
    expect(toMonth(text)).toBe('toMonth filter: ' + text);
  });

});
