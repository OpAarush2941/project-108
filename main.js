function start(){
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xNvy75ZFe/model.json",modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        console.log(result[0].label);
        console.log(result[0].confidence);
        document.getElementById("name").innerHTML = "Sound: " + result[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy: " + (result[0].confidence*100).toFixed(2);

        img1 = document.getElementById("animal_img");

        if(result[0].label == "barking"){
            img1.src = "dog.png";
           }
        else if(result[0].label == "meowing"){
            img1.src = "cat.jpg";
            }
        else if(result[0].label == "roaring"){
            img1.src = "lions.jpg";
            }
        else if(result[0].label == "chirping"){
            img1.src = "bird.png";
            }
        else{
            img1.src = "ear.png";
        }
    }
}
