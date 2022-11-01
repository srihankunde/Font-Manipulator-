function setup(){

    video= createCapture(VIDEO);
  video.size(550,500);

  canvas= createCanvas(550,550);
  canvas.position(560,150);
   posenet=ml5.poseNet(video,modelLoaded);
   posenet.on('pose', gotposes);



}

function modelLoaded(){
    console.log("posenet is loaded!");

}

function gotposes(results){

    if(results.length > 0){


        console.log(results);

    }

}

function draw(){
    background("red");
}