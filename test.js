const { stackObj } = require('./index');
const testPush = function (res) {
  try {
    stackObj.push(5);
    stackObj.push('Abhishek');
    stackObj.push(5);
    stackObj.pop();
  } catch (err) {}
};

testPush();
