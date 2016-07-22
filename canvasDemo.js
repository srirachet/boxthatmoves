var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas)

canvas.width = 1000;
canvas.height =1000;



function Box(x, y, width, height)
{
    this.x = x;
    this.y =y;
    this.width =width;
    this.height =height;
    this.color ='pink';
    this.direction = 'right';

     this.render =function(){
     ctx.fillRect(this.x,this.y,this.width,this.height);
     };

    this.update = function() {
        switch(this.direction) {
            case'up': this.y-=5; break;
            case 'down': this.y+=5; break;
            case 'left': this.x-=5; break;
            case 'right': this.x+=5; break;
        }
    };
};



var player = new Box(0,0,50,50);

window.addEventListener("keypress", function(e){
    var key = e.charCode;
    switch(key){
        case 119: player.direction = 'up'; break; //w
        case 97: player.direction = 'left'; break; //a
        case 100: player.direction= 'right'; break; //d
        case 115: player.direction = 'down';break; //s
    }},false);

var update = function(){
    player.update();
};
var render = function(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    player.render();};


var main = function(){
    update();
    render();
    requestAnimationFrame(main);

};
requestAnimationFrame = window.requestAnimationFrame

main();