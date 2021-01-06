<template>
    <div>
      <el-row>
        <el-col :span="4" v-for="o in clslist" :key="o">
          <el-card :body-style="{ padding: '10px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 0px;">
              <span>{{o}}</span>
              <div class="bottom clearfix">
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
