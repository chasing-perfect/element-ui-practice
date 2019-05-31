<template>
    <div class="login-from">
        <h3 class='login-title'>系统登录</h3>
        <span class="login-userMsg">{{msg}}</span>
        <p class='inpBox'><input type='text' class='login-textInp' v-model='userVal' ref='textInp'></p>
        <p class='inpBox'><input type='text' class='login-passInp' v-model='passVal' ref='passInp'></p>
        <p class='checkbox-Box'>
            <input type="checkbox" class='login-checkInp'>
            <span class='login-checkText'>记住密码</span>
        </p>
        <p class="btnBox">
            <input type="button" class='login-btn' value='登录' @click='login()'>
        </p>
    </div>
</template>
<script>
import  '@/assets/stylus/reset.styl'
export default {
    name: 'login',
    data() {
        return {
            //用户名
            userVal: '',
            //密码
            passVal: '',
            //用户提示信息
            msg: ''
        }
    },
    methods: {
        //点击登录做操作
        login() {
            //用户名,密码正则
            let userReg = /^[a-zA-Z0-9_-]{4,16}$/;
            let passReg = /^[\w]{6,12}$/;
            if(this.userVal === '') {
                this.msg = '用户名不能为空';
            }else if(!userReg.test(this.userVal)) {
                this.msg = '用户名输入不正确';
                this.userVal = ''
                this.$refs.textInp.focus();
            }else {
                this.msg = '用户名输入正确';
                //判断密码
                if(this.passVal === '') {
                    this.msg = '密码不能为空';
                }else if(!passReg.test(this.passVal)) {
                    this.msg = '密码不正确';
                    this.passVal = ''
                    this.$refs.passInp.focus();
                }else {
                    this.$http.get('/apis/login',{userName: 'this.userVal',userPass: 'this.passVal'}).then(res =>{
                        console.log(res.data.msg);
                        this.msg = res.data.msg;
                        console.log(res.data.userId)
                        localStorage.setItem('userId',res.data.userId)
                        this.$router.push({
                            path: '/index'
                        })

                    })

                }
            }
        }
    }
}
</script>
<style lang='stylus'>
    .login-from 
        width: 420px
        height: 342px
        border-radius: 4px
        box-sizing: border-box
        padding: 28px 35px
        text-align: center
        margin: 200px auto
        box-shadow: 0 0 9px 3px #ccc
        .login-title
            color: #505458
            font-size: 16px
            line-height: 16px
            margin-bottom: 28px
        .login-userMsg
            display: block
            font-size: 12px
            color: #ff0000
            height: 10px
        .inpBox
            width: 100%
            height: 34px
            margin-bottom: 22px
            .login-textInp,.login-passInp
                width: 100%
                height: 100%
                border: 1px solid #bfcbd9
                border-radius: 6px
                box-sizing: border-box
                padding-left: 10px
        .checkbox-Box
            height: 18px
            display: flex
            margin-bottom: 36px
            .login-checkInp
                border: 1px solid #0190fe
                width: 18px
                height: 18px
                margin-right: 4px
            .login-checkText
                color: #1f2d3d
                font-szie: 14px
        .btnBox
            width: 100%
            height: 36px
            .login-btn
                width: 100%
                height: 100%
                background: #20a0ff
                color: #fff
                font-size: 14px
                border-radius: 4px


</style>