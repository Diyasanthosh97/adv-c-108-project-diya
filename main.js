function soundClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/K7TrplzDX/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
red=Math.floor(Math.random()*255)+1;
green=Math.floor(Math.random()*255)+1;
blue=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
document.getElementById("accuracy").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+red+","+green+","+blue+")";
document.getElementById("accuracy").style.color="rgb("+red+","+green+","+blue+")";
img=document.getElementById("alien1");
    img1=document.getElementById("alien2");
    img2=document.getElementById("alien3");
    img3=document.getElementById("alien4");
    if(results[0].label=="meow"){
        img.src="cat.jpg";
        
    }
    else if(results[0].label=="barking"){
        img.src="dog.jpg";
         
    }
    else if(results[0].label=="clapping"){
        img.src="lion.jpg";
         
    }
    else{
        img.src="cow.jpg";
       
    }
 }
    }








