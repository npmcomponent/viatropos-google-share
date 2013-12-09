var googleShare = 'undefined' == typeof window
  ? require('..')
  : require('google-share'); // how to do this better?

var assert = require('assert');

describe('googleShare', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
