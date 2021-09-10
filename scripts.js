const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 8750; // miliseconds, same time as pointer-container transition
const inhale = (totalTime / 5) * 2;
const hold = totalTime / 5;

breathingAnimation();

function breathingAnimation() {
  text.innerText = 'Inhale...';
  text.style.color = '#8C3164';
  container.className = 'container inhale';
  setTimeout(() => {
    text.innerText = 'Hold...';
    text.style.color = '#587A96';
    setTimeout(() => {
      text.innerText = 'Exhale...';
      text.style.color = '#75609E';
      container.className = 'container exhale';
    }, hold);
  }, inhale);
}

setInterval(breathingAnimation, totalTime); // calls breathingAnimation every 9.25 seconds
