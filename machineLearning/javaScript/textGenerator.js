//word to vec translator
let inputWords = [];
let w2vOutput = [];

const wordVec = ml5.word2vec('data/wordvecs5000.json', modelReady);
let modelStatus;

function setup(){
     noCanvas();

     titleHolder = createDiv();
     titleHolder.id("holder");
     title = createElement("h1", "Machine Poetry");
     subtitle = createElement("h2", "Try it Yourself - Enter some Text Below");

     titleHolder.child(title);
     titleHolder.child(subtitle);
     title.class("titleText");


     inputHolder = createDiv();
     inputHolder.id("holder");

     userInput = createInput();
     userInput.class("input");

     inputButton = createButton("translate");
     inputButton.mousePressed(processInput);
     inButtonHolder = createDiv();
     inButtonHolder.id("buttonHolder");
     inButtonHolder.child(inputButton);



     inputHolder.child(userInput);
     inputHolder.child(inputButton);

     let breaker = createElement('br');

     let buttonDiv = createDiv();
     buttonDiv.id("buttonHolder");
     let refresh = createButton("clear");
     refresh.class('refreshButton');
     buttonDiv.child(refresh);
     refresh.mousePressed(reloadPage);

}
function modelReady(){
     console.log("ready!");


}
function keyPressed(){
     if(keyCode === RETURN){
          processInput();
     }

}
function processInput(){
     subtitle.value('');
     sentence = userInput.value().toLowerCase();
     youSay = createP("you said: " + sentence);
     youSay.id("youSay");
     userWords = sentence.split(',');
     userWords = sentence.split(',');
     userWords = sentence.split(' ');
     userInput.value('');

     for(var i = 0; i < userWords.length; i++){
          inputWords.push(userWords[i]);
     }
     chat();
}
function chat(){
     console.log(inputWords);
     let resultHolder = createDiv();
     resultHolder.id('resultHolder');
     for(var i = 0; i < userWords.length; i++){
          wordVec.nearest(userWords[i], function(err, results){
               if(err){
                    console.log(err);
               }
               for(var i = 0; i < results.length; i++){
                    console.log(results[i].word);
                    console.log(results[i].distance);

                    if(results[i].distance <= 0.7){
                         let vecResults = createP( results[i].word);
                         vecResults.id('vecResults');
                         resultHolder.child(vecResults);
                         break;
                    }
                    else if(results[i].distance > 0.7 && results[i].distance < 0.8){
                         let vecResults = createP(results[i].word);
                         resultHolder.child(vecResults);
                         vecResults.id('vecResults');
                         break;
                    }
                    else if(results[i].distance >= 0.8 && results[i].distance < 1.5){
                         let vecResults = createP(results[i].word);
                         resultHolder.child(vecResults);
                         vecResults.id('vecResults');
                         break;
                    }

               }
          });
     }
     let spacer = createElement('br');

}
function reloadPage() {
     location.reload();
}
