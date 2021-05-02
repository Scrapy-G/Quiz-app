
var answerButtons = document.getElementsByClassName("answer-item");

for(i = 0; i < answerButtons.length; i++){
    answerButtons[i].onclick = changeAnswer;
}

xhttp = ajaxRequest();
xhttp.open("GET", "http://localhost/quiz-data.xml", true);

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
    }else{
        alert("Question data could not be loaded");
    }
}

xhttp.send();

function changeAnswer(){
    //clear any selected answers
    console.log(this);
    for(i = 0; i < answerButtons.length; i++){
        answerButtons[i].classList.remove("selected");
    }
    this.classList.add("selected");
}

function ajaxRequest(){
    if(window.ActiveXObject){
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }else{
        request = new XMLHttpRequest();
    }
    return request;    
}