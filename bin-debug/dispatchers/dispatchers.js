var dispatchers;
(function (dispatchers) {
    dispatchers.uiDispatcher = new egret.EventDispatcher();
    dispatchers.storeDispatcher = new egret.EventDispatcher();
    dispatchers.UIEvents = {
        "SHOW_POPUP": "SHOW_POPUP",
        "GOTO_SCENE": "GOTO_SCENE"
    };
})(dispatchers || (dispatchers = {}));
