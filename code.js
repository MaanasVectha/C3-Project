var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c50e2181-e67e-41da-b901-8d6911fc0a82","ff31ad67-a97b-43e5-bb55-108a7f722f1a","54fc6060-a20e-46b2-ab50-626499180d00"],"propsByKey":{"c50e2181-e67e-41da-b901-8d6911fc0a82":{"name":"sneaking-thief-260nw-46732993.jpg_1","sourceUrl":"assets/v3/animations/hp-H8MqbpRSGxusLgJx51Y5BDCOCiVpqMwuWu4ofllI/c50e2181-e67e-41da-b901-8d6911fc0a82.png","frameSize":{"x":320,"y":280},"frameCount":1,"looping":true,"frameDelay":4,"version":"d8S.uYFW5JSDHNs4LYY408tdA6qRoJQ1","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":280},"rootRelativePath":"assets/v3/animations/hp-H8MqbpRSGxusLgJx51Y5BDCOCiVpqMwuWu4ofllI/c50e2181-e67e-41da-b901-8d6911fc0a82.png"},"ff31ad67-a97b-43e5-bb55-108a7f722f1a":{"name":"jewel.jpg_1","sourceUrl":"assets/v3/animations/hp-H8MqbpRSGxusLgJx51Y5BDCOCiVpqMwuWu4ofllI/ff31ad67-a97b-43e5-bb55-108a7f722f1a.png","frameSize":{"x":266,"y":251},"frameCount":1,"looping":true,"frameDelay":4,"version":"_kC0VjbpCsUNSNvW8YWAibED.jfQO_hS","loadedFromSource":true,"saved":true,"sourceSize":{"x":266,"y":251},"rootRelativePath":"assets/v3/animations/hp-H8MqbpRSGxusLgJx51Y5BDCOCiVpqMwuWu4ofllI/ff31ad67-a97b-43e5-bb55-108a7f722f1a.png"},"54fc6060-a20e-46b2-ab50-626499180d00":{"name":"1 (1) - Copy.jpg_1","sourceUrl":"assets/v3/animations/hp-H8MqbpRSGxusLgJx51Y5BDCOCiVpqMwuWu4ofllI/54fc6060-a20e-46b2-ab50-626499180d00.png","frameSize":{"x":671,"y":68},"frameCount":1,"looping":true,"frameDelay":4,"version":"pocUI8YJYF4_hHUuVKVzKTv3B3qhJ6RF","loadedFromSource":true,"saved":true,"sourceSize":{"x":671,"y":68},"rootRelativePath":"assets/v3/animations/hp-H8MqbpRSGxusLgJx51Y5BDCOCiVpqMwuWu4ofllI/54fc6060-a20e-46b2-ab50-626499180d00.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var diamond = createSprite(360,40,30,30);
diamond.setAnimation("jewel.jpg_1");
diamond.scale=0.2;
var laser1 = createSprite(320, 80, 200, 5);
laser1.shapeColor="red";
var laser2 = createSprite(60, 300, 200, 5);
laser2.shapeColor="green";
var laser3 = createSprite(60, 150, 150, 5);
laser3.shapeColor="green";
var laser4 = createSprite(330, 225, 150, 5);
laser4.shapeColor="red";
var theif = createSprite(180, 350, 20, 20);
theif.setAnimation("sneaking-thief-260nw-46732993.jpg_1");
theif.scale=0.25;
var l1Dir="left";
var l2Dir="right";
var l3Dir="left";
var l4Dir="right";
var gamestate="start";

function draw(){
  background("220");
  drawSprites();
  theif.velocityX = 0;
  theif.velocityY = 0;
  
  if (l1Dir =="left"){
    laser1.x=laser1.x + 5;}
  if (l1Dir =="right"){
    laser1.x=laser1.x - 5;}
    
  if ((laser1.x==400)&&(l1Dir=="left")){
    l1Dir="right";}
  if ((laser1.x==0)&&(l1Dir=="right")){
    l1Dir="left";}
    
  if (l2Dir =="right"){
    laser2.x=laser2.x - 5;}
  if (l2Dir =="left"){
    laser2.x=laser2.x + 5;}
    
  if ((laser2.x==0)&&(l2Dir=="right")){
    l2Dir="left";}
  if ((laser2.x==400)&&(l2Dir=="left")){
    l2Dir="right";  }
  
  if (l3Dir =="left"){
    laser3.x=laser3.x + 5;}
  if (l3Dir =="right"){
    laser3.x=laser3.x - 5;}
    
  if ((laser3.x==400)&&(l3Dir=="left")){
    l3Dir="right";}
  if ((laser3.x==0)&&(l3Dir=="right")){
    l3Dir="left"; }
    
  if (l4Dir =="right"){
    laser4.x=laser4.x - 5;}
  if (l4Dir =="left"){
    laser4.x=laser4.x + 5;}
    
  if ((laser4.x==0)&&(l4Dir=="right")){
    l4Dir="left";}
  if ((laser4.x==400)&&(l4Dir=="left")){
    l4Dir="right";  }
    
  if (keyDown("up")) {
    theif.velocityX = 0;
    theif.velocityY = -4;
  }
  if (keyDown("down")) {
    theif.velocityX = 0;
    theif.velocityY = 4;
  }
  if (keyDown("right")) {
      theif.velocityX = theif.velocityX+10;
    }
  if (keyDown("left")) {
      theif.velocityX = theif.velocityX-10;
    }
  if(theif.isTouching(laser1)||theif.isTouching(laser2)||theif.isTouching(laser3)||theif.isTouching(laser4)){
    gamestate = "stop";
  }  
  if(gamestate=="stop"){
     background("pink");
     textSize(50);
     strokeWeight(3);
     stroke("red");
     textFont("Impact");
     fill("yellow");
     text("Theif is caught", 50, 200);
     playSound("assets/Policecarsiren.mp3");
 }
  if(theif.isTouching(diamond)){
    gamestate = "stolen";
  }
  if (gamestate=="stolen") {
    background("red");
    textSize(30);
    strokeWeight(3);
    stroke("red");
    textFont("Impact");
    fill("yellow");
    text("Diamond is Stolen...Alert", 90, 200);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
