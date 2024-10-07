
function kotak() {
  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');
  ctx.moveTo(50, 50);
  ctx.lineTo(150, 50);
  ctx.lineTo(150, 150);
  ctx.lineTo(50, 150);
  ctx.lineTo(50, 50);
  ctx.stroke();
}
function kotakClear() {
  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');
  ctx.moveTo(50, 50);
  ctx.lineTo(150, 50);
  ctx.lineTo(150, 150);
  ctx.lineTo(50, 150);
  ctx.lineTo(50, 50);
  ctx.strokeStyle = 'white';
  ctx.stroke();
}
function lingkaran() {
  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');
  ctx.moveTo(500, 500);
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
}
function text() {
  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');
  ctx.font = '30px Arial';
  ctx.strokeText('Canvas', 700, 60);
  ctx.strokeStyle = 'balck';
}
function gambar() {
  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');
  ctx.drawImage(document.getElementById('img'), 580, 200, 400, 200);
}
function gradient() {
  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');
  var grd = ctx.createLinearGradient(0, 0, 100,0);
  grd.addColorStop(0, '#7CBB7B');
  grd.addColorStop(1, 'white');
  ctx.fillStyle = grd;
  ctx.fillRect(10, 330, 120, 120);
}
