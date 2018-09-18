var fact = document.querySelector('#fact'); 
var factText = document.querySelector('#factText');
var numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', getFactAjax);

function getFactAjax(){
    var number = numberInput.value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/'+number);

    xhr.onload = function(){
        if(this.status == 200 && number != ''){
            fact.style.display = 'block';
            factText.innerText = this.responseText;
        }
    }

    xhr.send();
}