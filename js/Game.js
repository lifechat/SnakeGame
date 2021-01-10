/**
 * 主类 game类
 * @author xiaqi17
 * @time 2021 10
 * **/
function Game() {
    //行数
    this.row = 20;
    //列数
    this.col = 20;
    // 定时器
    this.timer = null;
    this.init(); //调用初始化函数
    this.food = new Food();
    // 实例化蛇类
    this.snake = new Snake();
    // 执行定时器操作，进行开始蛇的动作
    this.start();
    // this.snake.render();
    this.bindEvent();
}
Game.prototype.init = function() {
    this.dom = document.createElement("table");
    var tr, td;
    //遍历行，创建节点树
    for (var i = 0; i < this.row; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < this.col; j++) {
            td = document.createElement("td");
            // 追加元素到tr
            // console.log(tr);
            tr.appendChild(td)
        }
        // 将元素追加到table里面
        this.dom.appendChild(tr);
    }
    // 表格追加到table主容器
    document.getElementById("app").appendChild(this.dom)
}

// 画布的重绘
Game.prototype.clear = function() {
    // 遍历表格，擦除画布
    for (var i = 0; i < this.row; i++) {
        for (var j = 0; j < this.col; j++) {
            this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background = "white";
        }
    }
};
// 设置蛇的颜色
Game.prototype.setColor = function(row, col, color) {
    // 让表格的第几行，第几列设定颜色
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color;
};
Game.prototype.bindEvent = function() {
    var self = this;
    // 键盘事件
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                // 按左键
                if (self.snake.direction == 'R') return;
                self.snake.changeDirection("L")
                break;
            case 38:
                if (self.snake.direction == 'D') return;
                // 按上键
                self.snake.changeDirection("U")
                break;
            case 39:
                // 按右键
                if (self.snake.direction == 'L') return;
                self.snake.changeDirection("R")
                break;
            case 40:
                if (self.snake.direction == 'U') return;
                // 按下键
                self.snake.changeDirection("D")
                break;
            default:
                break;
        }
    }
}
Game.prototype.start = function() {
    var timer = setInterval(function() {
        // 定时器，清屏，更新，渲染
        // 蛇的运动
        game.clear();
        game.snake.update();
        game.snake.render();
    }, 1000)
}