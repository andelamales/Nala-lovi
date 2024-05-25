//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

// ovdje pišete svoje klase

class Nala extends Sprite {
    constructor(x, y, layer) {
        super(x, y, 16, 16);
        this.frame_sets = {
            "up": [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21],
            "walk-up": [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21],
            "right": [26, 28, 30, 32, 34],
            "walk-right": [51, 53, 55, 57, 59],
            "down": [1],
            "walk-down": [1],
            "left": [151, 153, 155, 157, 159],
            "walk-left": [176, 178, 180, 182, 184]
        };

        this.layer = layer;
        this.visible = true; //tek kad se postavi layer

        this._lives = 3;
        this._points = 0;
        this.armor = false;

        this.floor = 4;
        this.pozMeso = [2 * 16, 13 * 16];
        this.pozPoslastica = [10 * 16, 25 * 16, 6 * 16, 20 * 16, 16 * 16, 13 * 16, 4 * 16, 8 * 16];

    }//konstruktor Nala

    get lives() {
        return this._lives;
    }

    set lives(v) {
        if(v < 0)
            this._lives = 0;
        else if(v > 3)
            this._lives = 3;
        else
            this._lives = v;
    }

    get points() {
        return this._points;
    }

    set points(v) {
        if(v < 0)
            this._points = 0;
        else
            this._points = v;
    }

    loseLife() {
        this.lives--;
    }

    losePoints(v) {
        this.points -= v;
    }

    gainPoints(v) {
        this.points += v;
    }

    jump(h = 20) {

        if (!this.jumping) {
    
          this.jumping = true;
          this.velocity_y -= h;
          
          if( this.velocity_x < 0)
            this.velocity_x -= 4;
          else if( this.velocity_x > 0)
            this.velocity_x += 4;

        }
      }

    start() {
        this.x = 1 * 16;
        this.y = 5 * 16;
    }

    reposition(posx, posy) {
        this.x = posx;
        this.y = posy;
    }

    calculateFloor(v) {
        switch (v) {
            case 0:
                this.floor = 3;
                break;
            case 3:
                this.floor = 3;
                break;
            case 1:
                this.floor = 4;
                break;
            case 2:
                this.floor = 2;
                break;
            case 5:
                this.floor = 2;
                break;
            case 4:
                this.floor = 1;
                break;
            case 7:
                this.floor = 1;
                break;
            case 6:
                this.floor = 0;
                break;

            default:
                break;
        }

        GameSettings.output("Nalazite se na " + this.floor + " katu.");
    }

    armorOn() {
        this.frame_sets = {
            "up": [201, 203, 205, 207, 209, 211, 213, 215, 217, 219, 221],
            "walk-up": [201, 203, 205, 207, 209, 211, 213, 215, 217, 219, 221],
            "right": [226, 228, 230, 232, 234],
            "walk-right": [251, 253, 255, 257, 259],
            "down": [201],
            "walk-down": [201],
            "left": [351, 353, 355, 357, 359],
            "walk-left": [351, 353, 355, 357, 359]
        };

        this.armor = true;
    }

    armorOff() {
        this.frame_sets = {
            "up": [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21],
            "walk-up": [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21],
            "right": [26, 28, 30, 32, 34],
            "walk-right": [51, 53, 55, 57, 59],
            "down": [1],
            "walk-down": [1],
            "left": [151, 153, 155, 157, 159],
            "walk-left": [176, 178, 180, 182, 184]
        };

        this.armor = false;
    }

    
}//klasa Nala

class PokretniNeprijatelj extends Sprite {
    constructor(x, y, layer){

        super(x, y, 20, 16);
    
        this.frame_sets = {
          "up": [142],
          "walk-up": [142],
          "right": [142],
          "walk-right": [142],
          "down": [142],
          "walk-down": [142],
          "left": [143],
          "walk-left": [143]
        };
    
        this.layer=layer;
        this.visible=true;
        this.direction = 90;

    }
    
    moveRight() {
        this.direction = 90;
        this.velocity_x += 0.7;
    }
    
    moveLeft() {
        this.direction = 270;
        this.velocity_x -= 0.7;
    }
    
    start(posx, posy){
        this.x = posx;
        this.y = posy;
    }

    makeVisible() {
        this.visible = true;
    }

    invisible() {
        this.visible = false;
    }

}//klasa PokretniNeprijatelj

class Kosilica extends PokretniNeprijatelj {
    constructor(x, y, layer) {
        super(x, y, layer);

        this.frame_sets = {
            "up": [738],
            "walk-up": [738],
            "right": [738],
            "walk-right": [738],
            "down": [738],
            "walk-down": [738],
            "left": [738],
            "walk-left": [738]
          };
    }
}

class Collectable extends Item {
    constructor(layer) {
        super(layer);
        this.layer = layer;
        this.visible = true;
    }

    makeVisible() {
        this.visible = true;
    }

    invisible() {
        this.visible = false;
    }
}

class Booster extends Box {
    constructor(layer) {
        super(layer);

        this.okvir = false;
        this.counter = 0;
    }

    position(posx, posy) {
        this.visible = true;
        this.x = posx;
        this.y = posy;
    }

    invisible() {
        this.visible = false;
    }
}

class Bullet extends Collectable {
    constructor(layer) {
        super(layer);
    }

    jump(h = 18) {
        if (!this.jumping) {

        this.jumping = true;
        this.velocity_y -= h;
        this.velocity_x = 8;
  
      }
    }

    start(posx, posy) {
        this.x = posx;
        this.y = posy;
    }
}