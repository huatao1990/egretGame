namespace fontController {
    let _font:Object;

    // 回调方法 和 promise 方法的区别
    export async function loadFont(fontUrl:string) {
        return new Promise(function(resolve, reject) {
            RES.getResByUrl(fontUrl, function(font){
                _font = font;
                resolve(font);
            }, null, RES.ResourceItem.TYPE_FONT);
        })
    }

    export function getFont() {
        return _font;
    }
}
