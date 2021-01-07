<template>
  <div >
      <el-row :gutter="20">
        <el-col :span="5">
          <div class="grid-content bg-purple"><img src="./../assets/logo.png"/></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple" style="font-size: 22px;" @click="findAllCls"><i class="el-icon-tickets"
                                                                                              style="font-size: 40px;margin-top:10px;"></i>分类
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="搜索课程" style="width: 220px;"></el-input>
            <el-button type="primary" icon="el-icon-search" style="float: right;height: 50px;margin-right: 50px;"
                       @click="onSubmit">搜索
            </el-button>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">

            <el-dropdown style="line-height: 50px;">
            <span class="el-dropdown-link" style="font-size: 18px">
            入驻/合作
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <el-link href="https://ke.qq.com/download/pcapp.html" target="_blank">个人入驻</el-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-link href="https://ke.qq.com/download/pcapp.html" target="_blank">企业入驻</el-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-link href="https://ke.qq.com/download/pcapp.html" target="_blank">分销课程</el-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-link href="https://ke.qq.com/download/pcapp.html" target="_blank">企业合作</el-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">

            <el-dropdown style="line-height: 50px;">
            <span class="el-dropdown-link" style="font-size: 18px;">
            客户端
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <el-link href="https://ke.qq.com/download/pcapp.html" target="_blank">WIN客户端</el-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-link href="https://ke.qq.com/download/macapp.html" target="_blank"> Mac客户端</el-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-link href="https://ke.qq.com/download/app.html" target="_blank"> App客户端</el-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">

            <el-dropdown style="line-height: 50px;">
            <span class="el-dropdown-link" style="font-size: 18px">
            登陆/注册
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <el-link href="https://ke.qq.com/download/pcapp.html" target="_blank">登陆</el-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-link href="https://ke.qq.com/download/pcapp.html" target="_blank">注册</el-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-link href="https://ke.qq.com/download/pcapp.html" target="_blank">退出登陆</el-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    <el-breadcrumb separator-class="iconfont" style="margin-left: 100px ;height:50px; ">
      <el-breadcrumb-item :to="{ path: '/' }" style="font-size: 20px">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/#/internet">IT互联网</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">设计创作</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">电商营销</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">职业考证</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">升学考研</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">兴趣生活</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/" style="color: black;font-size: 20px"><strong>语言留学</strong></a></el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="margin-left: 100px" >
      <el-col :span="5" v-for="o in clslist" :key="o" style="width: 240px;">
        <el-card :body-style="{ padding: '0px' }" style="width: 220px;height: 200px;margin-top: 20px;margin-left: 20px">
          <img :src="o.image" class="image"style="height: 124px;width: 220px">
          <div style="padding: 0px;">
            <!-- <span style="display: inline-block ;width: 200px;line-height: 20px;height: 50px">{{o}}</span>-->
            <div class="bottom clearfix" style="font-size: 10px;width: 200px" >
              <div >{{o.clsname}}</div>
              <div style="display: inline-block ">{{o.organname}}/{{ o.clsbyte}}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
   <!-- <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.page"
        :page-size="params.size"
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>-->
  </div>

</template>

<script>
  import axios from 'axios';
  export default {
    name: "",
    data() {
      return {
        clsName:"互联网产品",
        clslist:[
          1,2,3,4,
          "hhhhhh11111111111111111111111111111111111111111111111111111111111111",
          "sdfsfas",
          "sdfasdf",
          "sdfasdfas"
        ],
        /*params: {
          page: 1,
          size: 10,
        },
        total: 100,*/
        currentDate: new Date()
      };
    },
    methods:{
      handleSizeChange(val) {
        this.params.size=val;
      },
      handleCurrentChange(val) {
        this.params.page=val;
      }
    },
    mounted(){
       axios.post("http://localhost:7000/class/findAll").then(res=>{
         if(res.data.code==200){
           this.clslist=res.data.data;
          /* this.total=this.data.total;*/
         }
       })

    }
  }
</script>

<style scoped>
  .el-input input {
    height: 50px;
  }

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {

    border-radius: 4px;
  }

  .bg-purple img {
    height: 60px;
    width: 200px;
  }

  a{
    margin-left: 30px;
    font-size: 20px;
  }
  .el-card{
    width: 300px  ;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

