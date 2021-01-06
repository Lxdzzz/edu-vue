<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5">
        <div class="grid-content bg-purple"><img src="./../assets/logo.png"/></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple" style="font-size: 22px;"@click="findAllCls"><i class="el-icon-tickets"
                                                                        style="font-size: 40px;margin-top:10px;" ></i>分类
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-input v-model="input" placeholder="搜索课程" style="width: 235px;"></el-input>
          <el-button type="primary" icon="el-icon-search" style="float: right;height: 50px;margin-right: 50px;" @click="onSubmit">搜索
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
    <el-container>
      <el-header style="height: 350px">
        <div>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in itemlist" :key="item">
              <img :src="item" style="width: 100%"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-header>
      <el-main style="margin: auto;font-size: 30px;">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"text-color="#000000"  active-text-color="#0081E6">
          <el-menu-item index="1">前沿技术</el-menu-item>
          <el-menu-item index="2">互联网产品</el-menu-item>
          <el-menu-item index="3">JAVA开发</el-menu-item>
          <el-menu-item index="4">后台开发</el-menu-item>
          <el-menu-item index="5">移动开发</el-menu-item>
          <el-menu-item index="6">大数据与AI</el-menu-item>
          <el-menu-item index="7">兴趣职场</el-menu-item>
        </el-menu>
      </el-main>
    </el-container>

    <el-container>
      <el-main>
        <div v-if="this.jishu1">
          <qianyan></qianyan>
        </div>
        <div v-if="this.jishu2">
          <internet></internet>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import qianyan from "@/pages/qianyan.vue";
  import internet from "@/pages/internet.vue";
  import axios from "axios";

  export default {
    name: '',
    components: {
      qianyan,
      internet
    },
    data() {
      return {
        input:'',
        activeIndex: '1',
        jishu1: true,
        jishu2: false,
        jishu3: false,
        jishu4: false,
        jishu5: false,
        jishu6: false,
        jishu7: false,
        jishu8: false,
        activeName: 'second',
        itemlist: [
          "http://qlby72am6.hb-bkt.clouddn.com/FgmPvAcGaw1UFALJSyR3VDde9eBr",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608200809172&di=032e99aa26aea1db61d30a358bb599f7&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Fnuomi%2Fpic%2Fitem%2F0e2442a7d933c8950977a723d91373f082020058.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608200791659&di=56ebc529d45c1def8f1f97f2a855a5e4&imgtype=0&src=http%3A%2F%2Fimg02.saifutong.com%2F20150519%2F201505190438157587.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608200835467&di=525a166552a703fd601ed76a568b5923&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170414%2F3853b0d543d640c5b6867efde490f58f_th.jpeg"
        ]

      }
    },
    methods: {
      findAllCls:function(){
        /*axios.post("http://localhost:7000/class/findAllCls").then(res=>{
          if(res.data.code==200) {*/
            this.$router.push("/internet")
        /*  }
        })*/
      },
      onSubmit:function(){
        axios.post("http://localhost:7000/class/findByClsName",{input:this.input}).then(res => {
            if(res.data.code==200){
                this.$router.push("/class")
            }
        })
      },
      handleSelect(key, keyPath) {
        if (key == 1) {
          this.jishu1 = true;
          this.jishu2 = false;
          this.jishu3 = false;
          this.jishu4 = false;
          this.jishu5 = false;
          this.jishu6 = false;
          this.jishu7 = false;
          this.jishu8 = false;
        }else if (key == 2) {
          this.jishu1 = false;
          this.jishu2 = true;
          this.jishu3 = false;
          this.jishu4 = false;
          this.jishu5 = false;
          this.jishu6 = false;
          this.jishu7 = false;
          this.jishu8 = false;
        }else if (key == 3) {
          this.jishu1 = false;
          this.jishu2 = false;
          this.jishu3 = true;
          this.jishu4 = false;
          this.jishu5 = false;
          this.jishu6 = false;
          this.jishu7 = false;
          this.jishu8 = false;
        }

      }
    }
  }
</script>

<style>
  .el-menu-item {
    font-size: 30px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-dropdown-link {
    cursor: pointer;
  }

  .el-icon-arrow-down {
    font-size: 22px;
  }

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
    margin-left: 100px;
    height: 60px;
    width: 200px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    /* background: #d3dce6;*/
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-header, .el-footer {

    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
