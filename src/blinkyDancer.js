var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = ('<span><img src ="  https://2.bp.blogspot.com/-ztv8BcdPQpI/WEqOPjy_CmI/AAAAAAAEup8/e35JaOBGUwst6W50I1MC5UIzkH0qT2hHwCLcB/s1600/AW328916_02.gif"/>"</span>  ')
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype)
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer 

makeBlinkyDancer.prototype.step = function() {
 Dancer.prototype.step.call(this);
  this.$node.toggle();
};
