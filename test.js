var isa = require('./isa');
var assert = require('assert');

describe('isa', function() {
  describe('number', function() {
    it('should return true if given input is a number', function() {
      assert.strictEqual(true, isa.number(5));
      assert.strictEqual(false, isa.number(''));
      assert.strictEqual(false, isa.number(false));
      assert.strictEqual(false, isa.number(null));
      assert.strictEqual(false, isa.number(undefined));
      assert.strictEqual(false, isa.number([]));
      assert.strictEqual(false, isa.number({}));
      assert.strictEqual(false, isa.number(function() {}));
      assert.strictEqual(false, isa.number(NaN));
      assert.strictEqual(false, isa.number(new Date()));
      assert.strictEqual(false, isa.number(/a/i));
    });
  });

  describe('string', function() {
    it('should return true if given input is a string', function() {
      assert.strictEqual(false, isa.string(5));
      assert.strictEqual(true, isa.string(''));
      assert.strictEqual(false, isa.string(false));
      assert.strictEqual(false, isa.string(null));
      assert.strictEqual(false, isa.string(undefined));
      assert.strictEqual(false, isa.string([]));
      assert.strictEqual(false, isa.string({}));
      assert.strictEqual(false, isa.string(function() {}));
      assert.strictEqual(false, isa.string(NaN));
      assert.strictEqual(false, isa.string(new Date()));
      assert.strictEqual(false, isa.string(/a/i));
    });
  });

  describe('boolean', function() {
    it('should return true if given input is a boolean', function() {
      assert.strictEqual(false, isa.boolean(5));
      assert.strictEqual(false, isa.boolean(''));
      assert.strictEqual(true, isa.boolean(false));
      assert.strictEqual(false, isa.boolean(null));
      assert.strictEqual(false, isa.boolean(undefined));
      assert.strictEqual(false, isa.boolean([]));
      assert.strictEqual(false, isa.boolean({}));
      assert.strictEqual(false, isa.boolean(function() {}));
      assert.strictEqual(false, isa.boolean(NaN));
      assert.strictEqual(false, isa.boolean(new Date()));
      assert.strictEqual(false, isa.boolean(/a/i));
    });
  });

  describe('null', function() {
    it('should return true if given input is a null', function() {
      assert.strictEqual(false, isa.null(5));
      assert.strictEqual(false, isa.null(''));
      assert.strictEqual(false, isa.null(false));
      assert.strictEqual(true, isa.null(null));
      assert.strictEqual(false, isa.null(undefined));
      assert.strictEqual(false, isa.null([]));
      assert.strictEqual(false, isa.null({}));
      assert.strictEqual(false, isa.null(function() {}));
      assert.strictEqual(false, isa.null(NaN));
      assert.strictEqual(false, isa.null(new Date()));
      assert.strictEqual(false, isa.null(/a/i));
    });
  });

  describe('undefined', function() {
    it('should return true if given input is a undefined', function() {
      assert.strictEqual(false, isa.undefined(5));
      assert.strictEqual(false, isa.undefined(''));
      assert.strictEqual(false, isa.undefined(false));
      assert.strictEqual(false, isa.undefined(null));
      assert.strictEqual(true, isa.undefined(undefined));
      assert.strictEqual(false, isa.undefined([]));
      assert.strictEqual(false, isa.undefined({}));
      assert.strictEqual(false, isa.undefined(function() {}));
      assert.strictEqual(false, isa.undefined(NaN));
      assert.strictEqual(false, isa.undefined(new Date()));
      assert.strictEqual(false, isa.undefined(/a/i));
    });
  });

  describe('array', function() {
    it('should return true if given input is a array', function() {
      assert.strictEqual(false, isa.array(5));
      assert.strictEqual(false, isa.array(''));
      assert.strictEqual(false, isa.array(false));
      assert.strictEqual(false, isa.array(null));
      assert.strictEqual(false, isa.array(undefined));
      assert.strictEqual(true, isa.array([]));
      assert.strictEqual(false, isa.array({}));
      assert.strictEqual(false, isa.array(function() {}));
      assert.strictEqual(false, isa.array(NaN));
      assert.strictEqual(false, isa.array(new Date()));
      assert.strictEqual(false, isa.array(/a/i));
    });
  });

  describe('function', function() {
    it('should return true if given input is a function', function() {
      assert.strictEqual(false, isa.function(5));
      assert.strictEqual(false, isa.function(''));
      assert.strictEqual(false, isa.function(false));
      assert.strictEqual(false, isa.function(null));
      assert.strictEqual(false, isa.function(undefined));
      assert.strictEqual(false, isa.function([]));
      assert.strictEqual(false, isa.function({}));
      assert.strictEqual(true, isa.function(function() {}));
      assert.strictEqual(false, isa.function(NaN));
      assert.strictEqual(false, isa.function(new Date()));
      assert.strictEqual(false, isa.function(/a/i));
    });
  });

  describe('nan', function() {
    it('should return true if given input is not a number (NaN)', function() {
      assert.strictEqual(false, isa.nan(5));
      assert.strictEqual(true, isa.nan(''));
      assert.strictEqual(true, isa.nan(false));
      assert.strictEqual(true, isa.nan(null));
      assert.strictEqual(true, isa.nan(undefined));
      assert.strictEqual(true, isa.nan([]));
      assert.strictEqual(true, isa.nan({}));
      assert.strictEqual(true, isa.nan(function() {}));
      assert.strictEqual(true, isa.nan(NaN));
      assert.strictEqual(true, isa.nan(new Date()));
      assert.strictEqual(true, isa.nan(/a/i));
    });
  });

  describe('object', function() {
    it('should return true if given input is an object', function() {
      assert.strictEqual(false, isa.object(5));
      assert.strictEqual(false, isa.object(''));
      assert.strictEqual(false, isa.object(false));
      assert.strictEqual(false, isa.object(null));
      assert.strictEqual(false, isa.object(undefined));
      assert.strictEqual(true, isa.object({}));
      assert.strictEqual(false, isa.object(function() {}));
      assert.strictEqual(false, isa.object(NaN));
    });
  });

  describe('date', function() {
    it('should return true if given input is an date', function() {
      assert.strictEqual(false, isa.date(5));
      assert.strictEqual(false, isa.date(''));
      assert.strictEqual(false, isa.date(false));
      assert.strictEqual(false, isa.date(null));
      assert.strictEqual(false, isa.date(undefined));
      assert.strictEqual(false, isa.date([]));
      assert.strictEqual(false, isa.date({}));
      assert.strictEqual(false, isa.date(function() {}));
      assert.strictEqual(false, isa.date(NaN));
      assert.strictEqual(true, isa.date(new Date()));
      assert.strictEqual(false, isa.date(/a/i));
    });
  });

  describe('regex', function() {
    it('should return true if given input is an regex', function() {
      assert.strictEqual(false, isa.regex(5));
      assert.strictEqual(false, isa.regex(''));
      assert.strictEqual(false, isa.regex(false));
      assert.strictEqual(false, isa.regex(null));
      assert.strictEqual(false, isa.regex(undefined));
      assert.strictEqual(false, isa.regex([]));
      assert.strictEqual(false, isa.regex({}));
      assert.strictEqual(false, isa.regex(function() {}));
      assert.strictEqual(false, isa.regex(NaN));
      assert.strictEqual(false, isa.regex(new Date()));
      assert.strictEqual(true, isa.regex(/a/i));
    });
  });
});
