var dog, happyDog
var database
var foodS, foodStock  

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  happyImg = loadImage("images/dogImg1.png")
}

function setup() {

  database = firebase.database();
	createCanvas(500, 500);
  dogSprite = createSprite(250, 250, 1, 1)
  //dogSprite.addImage(dog)
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  

  background(46, 139, 87);

  var intsruction = createElement('h3')
  intsruction.html("Note: Press UP_ARROW to feed the dog milk.")
  intsruction.position(425, 40)

  if (keyDown(UP_ARROW)) {
    readStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  
  database.ref('/').update({
    food:x
  })

}