<template>

  <div style="margin-left: 100px">
    <el-breadcrumb separator-class="iconfont" style="margin-left: 20px ;margin-right: 40px">
      <el-breadcrumb-item :to="{ path: '/' }" style="font-size: 20px">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">IT互联网</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">设计创作</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">电商营销</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">职业考证</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">升学考研</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">兴趣生活</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/" style="color: black;font-size: 20px"><strong>语言留学</strong></a></el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="6" v-for="o in clslist" :key="o">
        <el-card :body-style="{ padding: '10px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 0px;">
           <!-- <span style="display: inline-block ;width: 200px;line-height: 20px;height: 50px">{{o}}</span>-->
            <div class="bottom clearfix">
              <div style="display: inline-block ">{{o}}</div>
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
        currentDate: new Date()
      };
    },
    methods:{

    },
    mounted(){
       axios.post("http://localhost:7000/class/clsName").then(res=>{
         if(res.data.code==200){
           this.clslist=res.data.data;
         }
       })

    }
  }
</script>

<style scoped>
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

