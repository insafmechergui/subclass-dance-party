// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"><img src ="https://2.bp.blogspot.com/-cx83-vJyRzE/WH98Z6aq3wI/AAAAAAAF82A/CCObpkJYRNQ6OS32qFaLh1DcGWFN2WQkQCLcB/s1600/AW366145_03.gif"/></span>');
  this.timeBetweenStepss = timeBetweenSteps
  this.step();
  this.setPosition(top, left);

};

Dancer.prototype.step = function() {
 
  setTimeout(()=>this.step(), this.timeBetweenStepss);
};

Dancer.prototype.setPosition = function(top, left) {
 
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};