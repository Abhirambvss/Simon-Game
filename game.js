var started =false ;

$(".start_button").click(function(){
console.log("entered start");


$(".start_button").click(function(){
    location.reload();
});


var buttonColors =["red","green","blue","yellow"] ;
var gamePattern = [],userClickedPattern = [];
var level=0;


$(".btn").on("click",function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animate(userChosenColor,100);
    checkAnswer(userClickedPattern.length-1);
})
if (!started) {
  $(".start").text("Level " + level);
  nextSequence();
    started = true;
}


function nextSequence(){
  userClickedPattern=[];
  level++;
  $(".start").text("Level " +level);
    var randomNumber = Math.floor(Math.random()*4);
  var  randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+ randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

    }

    function checkAnswer(currentLevel){
      if(gamePattern[currentLevel]==userClickedPattern[currentLevel])
      {
        console.log("success");

      if(gamePattern.length==userClickedPattern.length)
      {
        setTimeout(function(){
          nextSequence();
           },1000);
      }
    }
    else
    {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("wrong");
        setTimeout(function(){
          $("body").removeClass("wrong");
        },200);
        $(".start").text("Game Over,Click on start to restart the game");

    }
  }

function playSound(color){
  var sound = new Audio("sounds/"+color+".mp3");
  sound.play();
}

function animate(color){
$("#"+color).addClass("pressed");
setTimeout(function() {
  $("#"+ color).removeClass("pressed");
},100);
}

function startOver(){
  level =0;
  gamePattern = [],userClickedPattern = [];

}


});
