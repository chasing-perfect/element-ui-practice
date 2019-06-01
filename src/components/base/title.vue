<template>
    <div class="titleBox">
        <div class="title">
            <span class="titleText">{{text}}</span>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>导航一</el-breadcrumb-item>
                <el-breadcrumb-item>{{text}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="inputBox">
            <el-input v-model="input" placeholder="姓名"></el-input>
            <el-button type="primary">查询</el-button>
            <slot name='newAddBtn'/>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type:String
        }
    },
    data(){
        return {
            input:''
        }
    }
}
</script>

<style lang='stylus'>
    .titleBox{
        .title{
            display:flex;
            justify-content:space-between;
            margin-bottom:17px;
            .titleText{
                font-size:14px;
                font-weight:bold;
                color:#475669;
            }
            .el-breadcrumb__inner{
                font-size:14px;
            }
            .el-breadcrumb__inner.is-link{
                font-size:14px;
                font-weight:200;
                color:#48576a;
            }
            .el-breadcrumb__separator{
                color:#97a8be;
            }
            .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner{
                color:#97a8be;
                font-size:14px;
            }
        }
        .inputBox{
            display:flex;
            align-items:center;
            height:57px;
            background:#f2f2f2;
            padding-top:22px;
            margin-bottom:10px;
            .el-input{
                width:204px;
                margin-left:10px;
                margin-right:14px;
                .el-input__inner{
                    height:36px;
                }
            } 
            .el-button--primary{
                width:60px;
                height:36px;
                padding:0;
            }
        }
    }
</style>
