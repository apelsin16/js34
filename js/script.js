(function() {
'use strict';
var test = {
  data: {
    title: 'Тест по какой-то теме',
    questions: [
      {
        title: 'Вопрос #1',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
      },
      {
        title: 'Вопрос #2',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант овтета 1', 'Вариант овтета 2']
      }
    ]
  }
};

var headLine = document.createElement('h2');
var headLineText = document.createTextNode(test.data.title);
var root = document.getElementById('root');
root.appendChild(headLine);
headLine.appendChild(headLineText);



for (var i = 0, length=test.data.questions.length; i<length; i++) {

  var question = document.createElement('h3');
  var questionText = document.createTextNode(test.data.questions[i].title);

  var form = document.createElement('form');
  form.classList.add('form');

  var ul = document.createElement('ul');


  root.appendChild(question)[i];
  question.appendChild(questionText)[i];


root.appendChild(form);
root.getElementsByClassName('form')[i].appendChild(ul);

for (var  j = 0, length1=test.data.questions[j].answers.length; j<length1; j++ ){
var newLi = document.createElement('li');
newLi.classList.add('answer'+[i]);




var input = document.createElement('input');
input.setAttribute('type', 'radio');
input.setAttribute('name', 'answer' + [i]);

var label = document.createElement('label');
label.classList.add('label');
label.htmlFor = 'answer' + [i];
var labelText = document.createTextNode(test.data.questions[i].answers[j]);

document.getElementsByTagName('ul')[i].appendChild(newLi);
//var attach0 = document.getElementsByTagName('ul')[i];
//attach0.appendChild(newLi)[j];

var attach = document.getElementsByTagName('ul')[i];
attach.appendChild(input);
attach.appendChild(label);
label.appendChild(labelText);

}
}

var buttonForm = document.createElement('form');

var button = document.createElement('input');
button.setAttribute('type', 'submit');
button.setAttribute('value', 'Проверить');

root.appendChild(buttonForm);
root.appendChild(button);



})();
