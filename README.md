# waterfall
### 瀑布流
#### 概念
找寻当前最矮项目，后一项接在这里
=> 视图顺序与数据顺序不相关

##### 面试过程
两列 => 三列 => 列表 => 瀑布流 => ?

##### 核心 => 动态计算
思路一： 处理数据 => 动态站队
思路二： 布局 —— 位置特异化 => 优先考虑absolute布局

##### 思考：
* 1. absolute布局 => 标记点 => 查找当前状态
* 2. 找到最矮的那一项 => 优先普通左到右布局第一行 
* 3. 拆分第一行 和 后续行的逻辑

=> 
* 拆分
1. 首行按顺序布局
2. 拆分firstLine & otherLines
3. 计算第一行能够摆个数

* 摆放逻辑
1. 找现阶段最矮的那一列 => []
2. 查找首行高度最小元素little
3. 设置
    => 后续内容absolute定位
    => left设置为little的left + top设置成little的高度加边距
    => 更新新的little
4. 重复3操作

##### 后续思考
1. 图片加载一次性 => 瀑布流 + 懒加载
2. 抽象加载层，实现业务接入懒加载
3. 实现滚动实时懒加载

##### 后后续 => 防抖 & 节流
1. 概念：
滚动快速 => 不会引发重复的触发
快速提交的时候 => 重复的影响

##### 后后后续 => 设计模式
单页面展示需求 + 涉及冗余多实例的情况 => 切换单例

=> 追问： 实例中有数据需要被更新


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
