const pushData = function Insert(arr, data) {
  var top = arr.length;
  if (top > 0) {
    var res = (arr[top++] = data);
    console.log(res);
    return res;
  } else {
    throw 'Undefined Array';
  }
};

const popData = function Delete(arr) {
  var top = arr.length;
  if (top > 0) {
    res = arr[top - 1];
    arr.length -= 1;
    return res;
  } else {
    throw 'Array is Empty';
  }
};
module.exports = {
  pushData,
  popData,
};
