"use strict";
class Options {
    constructor(bg, height, width, fontSize, textAlign) {
        this.background = bg;
        this.height = height;
        this.width = width;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    diva() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = "hello world";
        div.style.cssText = "background:" + this.background + ";height:" + this.height + "px;"
            + "width:" + this.width + "px;" + "font-size:" + this.fontSize + "px;" 
            + "text-align:" + this.textAlign;
    }
}
let block = new Options("red", 200, 200, 32, "center");
block.diva();