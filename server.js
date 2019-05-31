let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


app.listen(8084,() => {
    console.log('app is running');
})


//登录接口
app.get('/login',(req,res) => {
    let userReg = /^[a-zA-Z0-9_-]{4,16}$/;
    let passReg = /^[\w]{6,12}$/;
    console.log(req.body);
    if(req.body.userName === '') {
        res.send({
            msg: '用户名不能为空1'
        })
    }else if(!userReg.test(req.body.userName)){
        res.send({
            msg: '用户名不正确1'
        })
    }else {
        if(req.body.userPass === '') {
            res.send({
                msg: '密码不能为空1'
            })
        }else if(!passReg.test(req.body.userPass)) {
            res.send({
                msg: '密码不正确1'
            })
        }else {
            res.send({
                msg: '登录成功!',
                userId: 001
            })
        }
        
    }
})