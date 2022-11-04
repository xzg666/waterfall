import { getMin } from '../utils';

class WaterFall {
    constructor() {
        // 获取页面布局信息
        const abox = document.querySelectorAll('.box');
        const cont = document.querySelector('.cont');
        const clientW = document.documentElement.clientWidth;//视图宽

        this.clientW = clientW;
        this.abox = abox;
        this.cont = cont;
    }
    init() {
        // 计算每行摆放个数 = 屏幕的宽度 / 每个结构宽度
        this.maxNum = parseInt(
            this.clientW / this.abox[0].offsetWidth,
            10
        )
        // 反向根据一行摆放个数 * 图片宽度 => 真正的画框宽度
        this.cont.style.width = this.maxNum * this.abox[0].offsetWidth + 'px';

        // 完善初始化之后，行处理开始
        this.processFirstLine();
        this.processOtherLine();
    }
    processFirstLine() {
        // 布局完成第一行
        this.heightArr = [];
        for (let i = 0; i < this.maxNum; i++) {
            this.heightArr.push(
                this.abox[i].offsetHeight
            );
            // this.heightArr.push({
            //     height: this.abox[i].offsetHeight,
            //     index: index;
            // });
        }
    }
    processOtherLine() {
        // 需要遍历后续行所有元素集合,第二行开始
        for (let i = this.maxNum; i < this.abox.length; i++) {
            // 查找最小高度，并获取元素高度
            let min = getMin(this.heightArr);
            let minIndex = this.heightArr.indexOf(min);

            // 内容设置定位
            this.abox[i].style.position = "absolute";
            // 根据little设置参数
            // 1. top设置
            this.abox[i].style.top = min + 'px'; // 可自由添加间距
            // 2. left设置
            this.abox[i].style.left = minIndex * this.abox[0].offsetWidth + 'px';
            // 3. 更新当前项，老little + 现有新高度
            this.heightArr[minIndex] = this.heightArr[minIndex] + this.abox[i].offsetHeight;
        }
    }

    static getInstance() {
        if (!WaterFall._instance) {
            WaterFall._instance = new WaterFall();
        } 
        // else {
            // WaterFall.update(args)
        // }
        return WaterFall._instance;
    }

    // 单实例复用，数据更新
    // static update(args) {
    //     mount(...args);
    // }
}

export default WaterFall;