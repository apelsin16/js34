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
root.appendChild(headLineText);



for (var i = 0, length=test.data.questions.length; i<length; i++) {

var question = document.createElement('h3');
var questionText = document.createTextNode(test.data.questions[i].title);
var form = document.createElement('form');
form.classList.add('form');
var ul = document.createElement('ul');
ul.classList.add('variantsOfAnswers');
root.appendChild(question)[i];
root.appendChild(questionText)[i];
root.appendChild(form);
root.getElementsByClassName('form')[i].appendChild(ul);

for (var j = 0, length1=test.data.questions[i].answers.length; j<length1; j++){

  var newLi = document.createElement('li');
  newLi.classList.add('answer');
  var attach0 = document.getElementsByClassName('variantsOfAnswers')[j];
  attach0.appendChild(newLi)[j];
  var input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('id', 'answer' + [j]);
  var label = document.createElement('label');
  label.classList.add('label');
  label.htmlFor = 'answer' + [j];
  label.innerHTML = test.data.questions[i].answers[j];
  var attach = document.getElementsByClassName('answer')[j];
  attach.appendChild(input);
  attach.appendChild(label);
}
}



//console.log(questionOfNumber);
//return questionOfNumber;





//    var fragment = document.createDocumentFragment();
//    var fragment2 = document.createDocumentFragment();
//
//    function createNode ( type, cls, attributes, str) {
//      var el = document.createElement(type);
//      if (cls && (typeof cls === 'string')) {
//        el.classList.add(cls);
//
//      }
//
//      if (attributes && (typeof attributes === 'object')){
//        for (var i = 0; i < attributes.length; i++){
//          el.setAttribute(attributes[i].name, attributes[i].value );
//        }
//
//      }
//      if (str && (typeof str === 'string')){
//        el.appendChild(document.createTextNode(str));
//      }
//
//
//    return el;
//  }

//  var  attributesForInputArr = [
//    {
//      name: 'type',
//      value: 'radio',
//    },
//    {
//      name: 'id',
//      value: 'answer1'
//    },
//    {
//      name: 'type',
//      value: 'radio',
//    },
//    {
//      name: 'id',
//      value: 'answer2'
//    },
//    {
//      name: 'type',
//      value: 'radio',
//    },
//    {
//      name: 'id',
//      value: 'answer3'
//    },
//    {
//      name: 'type',
//      value: 'radio',
//    },
//    {
//      name: 'id',
//      value: 'answer4'
//    },
//    {
//      name: 'type',
//      value: 'radio',
//    },
//    {
//      name: 'id',
//      value: 'answer5'
//    },
//    {
//      name: 'type',
//      value: 'radio',
//    },
//    {
//      name: 'id',
//      value: 'answer6'
//    }
//  ];



//fragment.appendChild(createNode('h4', 'mainTitle', null, test.data.title));
//fragment.appendChild(createNode('h5', 'firstQuestionTitle', null, test.data.questions[0].title));
//fragment.appendChild(createNode('form', 'firstQuestionForm', null, null));
//fragment.appendChild(createNode('p', 'firstQuestionFirstAnswer', null, null));
//fragment.appendChild(createNode('label', 'FirstOption',null, null ));
//fragment.appendChild(createNode('input', 'firstQuestionFirstOption', attributesForInputArr, test.data.questions[0].answers[0]));
//fragment.appendChild(createNode('label', '', null , test.data.questions[0].answers[1]));
//fragment.appendChild(createNode('input', 'firstQuestionSecondOption', attributesForInputArr, null));
//fragment.appendChild(createNode('div', 'firstQuestionSecondAnswer', null, test.data.questions[0].answers[1]));
//fragment.appendChild(createNode('div', 'firstQuestionThirdAnswer', null, test.data.questions[0].answers[2]));
//fragment.appendChild(createNode('input', 'firstQuestionFirstOption', attributesArr, null));
//var root = document.getElementById('root');
//root.appendChild(fragment);
//root.getElementsByClassName('firstQuestionFirstAnswer')[0].appendChild(fragment);
//root.getElementsByClassName('FirstOption')[0].appendChild(fragment);
})();
