var RobotDancerMaker = function(top, left, timeBetweenSteps){
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = ('<span><img src ="https://3.bp.blogspot.com/-5puoUkuiYJg/WEqOTWWLRZI/AAAAAAAEurM/41g9YXWNmToW_sZogpTcwR7OYPjZuAWMwCLcB/s1600/AW328916_23.gif" /></span>') 
}


RobotDancerMaker.prototype = Object.create(Dancer.prototype);
RobotDancerMaker.prototype.constructor = RobotDancerMaker ;

