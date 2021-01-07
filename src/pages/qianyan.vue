<template>
    <div>
      <div style="font-size: 30px ;line-height: 80px;margin: auto">精选特色课程</div>
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
    </div>
</template>

<script>
    export default {
        name: "",
      data() {
        return {
          clslist:[
            1,2,3,4,
            "hhhhhh",
            "sdfsfas",
            "sdfasdf",
            "sdfasdfas"
          ],
          currentDate: new Date()
        };
      }
    }
</script>

<style scoped>
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
