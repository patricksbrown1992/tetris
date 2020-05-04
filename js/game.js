const STATUS = {
    PLAYING: 0,
    GAMEOVER: 1,
    MENU: 2,
    PAUSED: 3,
    WIN: 4
}

class Game{
    constructor(canvas, ctx, blocks){
        this.canvas = canvas;
        this.ctx = ctx;
        this.blocks = blocks

        // document.addEventListener('keypress', this.Squirtle.handlePause, false)
    }

   
 
    

    begin(){

        this.menuDraw();

   
    }

    menuDraw() {
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
        // this.ctx.font = "40px Arial";
        // this.ctx.textAlign = "center";
        // this.ctx.fillText("Press Enter to begin", this.canvas.width / 2, 100);
        // this.ctx.fillText("Press Z to shoot", this.canvas.width / 2, 150);
        // this.ctx.fillText("You have 3 bullets at a time", this.canvas.width / 2, 200);
        // this.ctx.fillText("Press left and right to move", this.canvas.width / 2, 250);
        // this.ctx.fillText("Press P to pause", this.canvas.width / 2, 300);
        // this.ctx.fillText("Press M to mute", this.canvas.width / 2, 350);
        
        // let press_m = new Image();
        let press_enter = new Image();
        press_enter.onload = () => {
            this.ctx.fillStyle = "steelblue";
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(press_enter, 0, 0, this.canvas.width, 100);
    
        }
        press_enter.src = './assets/tetris_blocks.png';
    }
    

   


    
}
export default Game;
