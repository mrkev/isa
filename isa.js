(function(undefined){
  'use strict';

  var toString = Object.prototype.toString;

  /**
   * `isa` is a collection of methods which ease for type checking
   *
   * @module isa
   * @class isa
   * @static
   */
  var isa = {};

  /**
   * type checking for `number`
   *
   * @static
   * @method number
   * @param {Object} o given input
   * @return {boolean} true if given input is a `number`
   */
  isa.number = function(o) {
    return ('number' === typeof o) && !isNaN(o);
  };

  /**
   * type checking for `string`
   *
   * @static
   * @method string
   * @param {Object} o given input
   * @return {boolean} true if given input is a `string`
   */

  /**
   * type checking for `boolean`
   *
   * @static
   * @method boolean
   * @param {Object} o given input
   * @alias bool
   * @return {boolean} true if given input is a `boolean`
   */

  /**
   * type checking for `function`
   *
   * @static
   * @method function
   * @param {Object} o given input
   * @return {boolean} true if given input is a `function`
   */
  ['string', 'boolean', 'function'].forEach(function(p) {
    isa[p] = function(o) {
      this.name = p;
      return p === typeof o;
    }
  });

  isa.bool = isa.boolean;
  
  /**
   * type checking for `undefined`
   *
   * @static
   * @method undefined
   * @param {Object} o given input
   * @return {boolean} true if given input is a `undefined`
   */
  isa.undefined = function(o) {
    return void 0 === o;
  }

  /**
   * type checking for `null`
   *
   * @static
   * @method null
   * @param {Object} o given input
   * @return {boolean} true if given input is a `null`
   */
  isa.null = function(o) {
    return null === o;
  };

  /**
   * type checking for `Array`
   *
   * @static
   * @method array
   * @param {Object} o given input
   * @return {boolean} true if given input is an instance of `Array`
   */
  isa.array = function(o) {
    return Array.isArray
      ? Array.isArray(o)
      : '[object Array]' === toString.call(o);
  };

  /**
   * type checking for NaN
   *
   * @static
   * @method nan
   * @param {Object} o given input
   * @alias NaN
   * @see isa.number
   * @return {boolean} true if given input is not a number
   */
  isa.nan = isa.NaN = function(o) {
    return !this.number(o);
  };

  /**
   * type checking for `Object`
   *
   * @static
   * @method object
   * @param  {Object} o given input
   * @return {boolean} true if the given input is an object
   */
  isa.object = function(o) {
    return !isa.null(o) && (typeof o === 'object');
  };

  /**
   * type checking for `Date`
   *
   * @static
   * @method date
   * @param {Object} o given input
   * @return {boolean} true if the given input is a date
   */

  /**
   * type checking for `RegExp`
   *
   * @static
   * @method regExp
   * @alias regex
   * @param {Object} o given input
   * @return {boolean} true if the given input is a regexp
   */
  [Date, RegExp].forEach(function(constr) {
    var name = constr.name.replace(/[d|r]/i, constr.name[0].toLowerCase());
    isa[name] = function(o) {
      return o instanceof constr;
    }
  });

  isa.regex = isa.regExp;

  module.exports = isa;

}());
