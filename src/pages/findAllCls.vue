<template>
  <div style="margin-left: 100px">
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
       axios.post("http://localhost:7000/class/clsName",{clsName:this.clsName}).then(res=>{
         if(res.data.code==200){

           this.clslist=res.data.data;
         }
       })

    }
  }
</script>

<style scoped>
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

