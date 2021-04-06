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
var DrawRect = (function (_super) {
    __extends(DrawRect, _super);
    function DrawRect(num, PosX) {
        var _this = _super.call(this) || this;
        _this.rectArr = [];
        _this.cont = 0;
        _this.cont = num;
        for (var i = 0; i < num; i++) {
            var rect = new egret.Shape();
            rect.graphics.lineStyle(5, 0x000000);
            rect.graphics.beginFill(0xff0000, 1);
            rect.graphics.drawRect(PosX, 540 - i * 30, 300 - 60 * i, 30);
            rect.graphics.endFill();
            _this.addChild(rect);
            _this.rectArr.push(rect);
            rect.anchorOffsetX = rect.width * 0.5;
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.begin, _this);
        }
        return _this;
    }
    DrawRect.prototype.begin = function (e) {
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    DrawRect.prototype.update = function () {
        for (var i = 0; i < this.cont; i++) {
            this.rectArr[0].y -= 10;
            // if(this.rectArr[0].y <= 600)
            // {
            // 	this.rectArr[i].y = 100;
            // }
            egret.log(this.rectArr[i].y);
        }
    };
    return DrawRect;
}(eui.Component));
__reflect(DrawRect.prototype, "DrawRect");
//# sourceMappingURL=DrawRect.js.map