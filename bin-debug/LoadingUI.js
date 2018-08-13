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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.created = false;
        _this.complete = false;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = "skins.loadingSkin";
        _this.state = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        return _this;
    }
    LoadingUI.prototype.onProgress = function (current, total) {
        if (this.thumb) {
            this.thumb.percentWidth = Math.round(current / total * 100);
            this.labelDisplay.text = "\u52A0\u8F7D\u4E2D(" + Math.round(current / total * 100) + "%)";
        }
    };
    LoadingUI.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.created = true;
        this.checkState();
    };
    LoadingUI.prototype.onComplete = function () {
        this.complete = true;
        this.checkState();
    };
    LoadingUI.prototype.checkState = function () {
        if (this.created && this.complete) {
            this.resolve();
        }
    };
    LoadingUI.prototype.ready = function () {
        return this.state;
    };
    return LoadingUI;
}(eui.Component));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
