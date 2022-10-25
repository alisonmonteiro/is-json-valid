"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = validate;

  var isString = function isString(value) {
    return typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]';
  };

  var isPlainObject = function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  };

  function validate(string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      allowObjects: false
    };

    if (isPlainObject(string) && options.allowObjects === true) {
      return true;
    }

    if (!isString(string) || !isNaN(string)) {
      return false;
    }

    try {
      JSON.parse(string);
    } catch (error) {
      return false;
    }

    return true;
  }
});
