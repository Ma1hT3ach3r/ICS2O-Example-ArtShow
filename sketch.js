var person;
var x = 50;
var coin = [];
//var move=1;
//var obstacle;

function setup() {
  createCanvas(400, 400);
  person = new Person();
  for (var i = 0; i < 50; i++) {
    coin[i] = new Coin(40 + i * 100, height - 50 + i * -30);
  }
}

function keyPressed() {
  if (key == ' ') {
    var jump = createVector(0, -5);
    person.applyForce(jump);
  }
  // }else if(key =='a'){
  //   move=1;
  // }else if(key =='d'){
  //   move=-1;
  // }

}

function draw() {
  background(135, 206, 235);
  translate(-1 * person.pos.x + 50, 0);
  person.update();
  person.edges();
  person.display();


  var gravity = createVector(0, 0.1);
  person.applyForce(gravity);

  if (mouseIsPressed) {
    var force = createVector(-0.05, 0);
    person.applyForce(force);
  }

  //new coin
  for (var i = 0; i < 50; i++) {

    coin[i].show();
    person.hits(coin[i]);
  }

  //old rect
  fill(65, 0, 90);

  rect(400, height - 50, 20, 20);



  //clouds
  for (let i = 0; i < 30; i++) {
    fill(255, 255, 255);
    ellipse(10 + i * 26, 10 + i * 2, 10, 10);
  }

}


//for (var i=0;i<particles.length;i++){
//var gravity =createVector (0,0.2*particles [i].mass);
//particles[i].applyForce(gravity);

//if(mouseIsPressed) {
//  particles[i].applyForce(wind);
//  }
//  particles[i].update();
//  particles[i].edges();
// particles[i].
