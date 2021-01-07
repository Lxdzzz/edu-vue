<template>
  <div style="margin-left: 100px">
    <el-row>
      <el-col :span="6" v-for="o in param" :key="o">
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
        name: "class",
      data(){
          return{
            param:[]
          }
      },
      mounted(){
          this.param=this.$route.params
      }
    }
</script>

<style scoped>

</style>
