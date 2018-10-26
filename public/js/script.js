// use this to keep track of the number of tries
var numberOfTries = 0;
var blockNumber = 0;
var result = 0;
var index= 0;

var piDigits = ['3.1415926', '5358', '9793', '2384',
  '3.1415926535897932384',
  '6264', '338327', '9502', '8841',
  '3.1415926535897932384626433832795028841',
  '9716', '9399', '37510', '58209',
  '3.14159265358979323846264338832795028841971693993751058209',
  '74944', '59230', '7816', '40628',
  '3.141592653589793238462643388327950288419716939937510582097494459230781640628',
  '620899', '86280', '34825', '34211',
  '3.14159265358979323846264338327950288419716939937510582097494459230781640628862803482534211',
  '7067',
  '3.141592653589793238462643383279502884197169399375105820974944592307816406288628034825342117067'
];

//to check if the array works
console.log(piDigits[0]);



function evaluateField() {
  do {
    document.getElementById('firstuserinput').style.display = 'none';
    var correctResult = piDigits[result];
    if (result === 26){
      theEnd();
      console.log("here");
      break;
    }
    if (userInput1.value == correctResult) {
      console.log("Good Job! ");
      correct.style.display = 'block';
      gotitbuttonloop.style.display = 'block';
      tryagaintext.style.display = 'none';
      document.getElementById('nextDigits').innerText = piDigits[result + 1];

      if (result != 0 && piDigits[result - 1].length > 10) {
        //document.getElementById('fourthblock').innerText =  'lara';
      }

      // correct result, to reset the number of tries for the next 5 digit block
      numberOfTries = 0;
      //to use in a foreloop for arraynumbers
      blockNumber = blockNumber + 1;
      result = result + 1;
      break;
    } else if (numberOfTries == 3) {
      wrongtext.style.display = 'block';
      document.getElementById('again').innerText = piDigits[result];
      numberOfTries = 0;
      break;
    } else {
      trials();
    }
    var resultFromUser = document.getElementById('userInput1').value;
    console.log(resultFromUser);
    break;
  } while (result < 27);


}

function trials() {
  for (var incorrect = 0; numberOfTries <= 3; incorrect++) {
    console.log("Try again :", numberOfTries);
    // increase the number of tries
    numberOfTries = numberOfTries + 1;
    tryagaintext.style.display = 'block';
    wrongtext.style.display = 'none';
    gotitbutton.style.display = 'none';
    document.getElementById('tryagain').style.display = 'block';
    break;
  }
}

function theEnd() {
  end.style.display = 'block';
  correct.style.display = 'none';
}

function onGoBtnClick() {
  document.getElementById('introtext').style.display = 'none';
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('letsgobutton').style.display = 'none';
  commonBtnDisplays('block');
}

function onBackBtnClick() {
  document.getElementById('introtext').style.display = 'block';
  document.getElementById('letsgobutton').style.display = 'block';
  document.getElementById('welcome').style.display = 'block';
  commonBtnDisplays('none');
}

function onGotItBtnClick() {
  document.getElementById('firstuserinput').style.display = 'block';
  document.getElementById('tryagaintext').style.display = 'none';
  document.getElementById('wrongtext').style.display = 'none';
  document.getElementById('correct').style.display = 'none';
  document.getElementById('gotitbuttonloop').style.display = 'none';
  commonBtnDisplays('none');
}

function ontryagainBtnClick() {
  document.getElementById('firstuserinput').style.display = 'block';
  document.getElementById('tryagain').style.display = 'none';
  document.getElementById('tryagaintext').style.display = 'none';
}

function onGotItLoopBtnClick() {
  firstuserinput.style.display = 'block';
  correct.style.display = 'none';
}

function commonBtnDisplays(displayVal) {
  document.getElementById('back').style.display = displayVal;
  document.getElementById('firstfive').style.display = displayVal;
  document.getElementById('display').innerText = piDigits[result];
  document.getElementById('gotitbutton').style.display = displayVal;
  document.getElementById('test2').style.display = displayVal;
}
