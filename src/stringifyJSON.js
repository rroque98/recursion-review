// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var funnel = function(item) {
  // if num .
    if (typeof item === 'number' || typeof item === 'boolean') {
      return item.toString();
    }
    if (typeof item === 'undefined' || typeof item === 'function') {
      return null;
    }
    if (item === null) {
      return 'null';
    }
    if (typeof item === 'string') {
      return stringToString(item);
    }
    if (Array.isArray(item)) {
      return arrayToString(item);
    }
    if (typeof item === 'object') {
      return objectToString(item);
    }
  };

  var stringToString = function(str) {
    return '"' + str + '"';
  };

  var arrayToString = function(arr) {
    var result = '[';

    if (arr.length === 0) {
      return '[]';
    }

    for (var i = 0; i < arr.length; i++) {
      result += funnel(arr[i]);
      result += ',';
    }
    result = result.slice(0, result.length - 1);
    result += ']';
    return result;
  };
  
  var objectToString = function(object) {
    if (Object.keys(object).length === 0) {
      return '{}';
    }
    var result = '{';
    for (var key in object) {
      if (typeof object[key] === 'undefined' || typeof object[key] === 'function') {
        continue;
      }
      result += funnel(key) + ':' + funnel(object[key]) + ',';
    }
    if (result.charAt(result.length - 1) === ',') {
      result = result.slice(0, result.length - 1);
    }
    result += '}';
    return result;
  };
  return funnel(obj);
};

// Outline:
// function that decides which func
// depending on data type --> funnels it (obj, array, str, num, boolean, null, undefined)
// for obj, array check inside --> use recursion.

// 