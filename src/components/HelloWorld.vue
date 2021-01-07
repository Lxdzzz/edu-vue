<template>
  <div>
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
    <el-container>
      <el-header style="height: 350px">
        <div>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in itemlist" :key="item">
              <img :src="item" style="width: 100% ;height: 350px"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-header>
      <el-main style="margin: auto;font-size: 30px;">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                 text-color="#000000" active-text-color="#0081E6">
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
        <div v-if="this.jishu3">
          <Javakaifa></Javakaifa>
        </div>
        <div v-if="this.jishu4">
          <houtai></houtai>
        </div>
        <div v-if="this.jishu5">
          <yidong></yidong>
        </div>
        <div v-if="this.jishu6">
          <AI></AI>
        </div>
        <div v-if="this.jishu7">
          <xinqu></xinqu>
        </div>
      </el-main>
      <el-footer>
        <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.热门知识.1" data-name="热门知识" data-report-module="热门知识" data-order="1" data-hasrender="true">
          <div class="container-1210" >
            <h1 style="font-size: 30px">
              热门知识
            </h1>
            <!-- <div class="short-gray-line"></div> -->
            <div >  <el-tabs>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane></el-tab-pane>
              <el-tab-pane label="IT·互联网" name="first" >
                <div style="height: 10px" >  <el-button round>mpacc培训</el-button>
                  <el-button round>linux培训</el-button>
                  <el-button round>微商培训</el-button>
                  <el-button round>html5培训</el-button>
                  <el-button round>淘宝运营培训</el-button>
                  <el-button round>游戏开发培训</el-button>
                  <el-button round>物联网培训</el-button>
                  <el-button round>算法工程师培训</el-button>
                  <el-button round>人工智能培训</el-button>
                </div><br>
                <el-button round>seo培训</el-button>
                <el-button round>ie工程师培训</el-button>
                <el-button round>安卓系统培训</el-button>
                <el-button round>asp培训</el-button>
                <el-button round>数控编程培训</el-button>
                <el-button round>产品培训</el-button>
                <el-button round>思维导图培训</el-button>
                <el-button round>程序员培训</el-button>
                <el-button round>营销培训</el-button>
                <el-button round>ios培训</el-button>
              </el-tab-pane>
              <el-tab-pane label="设计·创作" name="second">
                <div style="height: 10px" >  <el-button round>cad2014安装教程</el-button>
                <el-button round>服装设计培训</el-button>
                <el-button round>交互设计培训</el-button>
                <el-button round>视觉传达设计培训</el-button>
                <el-button round>ps教程</el-button>
                <el-button round>零基础素描培训</el-button>
                <el-button round>maya建模培训</el-button>
                <el-button round>ps去水印</el-button>
                <el-button round>ps怎么抠图</el-button>
              </div><br>
                <el-button round>平面培训</el-button>
                <el-button round>服装培训</el-button>
                <el-button round>ps快捷键</el-button>
                <el-button round>从零开始学习ps</el-button>
                <el-button round>婚纱设计培训</el-button>
                <el-button round>ps快速入门</el-button>
                <el-button round> ps怎么去水印</el-button>
                <el-button round>ps零基础学习</el-button>
                <el-button round>ps字体</el-button>
                <el-button round>ps笔刷</el-button></el-tab-pane>
              <el-tab-pane label="电商·营销" name="third">
                <el-button round>电商培训</el-button></el-tab-pane>
              <el-tab-pane label="职业·考证" name="fourth">
                <div style="height: 10px" >   <el-button round>注会培训</el-button>
                  <el-button round>工商管理培训</el-button>
                  <el-button round>会计培训</el-button>
                  <el-button round>财务管理培训</el-button>
                  <el-button round>财务分析培训</el-button>
                  <el-button round>工程测量员培训</el-button>
                  <el-button round>鲁班bim培训</el-button>
                  <el-button round>政法培训</el-button>
                  <el-button round>金融学培训</el-button>
                </div><br>
                <el-button round>出纳培训</el-button>
                <el-button round>cfa培训</el-button>
                <el-button round>造价培训</el-button>
                <el-button round>电焊培训</el-button>
                <el-button round>护师培训</el-button>
                <el-button round>播音主持培训</el-button>
                <el-button round> 美容师培训</el-button>
                <el-button round>主持培训</el-button>
                <el-button round>化妆师培训</el-button>
                <el-button round>艺考培训</el-button>
              </el-tab-pane>
              <el-tab-pane label="升学·考研" name="five">
                <div style="height: 10px" >   <el-button round>奥数培训</el-button>
                  <el-button round>小学奥数培训</el-button>
                  <el-button round>初中教育培训</el-button>
                  <el-button round>党员培训</el-button>
                  <el-button round>考研培训</el-button>
                  <el-button round>作文培训</el-button>
                  <el-button round>专升本培训</el-button>
                  <el-button round>手绘pop培训</el-button>
                  <el-button round>考研英语培训</el-button>
                </div><br>
                <el-button round>高中化学培训</el-button>
                <el-button round>医学考研培训</el-button>
                <el-button round>物理培训</el-button>
                <el-button round>英语四级培训</el-button>
                <el-button round>英语六级培训</el-button>
                <el-button round>速算培训</el-button>
              </el-tab-pane>
              <el-tab-pane label="兴趣·生活" name="six">
                <div style="height: 10px" >   <el-button round>寿司培训</el-button>
                  <el-button round>舞蹈培训</el-button>
                  <el-button round>唢呐培训</el-button>
                  <el-button round>拳击培训</el-button>
                  <el-button round>象棋培训</el-button>
                  <el-button round>音基培训</el-button>
                  <el-button round>周易培训</el-button>
                  <el-button round>尤克里里培训</el-button>
                  <el-button round>理发培训</el-button>
                  <el-button round>家常菜培训</el-button>
                </div><br>
                <el-button round>美容培训</el-button>
                <el-button round>爵士舞培训</el-button>
                <el-button round>乐高培训</el-button>
                <el-button round>体操培训</el-button>
                <el-button round>传统文化培训</el-button>
                <el-button round>银行从业资格培训</el-button>
                <el-button round>古典舞培训</el-button>
                <el-button round>皮肤管理培训</el-button>
                <el-button round>六爻培训</el-button>
                <el-button round>吉他培训</el-button>
              </el-tab-pane>
              <el-tab-pane label="语言·留学" name="seven">
                <div style="height: 10px" >   <el-button round>西班牙语培训</el-button>
                  <el-button round>托福培训</el-button>
                  <el-button round>雅思培训</el-button>
                  <el-button round>韩语培训</el-button>
                  <el-button round>法语培训</el-button>
                  <el-button round>意大利语培训</el-button>
                  <el-button round>雅思班培训</el-button>
                  <el-button round>俄语培训</el-button>
                  <el-button round>新概念英语培训</el-button>
                </div><br>
                <el-button round>雅思英语培训</el-button>
                <el-button round>幼儿英语培训</el-button>
                <el-button round>英孚英语培训</el-button>
                <el-button round>成人英语培训</el-button>
                <el-button round>一对一英语培训</el-button>
                <el-button round>英语培训</el-button>
                <el-button round>英语专八培训</el-button>
                <el-button round>toefl培训</el-button>
                <el-button round>情商培训</el-button>
              </el-tab-pane>
            </el-tabs>
            </div>
          </div></div></el-col>
        <el-col span="24">
          <div class="lay1" style="background-color: #424345;">
            <div class="one" style="font-size: 20px;height: 50px; color: #999999;">
              合作链接
            </div>
            <div class="two" style="height: 100px;width: 100%">
              <div class="two1"><a href="https://daxuepc.com/" >腾讯大学</a></div>
              <div class="two1"><a href="https://new.qq.com/ch/edu/" >腾讯网教育频道</a></div>
              <div class="two1"><a href="https://daxuepc.com/" >腾讯精品课</a></div>
              <div class="two1"><a href="https://cloud.tencent.com/?fromSource=gwzcw.788739.788739.788739">腾讯云</a></div>
              <div class="two1"><a href="https://qidian.qq.com/solutions/education02.html?">腾讯企点</a></div>
              <div class="two1"><a href="https://guanjia.qq.com/" >腾讯电脑管家</a></div>
              <div class="two1"><a href="https://cloud.tencent.com/product/ms" >腾讯御安全</a></div>
              <div class="two1"><a href="https://fm.qq.com/" >企鹅FM</a></div>
              <div class="two1"><a href="https://www.weiyun.com/">腾讯微云</a></div>
              <div class="two1"><a href="https://docs.qq.com/" >腾讯文档</a></div>
              <div class="two1"><a href="http://gameinstitute.qq.com/daxue" >腾讯游戏学院</a></div>        <div class="two1"><a href="http://www.hqwx.com/">环球网校</a></div>
              <div class="two1"><a href="https://daxuepc.com/">中华考试网</a></div>
              <div class="two1"><a href="https://daxuepc.com/">学神IT教育</a></div>
              <div class="two1"><a href="https://daxuepc.com/">云艺帆教育</a></div>
              <div class="two1"><a href="https://daxuepc.com/">为课网校</a></div>
              <div class="two1"><a href="https://daxuepc.com/">中大网校</a></div>
              <div class="two1"><a href="https://daxuepc.com/">益修学院</a></div>
              <div class="two1"><a href="https://daxuepc.com/">起点学院</a></div>
              <div class="two1"><a href="https://daxuepc.com/">人人都是产品经理</a></div>
              <div class="two1"><a href="https://daxuepc.com/" >公务员考试网</a></div>
              <div class="two1"><a href="https://daxuepc.com/" >新东方在线</a></div>
              <div class="two1"><a href="http://www.offcn.com/" >中公公务员网</a></div>
              <div class="two1"><a href="https://www.zxxk.com/" >学科网</a></div>
              <div class="two1"><a href="https://www.yuanhuaren.com/" >原画人</a></div>
              <div class="two1"><a href="https://www.wangyukt.com/">王宇课堂</a></div>
            </div>
            <div class="five">

            </div>
            <div class="six">
              <img src="http://qm3gjgvoy.hn-bkt.clouddn.com/a802e409b998cb8167a1a396579e3f0.png"/>
            </div>
            <div class="seven;"style="color: #999999;">
              Copyright © 2020 Tencent. All Rights Reserved.
            </div>
            <div class="eight;"style="color: #999999;">
              深圳市腾讯计算机系统有限公司版权所有|腾讯课堂服务协议|隐私政策|站点地图│侵权投诉|问题反馈|帮助|涨知识
            </div>
          </div>
        </el-col>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import qianyan from "@/pages/qianyan.vue";
  import internet from "@/pages/internet.vue";
  import AI from "@/pages/AI.vue";
  import houtai from "@/pages/houtai.vue";
  import Javakaifa from "@/pages/Javakaifa.vue";
  import xinqu from "@/pages/xinqu.vue";
  import yidong from "@/pages/yidong.vue";
  import axios from "axios";

  export default {
    name: '',
    components: {
      qianyan,
      internet,
      AI,
      houtai,
      Javakaifa,
      xinqu,
      yidong
    },
    data() {
      return {
        input: '',
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
          "https://p.qpic.cn/qqconadmin/0/02d64d9d9738413cb1a0f601312f358d/0?tp=webp",
          "https://p.qpic.cn/qqconadmin/0/1461859ce2514a64962573f084565ed5/0",
          "https://p.qpic.cn/qqconadmin/0/166c744f6e17441487b86c8a9c39131a/0?tp=webp",
          "https://p.qpic.cn/qqconadmin/0/33e5a41648ca41cb8eeae3b2d2f94dda/0?tp=webp",
          "https://p.qpic.cn/qqconadmin/0/3ed91d49cfbb47e991ae6e8d729715ed/0",
          "https://p.qpic.cn/qqconadmin/0/4fefb910d80c4d3da9643b9a37a0b9ac/0?tp=webp",
          "https://p.qpic.cn/qqconadmin/0/69b9ad7598184ef788cd1a1bea92461f/0?tp=webp",
          "https://p.qpic.cn/qqconadmin/0/956def835e9b4b75a785084ad1ffa051/0",
          "https://p.qpic.cn/qqconadmin/0/9c94e2d626414a69b3102e3e31fd89ac/0",
          "https://p.qpic.cn/qqconadmin/0/d66f489b3d334872ab1e580fc5c3cb72/0?tp=webp",
          "https://p.qpic.cn/qqconadmin/0/da0aa528d66640768f0a10e2971e8601/0?tp=webp",
          "https://p.qpic.cn/qqconadmin/0/e869f9db47f445e68b2e59885594b749/0"
        ]

      }
    },
    methods: {

      findAllCls: function () {
        /*axios.post("http://localhost:7000/class/findAllCls").then(res=>{
          if(res.data.code==200) {*/
        this.$router.push("/findAllCls")
        /*  }
        })*/
      },
      onSubmit: function () {
        axios.post("http://localhost:7000/class/findByClsName", {input: this.input}).then(res => {
          if (res.data.code == 200) {
            this.$router.push(
              {
                name: 'class',
                params: [{
                  data: res.data.data
                }]
              })
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
        } else if (key == 2) {
          this.jishu1 = false;
          this.jishu2 = true;
          this.jishu3 = false;
          this.jishu4 = false;
          this.jishu5 = false;
          this.jishu6 = false;
          this.jishu7 = false;
          this.jishu8 = false;
        } else if (key == 3) {
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

  .two1 a{
    color: #999999;text-decoration: none
  }
  .two1{
    float: left;
    height: 30px;
    width: 130px;
  }
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
  .button {
    padding: 0;
    float: right;
  }
</style>
