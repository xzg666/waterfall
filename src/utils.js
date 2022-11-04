// 最小值获取
function getMin(arr) {
    let _arr = [];

    for (let j = 0; j < arr.length; j++) {
        // 属性处理
        _arr.push(arr[j]);
    }
    return _arr.sort((a, b) => a - b)[0];
}

// 防抖 - 时间差
function debounce(fn, wait) {
    let timer = null;

    return function() {
        if (timer) {
            clearTimeout(timer);
            setTimeout(fn, wait);
        }
    }
}

// 节流 - 时延
function throttle(fn, delay) {
    let prev = Date.now();

    return function() {
        let context = this,
        args = arguments,
        now = Date.now();

        if (now - prev >= delay) {
            fn.apply(context, args);
            prev = Date.now();
        }
    }
}

export {
    getMin,
    debounce,
    throttle
}