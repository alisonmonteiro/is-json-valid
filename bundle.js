"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.undefined = mod.exports;
  }
})(void 0, function (module) {
  "use strict";

  var isString = function isString(value) {
    return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
  };

  var isPlainObject = function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  };

  var validate = function validate(string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (isPlainObject(string) && options.allowObjects === true) {
      return true;
    }

    if (!isString(string)) {
      return false;
    }

    if (!isNaN(string)) {
      return false;
    }

    try {
      JSON.parse(string);
    } catch (error) {
      return false;
    }

    return true;
  };

  module.exports = validate;
});
