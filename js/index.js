
const pathName = window.location.pathname;
var restartButton = document.querySelector('button#restart');

if(pathName == '/Contador-DevChallenge/'){
  var counterInput = document.querySelector('input[name="counter-date"]');
  var counterButton = document.querySelector(".counter-input button");

  counterButton.addEventListener('click', event => {
    localStorage.setItem("userDate", counterInput.value);
  
    window.location.replace("./contador.html");
  })
}

if(pathName == '/Contador-DevChallenge/contador.html'){
  startCountdown();
  restartButton.addEventListener('click', event => {
    localStorage.removeItem('userDate');
    window.location.replace('./')
  })
}

function startCountdown() {

  if(localStorage.userDate == undefined){
    alert('Você precisa definir uma data');
    window.location.replace('./')
    return
  }

  let daysField = document.querySelector('div.days h1');
  let hoursField = document.querySelector('div.hours h1');
  let minutesField = document.querySelector('div.minutes h1');
  let secondsField = document.querySelector('div.seconds h1');



  var countDownDate = new Date(localStorage.userDate).getTime();

  var countDown = setInterval(() => {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
    daysField.innerHTML = days;
    hoursField.innerHTML = hours;
    minutesField.innerHTML = minutes;
    secondsField.innerHTML = seconds;
  }, 1000); 
}