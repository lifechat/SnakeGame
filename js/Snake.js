/**
 * 蛇类 snake类
 * @author xiaqi17
 * @time 2021 10
 * **/

function Snake() {
    this.body = [
        { "row": 3, "col": 5 },
        { "row": 3, "col": 4 },
        { "row": 3, "col": 3 },
        { "row": 3, "col": 2 },
    ];
    this.direction = "R";
    // 即将改变方向，目前为了方向hon重新掉头的情况
    this.willDirection = "R"
}
// 蛇的运动
Snake.prototype.update = function() {
    this.direction = this.willDirection;
    switch (this.direction) {
        case "R":
            // 向右移动
            this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col + 1 });
            break;
        case "U":
            // 向上移动
            this.body.unshift({ "row": this.body[0].row - 1, "col": this.body[0].col });
            break;
        case "L":
            // 向左移动
            this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col - 1 });
            break;
        case "D":
            // 向下移动
            this.body.unshift({ "row": this.body[0].row + 1, "col": this.body[0].col });
            break;
        default:
            break;
    }
    // 死亡的判断
    if (this.body[0].col > game.col - 1 || this.body[0].row > game.row - 1 || this.body[0].col < 0 || this.body[0].row < 0) {
        alert("死亡");
        this.body.shift();
        clearInterval(game.timer)
    }
    // 判定自己撞到自己
    for (var i = 0; i < this.body.length; i++) {
        if (this.body[0].col == this.body[i].col && this.body[0].row == this.body[i].row) {
            alert("死亡")
            this.body.shift();
            clearInterval(game.timer);
        }
    }
    // 蛇的不同方向的运动
    this.body.pop();

};
Snake.prototype.changeDirection = function(d) {
    this.willDirection = d;
};
// 蛇的渲染
Snake.prototype.render = function() {
    // console.log(game);
    game.setColor(this.body[0].row, this.body[0].col, 'pink')

    for (var i = 1; i < this.body.length; i++) {
        game.setColor(this.body[i].row, this.body[i].col, 'cyan')
    }
}