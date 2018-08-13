var uiActions;
(function (uiActions) {
    function showPopup(params) {
        dispatchers.uiDispatcher.dispatchEvent(new egret.Event(dispatchers.UIEvents.SHOW_POPUP, false, false, params));
    }
    uiActions.showPopup = showPopup;
})(uiActions || (uiActions = {}));
