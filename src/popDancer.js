var popDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = ('<span><img src ="https://4.bp.blogspot.com/-rIZVAl1inBw/WEqOQxBn99I/AAAAAAAEuqU/gtsg1qxFIxg1k29VgavnArTdI0toUh85ACLcB/s1600/AW328916_08.gif"/></span>')
};

popDancer.prototype = Object.create(Dancer.prototype)
popDancer.prototype.constructor = popDancer 

popDancer.prototype.step = function() {
 Dancer.prototype.step.call(this);
  // this.$node.toggle();
};
