var i = 0;
var txt = 'Hello, I am Shiv Kumar Sahye';
var speed = 100;

function typeWriter() {
if (i < txt.length) {
    document.getElementById("animate").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
});