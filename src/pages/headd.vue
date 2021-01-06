<template>
    <div class="lay">
      <div class="one" >
        <img src="https://9.idqqimg.com/edu/logo192-3x_621b1c1fc1dd9a9eff1800acff237e5c.png#unsprite"/>
      </div>
      <!--<div class="el-icon-notebook-2" @mouseover="mouseover" @mouseleave="mouseleave" @click="click">-->
        <!--分类-->
      <!--</div>-->
      <div class="block">
        <!--<span class="demonstration">hover 触发子菜单</span>-->
        <el-cascader
          style="width: 100px; height: 10px"
          placeholder="目录"
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"></el-cascader>
      </div>
      <div class="three">
        <el-input v-model="input" placeholder="搜索课程" style="width: 235px;height: 50px"></el-input>
        <el-button type="primary" @click="search" icon="el-icon-search">搜索</el-button>
      </div>
      <div class="four"></div>
      <div class="five" @click="click">
        登录
      </div>
    </div>
</template>

<script>
  // import axios from 'axios';
    export default {
        name: "",
      data(){
          return {
            input: '',
            value: [],
            options: [{
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
              }, {
                value: 'daohang',
                label: '导航',
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
              }, {
                value: 'form',
                label: 'Form',
              }, {
                value: 'data',
                label: 'Data',
              }, {
                value: 'notice',
                label: 'Notice',
              }, {
                value: 'navigation',
                label: 'Navigation',
              }, {
                value: 'others',
                label: 'Others',
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
              }]
            }]
          };
      },
      methods:{
        click(){

        },
       handleChange(value) {
        console.log(value);
    },
        search:function () {

        }
    }
    }
</script>

<style scoped>
  .five{
    line-height: 80px;
  }

  .four{
    font-size: 14px;
    margin-right: auto;
    width: 350px;
    height: 80px;
    float: left;
  }

  .three{
    height: 80px;
    width: 435px;
    float: left;
    text-align: center;
    line-height: 80px;
  }

  .block{
    width: 166px;
    height: 80px;
    font-size: 25px;
    text-align: center;
    line-height: 80px;
    float: left;
    /*background-color: cornflowerblue;*/
  }

  .one img{
    width: 192px;
    height: 80px;
  }

  .one{
    width: 202px;
    height: 80px;
    margin-left: 180px;
    float: left;
  }

  .lay{
    height: 80px;
  }

</style>
