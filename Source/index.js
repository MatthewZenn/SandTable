const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 200;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2*Math.PI, false);
context.lineWidth = 4;
context.strokeStyle = '#DF77FF';
context.stroke();