leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video=createCapture(VIDEO);
    video.size(600, 600);
    canvas=createCanvas(550,500);
    canvas.position(750, 130);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded, PoseNet Initialized");
}

function draw(){
    background('#c5ace3');
    document.getElementById("font_size_label").innerHTML="Size of Text: "+difference;
    fill("hotpink");
    stroke("hotpink");
    textSize(20)
    textSize(difference)
    text("Tiya", 250, 250);
    }

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        console.log(leftWristX, rightWristX);
        difference = floor(leftWristX - rightWristX);
        console.log(difference);
    }
}