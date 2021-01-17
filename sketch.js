
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Contraint;

var engine, world;


function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(800, 100, 1000, 20, { isStatic: false });
	//floor = new Roof(800, 600, 1000, 20,{isStatic:false});
	bobObject1 = new Bob(600, 500, 50);
	bobObject2 = new Bob(700, 500, 50);
	bobObject3 = new Bob(800, 500, 50);
	bobObject4 = new Bob(900, 500, 50);
	bobObject5 = new Bob(1000, 500, 50);

	rope1 = new Rope(bobObject1.body, roof.body, -200, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -100, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 100, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 200, 0);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);


	roof.display();
	//floor.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();





	//console.log(bobObject1);

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -205, y: -45 });
	}
}