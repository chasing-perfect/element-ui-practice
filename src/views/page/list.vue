<template>

<!-- <el-row :gutter="20"> -->
    <el-col :span="20">
        <titles :text='"列表"'></titles>
        <lists></lists>
    </el-col>
<!-- </el-row> -->

</template>

<script>
    import Titles from '@/components/base/title'
    import Lists from '@/components/base/list'
    export default {
        components:{
            Titles,
            Lists
        }
    }
</script>
<style lang='stylus' scoped>
    .el-col{
        padding:20px 20px;
    }
</style>
