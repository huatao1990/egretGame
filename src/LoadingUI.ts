class LoadingUI extends eui.Component implements RES.PromiseTaskReporter {
    private thumb: eui.Image;
    private labelDisplay: eui.Label;
    private state: Promise<Function>;
    private resolve: Function;
    private reject: Function;

    private created = false;
    private complete = false;

    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
        this.skinName = "skins.loadingSkin";
        this.state = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        })
    }

    public onProgress(current: number, total: number): void {
        if (this.thumb) {
            this.thumb.percentWidth = Math.round(current / total * 100);
            this.labelDisplay.text = `加载中(${Math.round(current / total * 100)}%)`
        }
    }

    protected createChildren() {
        super.createChildren();
        this.created = true;
        this.checkState();
    }

    private onComplete():void{
        this.complete = true;
        this.checkState();
    }

    private checkState() {
        if (this.created && this.complete) {
            this.resolve();
        }
    }

    public ready() {
        return this.state;
    }
}
