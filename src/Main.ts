class Main extends eui.UILayer {
    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            document.addEventListener("qbrowserVisibilityChange", function(e:any){
                if (e.hidden){
                    context.pause();
                } else {
                    context.resume();
                };
            });
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        this.loadResource();
    }

    private async loadResource() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("init", 0);
            let loadingView = new LoadingUI();
            this.addChild(loadingView);
            await loadingView.ready();
            await fontController.loadFont("resource/assets/number/kitty_coin.fnt");
            await RES.loadGroup("preload", 0, loadingView);
            //this.removeChild(loadingView);
            //loadingView = null;
            // TODO goto game scene
        } catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);
        })
    }

    // private async runGame() {
    //     await this.loadResource()
    //     await platform.login();
    //     const userInfo = await platform.getUserInfo();
    //     console.log(userInfo);
    // }
}
