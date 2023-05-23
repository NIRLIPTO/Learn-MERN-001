// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>LEARN-MERN-001</h1>`;

console.log('SPEECH-SAVER');

const syncWithCallBack = () => {
  for (let i = 1; i < 4; i++) {
    console.log('index ', i, '\t', new Date());
  }
};

syncWithCallBack();
console.log("Completed")
