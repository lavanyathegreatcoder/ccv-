noseX=0;
noseY=0;

function preload()
{
    lipstick = loadImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcartoon%2Blips&psig=AOvVaw2ogCyYgx-o8_pR_m24vemk&ust=1692019131208000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDCkM3c2YADFQAAAAAdAAAAABAE");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(lipstick, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}