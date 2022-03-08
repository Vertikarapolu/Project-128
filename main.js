song="";
song1 ="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song = loadSound("music1.mp3");
    song1 = loadSound("music2.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
    canvas.position(400,300);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function draw()
{
    image(video,0,0,600,500);
}

function song_play()
{
    song.play();
    song1.play();
    song.volume(1);
    song1.volume(1);
    song.rate(1)
    song1.rate(1);
}

function gotPoses(results)
{
    if(results[0].length > 0 )
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " +  leftWristX + "leftWristY = " +  leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " +  rightWristX + "rightWristY = " +  rightWristY);
    }
}

