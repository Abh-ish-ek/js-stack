const { Stack } = require('./index');
const testPush = function (res) {
  try {
    let stackObj = new Stack();
    stackObj.push(5);
    stackObj.push('Abhishek');
    stackObj.push(5);
    console.log(stackObj);

    let stackObj2 = new Stack();
    stackObj2.push(19);
    console.log(stackObj2);
  } catch (err) {
    console.log(err);
  }
};

testPush();
