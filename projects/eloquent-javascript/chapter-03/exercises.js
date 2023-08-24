////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(arg1, arg2) {
  if (arg1 > arg2) {return arg2;}
  else return arg1;
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  if(num < 0){return isEven(-num);}
  if(num > 1){return isEven(num - 2);}
  if(num === 1) {return false;}
  if(num === 0) {return true;}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
    let count = 0;
    let idx = string.indexOf(char);
    while(idx > 0) {
      count++;
      idx = string.indexOf(char, idx + 1);
    }
    return count;
  }

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  let count = 0;
  let idx = string.indexOf('B');
  while(idx > 0) {
    count++;
    idx = string.indexOf('B', idx + 1);
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
