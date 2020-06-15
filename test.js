const { stackObj, stackObj1 } = require('./index');
const testPush = function (res) {
  try {
    stackObj.push(5);
    stackObj.push('Abhishek');
    stackObj.push(5);
    stackObj1.pop(6);
    console.log(stackObj);
  } catch (err) {
    console.log(err);
  }
};

testPush();
