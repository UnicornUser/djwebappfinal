Song1="";
Song2="";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;
scoreLeftWrist = 0;
statusLeftWrist="";
scoreRightWrist = 0;
statusRightWrist="";

function preload(){
Song1= loadSound("aespa_Black_Mamba.mp3");
Song2= loadSound("Itzy_Loco.mp3");   
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function modelLoaded(){
    console.log('PoseNet Is Initialized!');    
     }
    function draw(){
    image(video, 0, 0, 600, 500);  
    fill("#FF0000");
    stroke("#FF0000");
    statusLeftWrist = Song1.isPlaying();
    console.log(statusLeftWrist);

    if(scoreLeftWrist > 0.2){
    circle(leftWristX, leftWristY, 20);
    Song2.stop();
    if(statusLeftWrist == false){
    Song1.play();
    }
    else{
    document.getElementById("name").innerHTML= "Song Name: Black Mamba";    
    }
    }
    statusRightWrist = Song1.isPlaying();
    console.log(statusRightWrist);

    if(scoreRightWrist > 0.2){
    circle(rightWristX, rightWristY, 20);
    Song1.stop();
    if(statusRightWrist == false){
    Song2.play();
    }
    else{
    document.getElementById("name").innerHTML= "Song Name: Loco";    
    }
    }
    }

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX,rightWristY,20);

        if(rightWrist >0 && rightWrist <= 100)
        {
            document.getElementById("speed").innerHTML = "Speed = 0.5x";
            song.rate(0.5);
        }

        if(rightWrist >100 && rightWrist <= 200)
        {
            document.getElementById("speed").innerHTML = "Speed = 1x";
            song.rate(1);
        }

        if(rightWrist >200 && rightWrist <= 300)
        {
            document.getElementById("speed").innerHTML = "Speed =1.5x";
            song.rate(1.5);
        }

        if(rightWrist >300 && rightWrist <= 400)
        {
            document.getElementById("speed").innerHTML = "Speed = 2x";
            song.rate(2);
        }

        if(rightWrist >400 && rightWrist <= 500)
        {
            document.getElementById("speed").innerHTML = "Speed = 2.5x";
            song.rate(2.5);
        }
    }

    function gotPoses(results){
        if(results.length > 0){
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist = " + scoreRightWrist);

        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY); 
        
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
        }
        }
    function play(){
        Song1.play();
        Song1.setVolume(1);
        Song1.rate(1);    
        }  
        function play2(){
            Song2.play();
            Song2.setVolume(1);
            Song2.rate(1);    
            }           