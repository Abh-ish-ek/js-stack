let stackObj = {
  data: [],
  push: function (x) {
    return this.data.push(x);
  },
  pop: function () {
    return this.data.pop();
  },
};

module.exports = {
  stackObj,
};
