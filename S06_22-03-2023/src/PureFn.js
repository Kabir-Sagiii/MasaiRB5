var c = 15; //external system or external code or side effect

function fnAdd(x, y) {
  // fnAdd is pure function
  var a = x;
  var b = y;

  var result = a + b + c;
  return result;
}

console.log(fnAdd(5, 6));
// inputs of function (5,6) ------> Output (21)
// inputs of function (5,6) ------> Output (26)
