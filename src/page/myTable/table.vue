<template>
	<div class='myFrom'>
		<el-row>
			<el-col :span='20'>
				<p class='title' >Form</p>
				<div class='main'>
				<div class='wrap'>
					<span>活动名称</span>
					<el-input v-model='myInput'></el-input>
				</div>
				<div class='wrap'>
					<span>活动区域</span>
					<el-select placeholder="请选择" v-model='mySelect'>
					    <el-option value='选项一'>
					    	
					    </el-option>
					    <el-option value='选项二'> </el-option>
					    	
					    <el-option value='选项三'>
					    	
					    </el-option>
					</el-select>
				</div>
				<div class='wrap'>
					<span>活动时间</span>
				    <el-date-picker  placeholder="选择日期" width='259px'v-model="datePicker">
				    </el-date-picker>			
					<el-time-select picker-options="{
					    start: '08:30',
					    step: '00:15',
					    end: '18:30'
					  }"
					  placeholder="选择时间" width='259px' v-model='timeDatePicker'>
					</el-time-select>
				</div>
				<div class='wrap'>
					<span>及时配送</span>
					<el-switch
					  active-color="#13ce66"
					  inactive-color="#ff4949" v-model="mySwitch"> 
					</el-switch>
				</div>
				<div class='wrap'>
					<span>活动性质</span>
					<el-checkbox-group v-model="checkList">
					    <el-checkbox label="美食/餐厅线上活动"></el-checkbox>
					    <el-checkbox label="地推活动"></el-checkbox>
					    <el-checkbox label="线下主题活动"></el-checkbox>
					    <el-checkbox label="单纯品牌曝光" disabled></el-checkbox>
					</el-checkbox-group>
				</div>
				<div class='wrap'>
					<span>特殊资源</span>
					<el-radio-group v-model="radios">
					    <el-radio :label="3">线上品牌商赞助</el-radio>
					    <el-radio :label="6">线下场地免费</el-radio>
					</el-radio-group>
				</div>
				<div class='wrap textareas'>
					<span>活动形式</span>
					<el-input type='textarea' v-model='myTextarea'></el-input>
					
				</div>
				<div class='wrap end'>
					 <el-button type="success">立即创建</el-button>
					  <el-button>取消</el-button>
				</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import {Layout,Input,Select,DatePicker,DateTimePicker,Switch,Checkbox,Radio,Button} from 'element-ui'
	export default {
		name:'myForm',
		data(){
			return {
				myInput:'',
				mySelect:'',
				datePicker:'',
				timeDatePicker:'',
				mySwitch:false,
				checkList:'',
				radios:3,
				myTextarea:''
			}
		}
	}
</script>

<style lang='stylus'>
	.myFrom{
		text-align:left
		.title{
			height:58px
			line-height:58px
			font-weight:bold
			color:#000
			text-indent:22px
			font-size:16px
			
		}
		.main{
				padding-left:40px
				width:648px
				.wrap{
					display:flex
					
					align-items: center
					margin-bottom:22px
					&>span{
						padding:0 13px
					}
					div{
						flex:1
					}
					&.end{
						padding-left:87px
					}
					&.textareas{
						align-items:start;
					}
				}
			}
	}
</style>