var canva = document.querySelector("canvas")
var c = canva.getContext('2d');
canva.width = window.innerWidth;
canva.height = window.innerHeight;
c.fillStyle = 'red';
c.fillRect(500, 100, 100, 100);

c.beginPath();
c.moveTo(200, 300);
c.lineTo(500, 50);
c.lineTo(800, 300);
c.lineTo(200, 300)
c.stroke();
c.closePath();

c.beginPath();
c.lineTo(800, 600);
c.lineTo(1000, 300);
c.lineTo(1200, 600);
c.lineTo(800, 600);
c.fillStyle = 'red';
c.fill();
c.stroke();

// for(var i = 0; i < 3; i ++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 50, 0, Math.PI * 2, false);
//     c.stroke();
// }

// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dx = 10;
// var dy = 10;
// var radius = 30;
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.stroke();
//     c.closePath();
//     if(x + radius > innerWidth || x - radius < 0) dx = - dx;
//     if(y + radius > innerHeight || y - radius < 0) dy = - dy;
//     x += dx;
//     y += dy;
// }
//  animate();

// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dx = 10;
// var dy = 10;
// var radius = 30;
// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.stroke();
//     c.closePath();
//     if(x + radius > innerWidth || x < 0) dx = - dx;
//     if(y + radius > innerHeight || y < 0) dy = -dy;
//     x += dx;
//     y += dy;
// }
// animate ();


//     setInterval(() => {
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.stroke();
//     c.closePath();
//     if(x + radius > innerWidth || x < 0) dx = - dx;
//     if(y + radius > innerHeight || y < 0) dy = -dy;
//     x += dx;
//     y += dy;
// }, -1.9 * 1000);