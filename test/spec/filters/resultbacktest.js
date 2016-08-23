'use strict';

describe('Filter: resultBacktest', function () {

  // load the filter's module
  beforeEach(module('modelsstockApp'));

  // initialize a new instance of the filter before each test
  var resultBacktest;
  beforeEach(inject(function ($filter) {
    resultBacktest = $filter('resultBacktest');
  }));

  it('should return the input prefixed with "resultBacktest filter:"', function () {
    var text = 'angularjs';
    expect(resultBacktest(text)).toBe('resultBacktest filter: ' + text);
  });

});
