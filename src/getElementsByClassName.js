// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  

  // break down document.body
  // recursively break it down into smaller pieces
  // if the ... is equal to className
  var checkForClass = function(node) {
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }
  };

  var traverseDom = function(elem) {
    if (elem.childNodes.length === 0) {
      checkForClass(elem);
    } else {
      checkForClass(elem);
      for (var i = 0; i < elem.childNodes.length; i++) {
        traverseDom(elem.childNodes[i]);
      }
    }
  };

  traverseDom(document.body);
  return result;
};

// input = string
// output = array of elements with a class name
// strategy
// Run on the document.body.
// traverse the DOM.
// pseudocode
  // start at document.body
  // declare array to store elements
  // use jquery to locate first instance of desired class name
  // if body.child has the class name
    // push element into result
  // else
    // check children