
class Duck{
  constructor(flying=false,quaking=false,xPos=0,yPos=0){
    this.flying=flying;
    this.quacking=quaking;
    this.xPos=xPos;
    this.yPos=yPos;
  }
  //And the following methods
  
   takeOff(){
this.flying=true;
  } // sets flying to true
  land(){
    this.flying=false;
  }      // sets flying to false
 startQuacking(){
    this.quacking=true;
  }  // sets quacking to true
  stopQuacking() {
    this.quacking=false
  } // sets quacking to false
  moveTo(x, y){this.xPos=x;this.yPos=y;
  console.log("given values of x :"+this.xPos+" and y ;"+this.yPos);
  } // changes the x and y to the given x, y and console.logs the current status
    

}
module.exports=Duck;