function Coin(x,y){
  this.pos=createVector(x,y);
  this.size=50;
  
  this.show=function(){
    fill(50,100,30);
    rect(this.pos.x,this.pos.y%400, this.size,this.size);
  }
}
