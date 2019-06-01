<template>
    <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
            <slot name='selects'/>
            <el-table-column
            prop="num"
            label="#"
            sortable
            width="60">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            sortable
            width="120">
            </el-table-column>
            <el-table-column
            prop="sex"
            label="性别"
            sortable
            width="102">
            </el-table-column>
            <el-table-column
            prop="age"
            label="年龄"
            sortable
            width="100">
            </el-table-column>
            <el-table-column
            prop="date"
            label="生日"
            sortable
            width="122">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址"
            sortable
            :formatter="formatter">
            </el-table-column>
            
            <slot name='adds'/>
    </el-table>
</template>

<script>
export default {
data() {
        return {
            input: '',
            tableData: [{
            num:1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            sex:'男',
            age:25
            }, {
            num:2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            sex:'男',
            age:25
            }, {
            num:3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            sex:'男',
            age:25
            }, {
            num:4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            sex:'男',
            age:25
            }]
        }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            }
        },
}
</script>

<style lang='stylus'>
.el-col-20{
        padding-top:24px;
    }
    .el-table--fit{
        border-top:1px solid #dfe6ec;
        border-left:1px solid #dfe6ec;
        border-right:1px solid #dfe6ec;
    }
    .el-table__header-wrapper{
        .has-gutter{
            tr{
                height:40px;
                th{
                    background:#eef1f6;
                    padding:3px 0;
                    .cell{
                        color:#000;
                    }
                }
            }
        }
    }
    .el-table__body-wrapper{
        .el-table__row{
            height:39px;
            font-size:16px;
            color:#1f2d3d;
            .el-table_1_column_1{
                padding:0;
            }
        }
    }
</style>
