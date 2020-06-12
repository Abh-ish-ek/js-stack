const { pushData, popData } = require('./index');
const testPush = function (res) {
  try {
    var itemArray = [1, 2];
    var data = 5;
    pushData(itemArray, data);
    console.log(itemArray);
  } catch (err) {
    console.log(err);
  }
};
const testPop = function (res) {
  try {
    var itemArray = [1, 2, 5, 6, 7];
    popData(itemArray);
    console.log(itemArray);
  } catch (err) {
    console.log(err);
  }
};
//testPush();
//testPop();
