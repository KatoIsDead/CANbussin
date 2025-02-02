var canva = document.querySelector("canvas");
var c = canva.getContext('2d');
canva.width = window.innerWidth;
canva.height = window.innerHeight;

var mouse = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    // console.log(mouse);
});

class Circle{
    constructor(x, y, r, dx, dy){
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    }

    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.strokeStyle = 'hsl(120 , 100% , 16%)';
        c.fillStyle = 'hsla(120 , 100% , 8%, 0.9)';
        c.fill();
        c.stroke();
        // console.log("this is the way");
    }

    update(){
        this.draw();
        
        //movements of the circle
        if(this.x + this.r > innerWidth || this.x - this.r < 0) this.dx = - this.dx;
        if(this.y + this.r > innerHeight || this.y - this.r < 0) this.dy = - this.dy;
        
        //velocity
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if(mouse.x - this.x < 50) this.r +=1;
        else if(mouse.x - this.x > 50) this.r -=1;
        if(mouse.y - this.y < 50) this.r += 1;
        else if(mouse.y + this.y > 50) this.r -= 1;
    }
}

console.log(mouse);

function myVariablesForLoop(){
    r = 60;
    x = Math.random() * (innerWidth - r * 2);
    y = Math.random() * (innerHeight - r * 2) + r;
    dx = (Math.random() - 0.5) * 3;
    dy = (Math.random() - 0.5) * 3;
}

var circleArr = [];
for (let i = 0; i < 500; i++) {
    myVariablesForLoop();
    circleArr.push(new Circle(x, y, r, dx, dy));
}

function animate(){ 
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArr.length; i += 1) {
        circleArr[i].update();
    }
}
animate();