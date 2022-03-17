function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    PoseNet = ml5.poseNet(video,modelLoaded); 
    PoseNet.on('pose',gotPoses);
}

        function draw(){
            background('#848a87');
            textSize(difference);
            fill('#ffe787');
            text('Mohit',50,500);
        }

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }
}