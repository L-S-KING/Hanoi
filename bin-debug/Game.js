var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.rectFirArr = [];
        _this.rectSecArr = [];
        _this.rectThiArr = [];
        _this.isMove = false; //方块是否处于移动状态
        _this.posY = 100;
        _this.timer = 0; //游戏时间
        _this.steps = 0; //移动步数
        _this.rectNum = 4;
        _this.time = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
        return _this;
    }
    Game.prototype.initData = function () {
        this.skinName = "game";
        this.stepsLabel.text = "步数:" + this.steps;
        this.timeLabel.text = "时间:" + this.timer + "秒";
        this.drawRect(this.rectNum);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.begin, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    Game.prototype.begin = function (e) {
        if (this.isMove == false) {
            var timeY = 0;
            if (e.target.x == this.first.x && this.rectFirArr.length > 0) {
                this.currentRect = this.rectFirArr[0];
                for (var i = 1; i < this.rectFirArr.length; i++) {
                    if (this.currentRect.width > this.rectFirArr[i].width) {
                        this.currentRect = this.rectFirArr[i];
                    }
                }
                timeY = this.currentRect.y - this.posY;
                egret.Tween.get(this.currentRect).to({ y: this.posY }, timeY).wait(60);
                this.isMove = true;
                for (var i = 0; i < this.rectFirArr.length; i++) {
                    if (this.currentRect == this.rectFirArr[i]) {
                        this.rectFirArr.splice(i, 1);
                    }
                }
                return;
            }
            if (e.target.x == this.second.x && this.rectSecArr.length > 0) {
                this.currentRect = this.rectSecArr[0];
                for (var i = 1; i < this.rectSecArr.length; i++) {
                    if (this.currentRect.width > this.rectSecArr[i].width) {
                        this.currentRect = this.rectSecArr[i];
                    }
                }
                timeY = this.currentRect.y - this.posY;
                egret.Tween.get(this.currentRect).to({ y: this.posY }, timeY).wait(60);
                this.isMove = true;
                for (var i = 0; i < this.rectSecArr.length; i++) {
                    if (this.currentRect == this.rectSecArr[i]) {
                        this.rectSecArr.splice(i, 1);
                    }
                }
                return;
            }
            if (e.target.x == this.third.x && this.rectThiArr.length > 0) {
                this.currentRect = this.rectThiArr[0];
                for (var i = 1; i < this.rectThiArr.length; i++) {
                    if (this.currentRect.width > this.rectThiArr[i].width) {
                        this.currentRect = this.rectThiArr[i];
                    }
                }
                timeY = this.currentRect.y - this.posY;
                egret.Tween.get(this.currentRect).to({ y: this.posY }, timeY).wait(60);
                this.isMove = true;
                for (var i = 0; i < this.rectThiArr.length; i++) {
                    if (this.currentRect == this.rectThiArr[i]) {
                        this.rectThiArr.splice(i, 1);
                    }
                }
                return;
            }
        }
        var moveY = 0;
        var isGo = false;
        if (this.isMove == true) {
            var timeX = 0;
            // if(this.currentRect != null){
            timeX = Math.abs(this.currentRect.x - (e.target.x + 180));
            // }
            if (e.target.x == this.first.x) {
                if (this.rectFirArr.length > 0) {
                    var min = this.rectFirArr[0];
                    for (var i = 1; i < this.rectFirArr.length; i++) {
                        if (min.width > this.rectFirArr[i].width) {
                            min = this.rectFirArr[i];
                        }
                    }
                    if (this.currentRect.width < min.width) {
                        isGo = true;
                    }
                    else {
                        isGo = false;
                    }
                }
                else {
                    isGo = true;
                }
                if (isGo) {
                    moveY = 540 - this.rectFirArr.length * 30;
                    egret.Tween.get(this.currentRect).to({ x: e.target.x + 180 }, timeX)
                        .to({ y: moveY }, moveY);
                    this.rectFirArr.push(this.currentRect);
                    this.currentRect = null;
                    this.isMove = false;
                    isGo = false;
                    this.steps += 1;
                    this.stepsLabel.text = "步数:" + this.steps;
                }
            }
            if (e.target.x == this.second.x) {
                if (this.rectSecArr.length > 0) {
                    var min = this.rectSecArr[0];
                    for (var i = 1; i < this.rectSecArr.length; i++) {
                        if (min.width > this.rectSecArr[i].width) {
                            min = this.rectSecArr[i];
                        }
                    }
                    if (this.currentRect.width < min.width) {
                        isGo = true;
                    }
                    else {
                        isGo = false;
                    }
                }
                else {
                    isGo = true;
                }
                if (isGo) {
                    moveY = 540 - this.rectSecArr.length * 30;
                    egret.Tween.get(this.currentRect).to({ x: e.target.x + 180 }, timeX)
                        .to({ y: moveY }, moveY);
                    this.rectSecArr.push(this.currentRect);
                    this.currentRect = null;
                    this.isMove = false;
                    isGo = false;
                    this.steps += 1;
                    this.stepsLabel.text = "步数:" + this.steps;
                }
            }
            if (e.target.x == this.third.x) {
                if (this.rectThiArr.length > 0) {
                    var min = this.rectThiArr[0];
                    for (var i = 1; i < this.rectThiArr.length; i++) {
                        if (min.width > this.rectThiArr[i].width) {
                            min = this.rectThiArr[i];
                        }
                    }
                    if (this.currentRect.width < min.width) {
                        isGo = true;
                    }
                    else {
                        isGo = false;
                    }
                }
                else {
                    isGo = true;
                }
                if (isGo) {
                    moveY = 540 - this.rectThiArr.length * 30;
                    egret.Tween.get(this.currentRect).to({ x: e.target.x + 180 }, timeX)
                        .to({ y: moveY }, moveY);
                    this.rectThiArr.push(this.currentRect);
                    this.currentRect = null;
                    this.isMove = false;
                    this.steps += 1;
                    this.stepsLabel.text = "步数:" + this.steps;
                }
            }
        }
    };
    Game.prototype.update = function () {
        this.time++;
        if (this.time % 60 == 0) {
            this.timer++;
            this.timeLabel.text = "时间:" + this.timer + "秒";
        }
        if (this.rectThiArr.length >= this.rectNum) {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.begin, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.update, this);
        }
    };
    Game.prototype.drawRect = function (num) {
        for (var i = 0; i < num; i++) {
            var rect = new egret.Shape();
            rect.graphics.lineStyle(5, 0x000000);
            rect.graphics.beginFill(0xff0000, 1);
            rect.graphics.drawRect(0, 0, 300 - 60 * i, 30);
            rect.graphics.endFill();
            this.addChild(rect);
            rect.anchorOffsetX = rect.width * 0.5;
            this.rectFirArr.push(rect);
            this.rectFirArr[i].x = 230;
            this.rectFirArr[i].y = 540 - i * 30;
            this.rectFirArr[i].width = 300 - 60 * i;
        }
        this.currentRect = this.rectFirArr[0];
        for (var i = 1; i < this.rectFirArr.length; i++) {
            if (this.currentRect.width > this.rectFirArr[i].width) {
                this.currentRect = this.rectFirArr[i];
            }
        }
    };
    return Game;
}(eui.Component));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map