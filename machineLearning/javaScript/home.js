

function setup(){
     noCanvas();
     titleHolder = createDiv();
     titleHolder.id("titleHolder");

     title = createElement('h1', "Machine Poetry");
     title.class("titleText");
     titleHolder.child(title);

     subtitle = createElement('h2', "An Exploration of Word Vectors");
     subtitle.class("titleText");
     titleHolder.child(subtitle);

     generateButton = createButton("Begin");
     generateButton.mousePressed(loadGenerator);

}
function loadGenerator() {
     window.open("generator.html")
}
