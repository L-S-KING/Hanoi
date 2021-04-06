class DrawRect extends eui.Component{
	public constructor(num:number,PosX:number) {
		super();
		this.cont = num;
		for(let i=0;i<num;i++){
			var rect = new egret.Shape();
			rect.graphics.lineStyle(5,0x000000);
			rect.graphics.beginFill(0xff0000,1);
			rect.graphics.drawRect(PosX,540 - i * 30,300 - 60 * i,30);
			rect.graphics.endFill();
			this.addChild(rect);
			this.rectArr.push(rect);
			rect.anchorOffsetX = rect.width * 0.5;
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.begin, this);
		}
	}
	private rectArr:egret.Shape[] = [];
	private cont:number = 0;
	private begin(e:egret.TouchEvent){
				this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);

	}
	private update(){
		for(let i=0;i<this.cont;i++){
			this.rectArr[0].y -= 10;
			// if(this.rectArr[0].y <= 600)
			// {
			// 	this.rectArr[i].y = 100;
			// }
			egret.log(this.rectArr[i].y);
		}
	}
}