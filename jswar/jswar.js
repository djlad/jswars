canvas = document.getElementById("canvas");
c = canvas.getContext("2d");

smallerSide = window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;

canvas.width = smallerSide;
canvas.height = smallerSide;

fps = 30
soldiers = []

firstMap = new map(10,10);

function map(rows,columns){
    this.rows = rows;
    this.columns = columns;
    
    this.squareSize = smallerSide/this.columns;

    this.board = [];
    
    for(i=0;i<this.rows;i++){
        this.board.push([])
        for(i2=0;i2<this.columns;i2++)this.board[i].push(0)
    }
}

/*map.prototype.getBoardPos = function(obj){
    obj
}*/

function soldier(x,y){
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.id=1;//identifies as soldier
    //firstMap.board[x][y] = this.id;
}

soldier.prototype.move = function(speed,vertical){
    speed = speed/100;
    if(speed > 1)speed = 1;
    
    if(vertical){
        this.vy = speed;
    }else{
        this.vx = speed;
    }
}

soldier.prototype.attack = function(direction){
    switch(direction){
        case "up":
            console.log("up");
            break;
        case "down":
            console.log("down");
            break;
        case "left":
            console.log("left");
            break;
        case "right":
            console.log("right");
            break;
    }
}

soldier.prototype = new spriteSheet(4,3)

function updateSoldiers(){
    soldiers.map(function(e){
        e.y+=e.vy;
        e.x+=e.vx;
    })
}

function renderMap(mapObj){
    mapObj.board.map(function(e){
        console.log("hello")
    })
}

function update(){
    updateSoldiers()
}

function render(){
    soldiers.map(function(e){
        c.fillRect(e.x,e.y,10,10);
        c.drawImage(q,e.x,e.y,10,10,0,0,e.width/e.cols,e.height/e.rows)
    })
    //renderMap(firstMap)
}

function game(){
    update();
    render();
}

soldiers.push(new soldier(3,3))


setInterval(game,1000/fps)

