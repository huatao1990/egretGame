
namespace uiActions {
    export function showPopup(params:any) {
        dispatchers.uiDispatcher.dispatchEvent(new egret.Event(dispatchers.UIEvents.SHOW_POPUP, false, false, params));
    }
}
