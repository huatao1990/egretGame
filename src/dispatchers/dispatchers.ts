namespace dispatchers {
    export const uiDispatcher = new egret.EventDispatcher();
    export const storeDispatcher = new egret.EventDispatcher();

    export const UIEvents = {
        "SHOW_POPUP": "SHOW_POPUP",
        "GOTO_SCENE": "GOTO_SCENE"
    }
}
