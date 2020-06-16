const { get_stack } = require('./index');
const testPush = function (res) {
  try {
    let stackObj = get_stack();
    stackObj.push(5);
    stackObj.push('Abhishek');
    stackObj.push(5);
    console.log(stackObj);
  } catch (err) {
    console.log(err);
  }
};

testPush();
