
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    var totalScore = document.querySelector('.totalScore');

    // this.reset = function() {
        
    //     for(let i=0; i<this.tail.length - 1; i++){
    //         if(this.x === this.tail[i].x && this.y === this.tail[i].y){
    //             this.total = 0;
    //             totalScore.textContent = "0" + this.total;
    //             this.tail[i] = 0;
    //             i = 0;
    //             console.log("EAT");
    //             break;
    //         }
    //     }
    // }
    this.draw = function() {
        ctx.fillStyle = '#FFFFFF';
        
        for(let i=0; i<this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                this.total = 0;
                totalScore.textContent = "0" + this.total;
                this.tail = [];
                i = -1;
                this.x = 0;
                this.y = 0;
                console.log(this.tail.length);
                break;
            }
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function() {
        for(let i=0; i<this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1];

            console.log(this.tail.length);

        }
        this.tail[this.total - 1] = {x: this.x, y: this.y};

        this.x +=this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > canvas.width){
            this.x = 0;
        }
        if(this.y > canvas.height){
            this.y = 0;
        }
        if(this.x < 0){
            this.x = canvas.width;
        }
        if(this.y < 0){
            this.y = canvas.height;
        }
    }


    this.changeDirection = function(direction) {
        switch(direction){
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }
    this.changeDirectionUp = function() {
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        // break;
    }
    this.changeDirectionDown = function() {
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        // break;
    }
    this.changeDirectionLeft = function() {
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        // break;
    }
    this.changeDirectionRight = function() {
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        // break;
    }

    this.eat = function(fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            this.total++;
            if(this.total <10){
                totalScore.textContent = "0" + this.total;
            }
            else{
                totalScore.textContent = this.total;
            }
            return true;
        }
    }
    // this.kanibalizm = function(){
    //     for(let i=0; i<this.tail.length; i++){
    //         if(this.x === this.tail[i].x && this.y === this.tail[i].y){
    //             this.total = 0;
    //         }
    //     }
    //     return true;
    // }
}
