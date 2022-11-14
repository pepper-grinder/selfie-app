var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie"){
        speak();
    }
 

}
function speak(){
var synth = window.speechSynthesis;
var speak_data = "taking your selfie 1 secondss";
var utter = new SpeechSynthesisUtterance(speak_data);
synth.speak(utter);
Webcam.attach(camera);
setTimeout(
    function(){
    take_snapshot();
    save();
    },1000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
 function take_snapshot (){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
 }

 function save (){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
 }