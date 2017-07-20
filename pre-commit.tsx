let exec = require('child_process').exec;
let fs = require('fs');
let errTip = ['还存在很多错误的地方哦！，避免隐患，还是现在改了吧！', '哎呀呀！还有错误哦！'];
let successTip = ['不错哦！加油！', '赞！', '棒棒哒！'];
let lint = function(cb) {
    exec('tslint --project tsconfig.json --format stylish', function(error, stdout, stderr) {
        if(stdout) {
            console.log('\x1B[31m%s',errTip[Math.floor(errTip.length*Math.random())]);
            console.log('\x1B[37m', stdout);
            cb(1);
            return;
        }
        cb(0);
    });
}

let taskList = [lint];

let task = function() {
    if(!taskList.length) {
        console.log('\x1B[32m%s', successTip[Math.floor(successTip.length*Math.random())]);
        process.exit(0);
        return;
    }
    let func = taskList.shift();
    func(function(pass) {
        if(pass === 1) {
            process.exit(1);
            return;
        }
        task();
    });
}

let startTask = function() {
    console.log('开始检查代码咯！O(∩_∩)O~\n');
    task();
}

startTask();
