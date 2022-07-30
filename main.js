function setup()
{
    canvas= createCanvas(400,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    video.size(400,300);
}

function draw()
{
    image(video,0,0,400,300);
}

function start()
{
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= " Status : Detecting Objects";
    objectName= document.getElementById("input").value;
}

function modelLoaded()
{
  console.log('Model is Loaded !')
  status= true;
}