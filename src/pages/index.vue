<template >
  <el-row>
    <el-col >
      <div class="lay" >
        <div class="a" >
          <img src="https://9.idqqimg.com/edu/logo192-3x_621b1c1fc1dd9a9eff1800acff237e5c.png#unsprite"/>
        </div>
        <div class="block">
          <el-cascader
            style="width: 100px; height: 10px"
            placeholder="目录"
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"></el-cascader>
        </div>
        <div class="c">
          <el-input v-model="input" placeholder="搜索课程" style="width: 235px;"></el-input>
          <el-button type="primary" @click="search" icon="el-icon-search">搜索</el-button>
        </div>
        <div class="d"></div>
        <div class="e" @click="click">
          登录
        </div>
      </div>
    </el-col>
    <el-col :span="24"> <el-carousel  height="300px" :interval="3000" arrow="always">
      <el-carousel-item v-for="goods in goodsList" :key="item" >
        <img :src="goods" style="width: 100%;cursor: pointer">
      </el-carousel-item>
    </el-carousel>
    </el-col>
    <div >
      <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.热门知识.1" data-name="热门知识" data-report-module="热门知识" data-order="1" data-hasrender="true">
        <div class="container-1210">
          <div >  <el-tabs v-model="activeName1" @tab-click="handleClick1"  >
            <el-tab-pane></el-tab-pane>
            <el-tab-pane></el-tab-pane>
            <el-tab-pane></el-tab-pane>
            <el-tab-pane></el-tab-pane>
            <el-tab-pane></el-tab-pane>
            <el-tab-pane></el-tab-pane>
            <el-tab-pane></el-tab-pane>
            <el-tab-pane></el-tab-pane>
            <el-tab-pane></el-tab-pane>
            <el-tab-pane></el-tab-pane>
            <el-tab-pane label="精选推荐 " name="first1" >

              <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.IT互联网热门课程.1" data-name="IT互联网热门课程" data-report-module="IT互联网热门课程" data-order="1" data-hasrender="true">
                <div class="container-1200">
                  <h1>
                    IT互联网热门课程

                  </h1>


                </div></div></el-col>

              <el-col >
                <tr><td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBZ1HNKCmMQRScq86RtVPDa28xCXCUcRdybYcdN47c5PVlGMNjupUNQKnVs5QbjIias/356" alt="马士兵JAVA高级互联网架构师｜JAVA程序员涨薪必备【马士兵教育】" title="马士兵JAVA高级互联网架构师｜JAVA程序员涨薪必备【马士兵教育】" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                <h5 class="item-tt ">
                  马士兵JAVA高级互联网架构师｜JAVA程序员涨薪必备【马士兵教育】
                </h5>
              </el-card>
              </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAMJSS9I6IbgP3XdTkQVZacOlK7myBaXtzPUp8Vz9wguj06qHkAymlEu1GtlYcsXFw/356" alt="自媒体运营|新媒体运营|微信公众号大鱼号百家号企鹅号" title="自媒体运营|新媒体运营|微信公众号大鱼号百家号企鹅号" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    自媒体运营|新媒体运营|微信公众号大鱼号百家号企鹅号
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLA26ejhSSu3pFHTia0Exkrhxp4yyNMRO6Sa6UKibloia47wxlaM1u8gmTIHmNMFoKWw2U/356" alt="最新华为认证入门到精通 DATACOM数通HCIA HCIP HCIE【思博网络】" title="最新华为认证入门到精通 DATACOM数通HCIA HCIP HCIE【思博网络】" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    最新华为认证入门到精通 DATACOM数通HCIA HCIP HCIE【思博网络】
                  </h5>
                </el-card>
                </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCx31vPjTpp0ibIL4yDQibtV2MNsPzfA4pxUkNVzWnh5j9xsEVyXjQhK7y1z2Y0GeB3I/356" alt="软件测试自学/面试/接口/压力/自动化/性能/入门到精通" title="软件测试自学/面试/接口/压力/自动化/性能/入门到精通" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">


                  <h5 class="item-tt ">
                    软件测试自学/面试/接口/压力/自动化/性能/入门到精通
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCmzJm6SCSaeEfYCXXFdUsTSvWmXogcViaiapEWVbkibjQAr9SIuhBaL91vUGia1IAcDBI/356" alt="2020逆袭web前端高级开发 | JS/React/VueJS/NodeJS框架实战" title="2020逆袭web前端高级开发 | JS/React/VueJS/NodeJS框架实战" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    2020逆袭web前端高级开发 | JS/React/VueJS/NodeJS框架实战
                  </h5>
                </el-card>
                </td></tr>
                <tr>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAPqOJoWO7m9quGMyia6nFqAvgyvEgJp8Fgx3vmXLvSYRQ2zaZ9buorChuuOsgnxjFU/356" alt="JAVA架构师严选课 互联网架构/分布式/高并发/微服务【图灵学院】" title="JAVA架构师严选课 互联网架构/分布式/高并发/微服务【图灵学院】" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">


                  <h5 class="item-tt ">
                    JAVA架构师严选课 互联网架构/分布式/高并发/微服务【图灵学院】
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBvtrWsP1VQnOlkntZQNlqlmk5NKjTjibhzgicATYIasxgwIjLXBaqLlAiahhv6IpEDicw/356" alt="易课教育：短视频剪辑自媒体爆文吸粉VLOG引流变现小店带货淘客" title="易课教育：短视频剪辑自媒体爆文吸粉VLOG引流变现小店带货淘客" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    易课教育：短视频剪辑自媒体爆文吸粉VLOG引流变现小店带货淘客
                  </h5>
                </el-card>
                </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLC0sEYOvfRghOBdejEv8ICuy7tN09SyNgicoggKfnvzIHnjE3q1f9GHic70aicmRPZxI0/356" alt="Python零基础快速就业到高级工程师/网络爬虫/人工智能/商业项目" title="Python零基础快速就业到高级工程师/网络爬虫/人工智能/商业项目" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    Python零基础快速就业到高级工程师/网络爬虫/人工智能/商业项目
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDwC1Ra7vQm3qDmd3XnFqoOmFsSgpqWrB3fZuBR7WalYd00Q8cql86r9OBHRRgKYx0/356" alt="【松勤】软件测试全栈课程（面试/接口/自动化/性能/安全/项目）" title="【松勤】软件测试全栈课程（面试/接口/自动化/性能/安全/项目）" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    【松勤】软件测试全栈课程（面试/接口/自动化/性能/安全/项目）
                  </h5>
                </el-card>
                </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDvNqlevM3kIvamF9xwlS6mpfsq6ibxYZKicO4UmlwufggtyqCib6lnj0UE6vlpclBKU0/356" alt="【6IE闫辉】 HCIA/HCIP/HCIE网络工程师实战篇" title="【6IE闫辉】 HCIA/HCIP/HCIE网络工程师实战篇" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    【6IE闫辉】 HCIA/HCIP/HCIE网络工程师实战篇
                  </h5>
                </el-card>
                </td>
               </tr></el-col>
              <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.设计创作热门课程.1" data-name="设计创作热门课程" data-report-module="设计创作热门课程" data-order="1" data-hasrender="true">
                <div class="container-1201">
                  <h1>
                    设计创作热门课程

                  </h1>
                  <!-- <div class="short-gray-line"></div> -->

                </div></div></el-col>

              <el-col :span="4"  style="width: 256px">
                <tr><td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLARL7Qs1cn2lNibFCQ8KPZQibsNszgb21BnxsPY1Usj8kOJPweNkMTz9efmTicvjeFCKo/356" alt="ipad插画入门-procreate基础教程讲解/商业插画/日韩/Applepencil" title="ipad插画入门-procreate基础教程讲解/商业插画/日韩/Applepencil" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    ipad插画入门-procreate基础教程讲解/商业插画/日韩/Applepencil
                  </h5>
                </el-card>
                </td>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAJ1PwzQI8t8nC6W6KgHfLXLxMABxsRPZhpCwbjgibkeQnHKohOfibGY9qoaibAbMFfjE/356" alt="极画精品公开课角色原画零基础入门" title="极画精品公开课角色原画零基础入门" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      极画精品公开课角色原画零基础入门
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card shadow="hover">
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBh85RwR5ZPnG3p5KOZ3sm1HDO2NIxQxCib6KmGBaffUgh3lvI2kOEZ7XiagZSGw1qfU/356" alt="ANSYS Workbench 公开课" title="ANSYS Workbench 公开课" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                    <h5 class="item-tt ">
                      ANSYS Workbench 公开课
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBbia9h37XOYIcYoqJ10Kfffv3UiaicUadhsUKaT9tHzbGsibibpjV7yUFdF2kE8PmZVNF4/356" alt="【精品推荐】人体结构基础绘画公开课" title="【精品推荐】人体结构基础绘画公开课" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      【精品推荐】人体结构基础绘画公开课
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card shadow="hover">
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAic5qJT9K4jawxsvIXiaQHlibUHQD6xcdGNicIzZMyq8I4MIwPaw5BtKlFukGWRV3JeB8/356" alt="PROE CREO  基础到高级UG/CAD/SW/RHINO产品/机械设计/模具设计" title="PROE CREO  基础到高级UG/CAD/SW/RHINO产品/机械设计/模具设计" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                    <h5 class="item-tt ">
                      PROE CREO  基础到高级UG/CAD/SW/RHINO产品/机械设计/模具设计
                    </h5>
                  </el-card>
                  </td></tr>
                <tr>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAOm8QBYib4ib1wBM4BN8IYdMck8VWgXcUd4HCjdT6fnicVmKK28DwauPVA8WWtfKgLD4/356" alt="淘宝美工 PS c4d  商业设计 平面设计全能班级 巧匠课堂" title="淘宝美工 PS c4d  商业设计 平面设计全能班级 巧匠课堂" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      淘宝美工 PS c4d  商业设计 平面设计全能班级 巧匠课堂
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card shadow="hover">
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAkiasWxrHv9CFnKRuMMUDIvpyX99xC3G7DfmHYwrvibyPSpG9icc0ic2oQMCLJ11Kezicc/356" alt="3D建模/3DMAX MAYA ZBrush零基础建模/角色/场景/次世代/游戏建模" title="3D建模/3DMAX MAYA ZBrush零基础建模/角色/场景/次世代/游戏建模" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                    <h5 class="item-tt ">
                      3D建模/3DMAX MAYA ZBrush零基础建模/角色/场景/次世代/游戏建模
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCiaibomDIERy8hBhEOYVE1V6F2Pia9lwYG7rXDWkFkGibo2gpSeL4LI4QBhnj9YBoV80Y/356" alt="PS淘宝美工PS免费教程/平面设计/抠图/产品精修+主图/海报/详情页" title="PS淘宝美工PS免费教程/平面设计/抠图/产品精修+主图/海报/详情页" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      PS淘宝美工PS免费教程/平面设计/抠图/产品精修+主图/海报/详情页
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card shadow="hover">
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCeiaa4Ru3D1Cnk5HV7Nas1XRMl1ibvF2LbcB7mYIbYxaXibjz1syNOPdWn1Ye58VpkwA/356" alt="Ps教程/平面设计/品牌logo/VI设计/海报设计/淘宝美工【直播】" title="Ps教程/平面设计/品牌logo/VI设计/海报设计/淘宝美工【直播】" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      Ps教程/平面设计/品牌logo/VI设计/海报设计/淘宝美工【直播】
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDzYXCXNCp3ZWydyIHS8KgEduAwsVRQKWI1melvFR685HIJoDGU7YficicOtuS2r5tk4/356" alt="PS摄影后期修图／影楼后期／商业修图／风光调色／公开课" title="PS摄影后期修图／影楼后期／商业修图／风光调色／公开课" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      PS摄影后期修图／影楼后期／商业修图／风光调色／公开课
                    </h5>
                  </el-card>
                  </td>
                </tr>
              </el-col>
              <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.电商营销热门课程.1" data-name="电商营销热门课程" data-report-module="电商营销热门课程" data-order="1" data-hasrender="true">
                <div class="container-1202">
                  <h1>
                    电商营销热门课程

                  </h1>
                  <!-- <div class="short-gray-line"></div> -->

                </div></div></el-col>
              <el-col :span="4" > <tr><td><el-card shadow="hover">
                <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDIJmlO1fQMrmia3rW5C59UNWyGGiaPRK5GjibsFG1nPVnJcNGX52QfkcARx1mws61ibdk/356" alt="【直播】淘宝运营/免费流量/搜索排名/直通车/无货源模式【齐论】" title="【直播】淘宝运营/免费流量/搜索排名/直通车/无货源模式【齐论】" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                <h5 class="item-tt ">
                  淘宝运营/免费流量/搜索排名/直通车/无货源模式【齐论】
                </h5>
              </el-card>
              </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCos0WfkXLL20xXZPCddC3jwKdsjUia88vkJlBThoLESxoLkicy6293tXYhX8ukafDw8/356" alt="【都魅教育】实操教你引流10000+免费公开课！" title="【都魅教育】实操教你引流10000+免费公开课！" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    【都魅教育】实操教你引流10000+免费公开课！
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDNzYPiaB2MMEycEIwp1KMp2xbMtkQRTxxsg9gNC7wqK2ZIkBO6YVnsxt7wAX0EX5KE/356" alt="2021淘宝“病毒式”裂变玩法，词根卡位爆店铺访客【正在直播】" title="2021淘宝“病毒式”裂变玩法，词根卡位爆店铺访客【正在直播】" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    2021淘宝“病毒式”裂变玩法，词根卡位爆店铺访客
                  </h5>
                </el-card>
                </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAiarc2XKezlb6Go4RL4vwLgELRmubxIibKbmFib9R2V2rvT2vaXF1vZO058HQztlVsUs/356" alt="拼多多新手开店全面实操" title="拼多多新手开店全面实操" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    拼多多新手开店全面实操
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDxmgPHEPMPciah0fQoibmT9US2wBHp5IDia4UJgxOxwzbP4r0NSCibTHybR01CaBmuGUw/356" alt="1新手开店找盈利货源 新品全面系统规划运营推广手淘首页免费引流" title="1新手开店找盈利货源 新品全面系统规划运营推广手淘首页免费引流" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    1新手开店找盈利货源 新品全面系统规划运营推广手淘首页免费引流
                  </h5>
                </el-card>
                </td></tr>
                <tr>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDJVNHQDf0bYZicNmxs5Y3iceI7hCPFps5ib8HKJbLqhOSvLlsmguFRbmxXc524OsSQdU/356" alt="亚马逊|跨境电商|打造暴力店铺运营思路" title="亚马逊|跨境电商|打造暴力店铺运营思路" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      亚马逊|跨境电商|打造暴力店铺运营思路
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card shadow="hover">
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLA1NqLFsINaURBUib9KE1QM5cu6mWctKDx70XV1fFQiabT9ASb5T40D6BqVUCrKtDiaW8/356" alt="【淘帮主】淘宝运营全程实操！零基础新店7天访客破1000" title="【淘帮主】淘宝运营全程实操！零基础新店7天访客破1000" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                    <h5 class="item-tt ">
                      【淘帮主】淘宝运营全程实操！零基础新店7天访客破1000
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBibODDdPq3AtmiazCANfY0ia1we6XgfvV2SsIfs3QJOtZVM5LWhJ4iboCVycS5XOLnRZ8/356" alt="亚马逊跨境电商0-100开店选品运营实操课【百聚汇商学院】" title="亚马逊跨境电商0-100开店选品运营实操课【百聚汇商学院】" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      亚马逊跨境电商0-100开店选品运营实操课【百聚汇商学院】
                    </h5>
                  </el-card>
                  </td>
                </tr></el-col>
              <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.地道日韩语修炼.1" data-name="地道日韩语修炼" data-report-module="地道日韩语修炼" data-order="1" data-hasrender="true">
                <div class="container-1203">
                  <h1>
                    地道日韩语修炼

                  </h1>
                  <!-- <div class="short-gray-line"></div> -->

                </div></div></el-col>
              <el-col :span="4" > <tr><td><el-card shadow="hover">
                <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAURDXVZvRdRqEAwYT2GiciaelhsFP9zicnwc8RzaZ5bSZ66XFibC4q3CagjkibmZcloPe4/356" alt="【精品】日语零基础入门  五十音 根治发音问题，告别中式日语" title="【精品】日语零基础入门  五十音 根治发音问题，告别中式日语" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                <h5 class="item-tt ">
                  【精品】日语零基础入门  五十音 根治发音问题，告别中式日语
                </h5>
              </el-card>
              </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLB3r4lHA5H5xUQyibVkiafZYDib7JZH7nMUlUUXRuxcibKpvklWYa7JZV0Ru7NGhoYv1e4/356" alt="零基础萌新兴趣学日语/五十音/N1/N2/N3/N4/高考日语/日漫配音" title="零基础萌新兴趣学日语/五十音/N1/N2/N3/N4/高考日语/日漫配音" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    零基础萌新兴趣学日语/五十音/N1/N2/N3/N4/高考日语/日漫配音
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBV9sN7ugafxe8TbR3BibhZGWRiaYSYFUfc57ibPEFzreDC1pZWSDiac83DRAv2OEgGn5s/356" alt="零基础日语/动漫配音/兴趣/高考/考级/留学/旅游/声优" title="零基础日语/动漫配音/兴趣/高考/考级/留学/旅游/声优" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    零基础日语/动漫配音/兴趣/高考/考级/留学/旅游/声优
                  </h5>
                </el-card>
                </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAzHohVcm5wx6y4QkLuvmvwM2SDwPAVsm8iaD0EQj8qszQcUvQR5AyMeAoCZyjxNBLM/356" alt="零基础日语/五十音/兴趣/动漫配音/高考考研/N1N2N3N4【三文猫】" title="零基础日语/五十音/兴趣/动漫配音/高考考研/N1N2N3N4【三文猫】" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    零基础日语/五十音/兴趣/动漫配音/高考考研/N1N2N3N4【三文猫】
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLB9r72zwkQ2rialzwoSnyoJkDIVZ85ZibNdrVElibFwPiaTt8iaU8sic6VWEyWOo8f5IeW5A/356" alt="语花学院小课堂" title="语花学院小课堂" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    语花学院小课堂
                  </h5>
                </el-card>
                </td></tr>
                <tr>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCdR2x4F4k8QkrICUPkhvzsOlpL1EvncxFNlqiaq8rt98ibjjAtia6jdv0YodqpjDNIUk/356" alt="【韩语体验课】韩语零基础小白变成大师" title="【韩语体验课】韩语零基础小白变成大师" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      【韩语体验课】韩语零基础小白变成大师
                    </h5>
                  </el-card>
                  </td>
                </tr></el-col>
              <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.近30天最多人在学.1" data-name="近30天最多人在学" data-report-module="近30天最多人在学" data-order="1" data-hasrender="true">
                <div class="container-1204">
                  <h1>
                    近30天最多人在学

                  </h1>
                  <!-- <div class="short-gray-line"></div> -->

                </div></div></el-col>
              <el-col :span="4" > <tr><td><el-card shadow="hover">
                <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCZhqxWic1UMH0E1NksQMhCvgHUZ4yA5UaaTkiaIDYuC2HEoiaGVS1MBQXSHib7QI2x9kE/356" alt="秋叶公开课·PPT高手都在用的技巧，轻松做出高大上的幻灯片" title="秋叶公开课·PPT高手都在用的技巧，轻松做出高大上的幻灯片" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                <h5 class="item-tt ">
                  秋叶公开课·PPT高手都在用的技巧，轻松做出高大上的幻灯片
                </h5>
              </el-card>
              </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDt7lZrGJxOicxLfnxU74stXr6bTIWrW9FxzPoOic64YUA7AjwdQf2rdTjfP1B85I0Wo/356" alt="免费公开课：让PPT帮你混的更好/赚更多钱" title="免费公开课：让PPT帮你混的更好/赚更多钱" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    免费公开课：让PPT帮你混的更好/赚更多钱
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAl1BGQs73CWGcgHLGgiaPibx6Qacjia6RNCJaDaRrBQhia1LhHYHKwvwcLZ4ajv2bibjkQ/356" alt="2020年Office办公软件Excel/Word/PPT零基础小白VIP精讲脱白班" title="2020年Office办公软件Excel/Word/PPT零基础小白VIP精讲脱白班" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    2020年Office办公软件Excel/Word/PPT零基础小白VIP精讲脱白班
                  </h5>
                </el-card>
                </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBqTDoG9DBgE7Jar5AUAm4JWQyxCFkc0UYXRUmXohzLq8uwZnvalGcJAffx3DOS5q0/356" alt="色彩搭配/服装搭配/形象设计 /色彩/风格/发型/体型/搭配/时尚/OS" title="色彩搭配/服装搭配/形象设计 /色彩/风格/发型/体型/搭配/时尚/OS" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    色彩搭配/服装搭配/形象设计 /色彩/风格/发型/体型/搭配/时尚/OS
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLB84FibAOlMHPicy3ObwzHfAp0chZEEntEtpFK1m5KOhXfLkZzZeVdTczBibbjp03hASA/356" alt="形象设计师-穿衣穿搭形象改造班" title="形象设计师-穿衣穿搭形象改造班" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    形象设计师-穿衣穿搭形象改造班
                  </h5>
                </el-card>
                </td></tr>
                <tr>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDod9cicgx1Uy4X6GIab0lTcSqNMW6d6YvfneEnd1K7pOP0cHChXP9iaZJy33g9J38pk/356" alt="闺蜜力量-零基础从小白到穿搭达人" title="闺蜜力量-零基础从小白到穿搭达人" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      闺蜜力量-零基础从小白到穿搭达人
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card shadow="hover">
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBkfMuVGUibUhYB7yqVsFMkuSlxKKkPvF7viaw4aKFew9jgviasHZQmJJC12Hju0Rs9pc/356" alt="2021年3月计算机二级Office办公软件全程班贺斌精讲" title="2021年3月计算机二级Office办公软件全程班贺斌精讲" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                    <h5 class="item-tt ">
                      2021年3月计算机二级Office办公软件全程班贺斌精讲
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLB2kqGPuJb9yaVFibP7ExX6ujR47cqDSKciaqElCIq8GnT4u5Q6SE8WYFdl2tjt4gEiaA/356" alt="2020年Office办公软件Excel/Word/PPT零基础小白免费公开课" title="2020年Office办公软件Excel/Word/PPT零基础小白免费公开课" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      2020年Office办公软件Excel/Word/PPT零基础小白免费公开课
                    </h5>
                  </el-card>
                  </td>
                  <td><el-card shadow="hover">
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLByajUvhMeYba3A7GNIrCwlnficNmibyo7lg1fInqka48Qeha2JOCBoLaKlQoWRTAA28/356" alt="手机摄影零基础入门到精通/随时随地拍好照片 /好摄帮" title="手机摄影零基础入门到精通/随时随地拍好照片 /好摄帮" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                    <h5 class="item-tt ">
                      手机摄影零基础入门到精通/随时随地拍好照片 /好摄帮
                    </h5>
                  </el-card>
                  </td>

                </tr></el-col>
              <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.升职加薪必学职场课.1" data-name="升职加薪必学职场课" data-report-module="升职加薪必学职场课" data-order="1" data-hasrender="true">
                <div class="container-1205">
                  <h1>
                    升职加薪必学职场课

                  </h1>
                  <!-- <div class="short-gray-line"></div> -->

                </div></div></el-col>
              <el-col :span="4" > <tr><td><el-card shadow="hover">
                <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCZhqxWic1UMH0E1NksQMhCvgHUZ4yA5UaaTkiaIDYuC2HEoiaGVS1MBQXSHib7QI2x9kE/356" alt="秋叶公开课·PPT高手都在用的技巧，轻松做出高大上的幻灯片" title="秋叶公开课·PPT高手都在用的技巧，轻松做出高大上的幻灯片" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                <h5 class="item-tt ">
                  秋叶公开课·PPT高手都在用的技巧，轻松做出高大上的幻灯片
                </h5>
              </el-card>
              </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDt7lZrGJxOicxLfnxU74stXr6bTIWrW9FxzPoOic64YUA7AjwdQf2rdTjfP1B85I0Wo/356" alt="免费公开课：让PPT帮你混的更好/赚更多钱" title="免费公开课：让PPT帮你混的更好/赚更多钱" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    免费公开课：让PPT帮你混的更好/赚更多钱
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLB2kqGPuJb9yaVFibP7ExX6ujR47cqDSKciaqElCIq8GnT4u5Q6SE8WYFdl2tjt4gEiaA/356" alt="2020年Office办公软件Excel/Word/PPT零基础小白免费公开课" title="2020年Office办公软件Excel/Word/PPT零基础小白免费公开课" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    2020年Office办公软件Excel/Word/PPT零基础小白免费公开课
                  </h5>
                </el-card>
                </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBkfMuVGUibUhYB7yqVsFMkuSlxKKkPvF7viaw4aKFew9jgviasHZQmJJC12Hju0Rs9pc/356" alt="2021年3月计算机二级Office办公软件全程班贺斌精讲" title="2021年3月计算机二级Office办公软件全程班贺斌精讲" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    2021年3月计算机二级Office办公软件全程班贺斌精讲
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCnEOibXkxzvc64EYElF643QIn07khU1Saw3KtT95Ze9PibYdz39ictEqicq0Mv3bhjZcQ/356" alt="江老师讲管理系列课程" title="江老师讲管理系列课程" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    江老师讲管理系列课程
                  </h5>
                </el-card>
                </td></tr>
                <tr>
                  <td><el-card>
                    <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAl1BGQs73CWGcgHLGgiaPibx6Qacjia6RNCJaDaRrBQhia1LhHYHKwvwcLZ4ajv2bibjkQ/356" alt="2020年Office办公软件Excel/Word/PPT零基础小白VIP精讲脱白班" title="2020年Office办公软件Excel/Word/PPT零基础小白VIP精讲脱白班" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                    <h5 class="item-tt ">
                      2020年Office办公软件Excel/Word/PPT零基础小白VIP精讲脱白班
                    </h5>
                  </el-card>
                  </td>
                </tr></el-col>
              <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.Office从入门到精通.1" data-name="Office从入门到精通" data-report-module="IT互联网热门课程" data-order="1" data-hasrender="true">
                <div class="container-1206">
                  <h1>
                    Office从入门到精通

                  </h1>
                  <!-- <div class="short-gray-line"></div> -->

                </div></div></el-col>
              <el-col :span="4" > <tr><td><el-card shadow="hover">
                <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCZhqxWic1UMH0E1NksQMhCvgHUZ4yA5UaaTkiaIDYuC2HEoiaGVS1MBQXSHib7QI2x9kE/356" alt="秋叶公开课·PPT高手都在用的技巧，轻松做出高大上的幻灯片" title="秋叶公开课·PPT高手都在用的技巧，轻松做出高大上的幻灯片" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                <h5 class="item-tt ">
                  秋叶公开课·PPT高手都在用的技巧，轻松做出高大上的幻灯片
                </h5>
              </el-card>
              </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDt7lZrGJxOicxLfnxU74stXr6bTIWrW9FxzPoOic64YUA7AjwdQf2rdTjfP1B85I0Wo/356" alt="免费公开课：让PPT帮你混的更好/赚更多钱" title="免费公开课：让PPT帮你混的更好/赚更多钱" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    免费公开课：让PPT帮你混的更好/赚更多钱
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAl1BGQs73CWGcgHLGgiaPibx6Qacjia6RNCJaDaRrBQhia1LhHYHKwvwcLZ4ajv2bibjkQ/356" alt="2020年Office办公软件Excel/Word/PPT零基础小白VIP精讲脱白班" title="2020年Office办公软件Excel/Word/PPT零基础小白VIP精讲脱白班" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    2020年Office办公软件Excel/Word/PPT零基础小白VIP精讲脱白班
                  </h5>
                </el-card>
                </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDbVCTlGOtHDN0dZOKptWXMmeBaN64WGOib8uOfzrzQnIFfpP5ZFSNAXvkic0mfeiac44/356" alt="Excel高效商务办公视频教程-财务/销售/计划/电商/行政【朱仕平】" title="Excel高效商务办公视频教程-财务/销售/计划/电商/行政【朱仕平】" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    Excel高效商务办公视频教程-财务/销售/计划/电商/行政【朱仕平】
                  </h5>
                </el-card>
                </td>
                </tr>
                </el-col>
              <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.2周学会唱歌和乐器.1" data-name="2周学会唱歌和乐器" data-report-module="2周学会唱歌和乐器" data-order="1" data-hasrender="true">
                <div class="container-1207">
                  <h1>
                    2周学会唱歌和乐器

                  </h1>
                  <!-- <div class="short-gray-line"></div> -->

                </div></div></el-col>
              <el-col :span="4" > <tr><td><el-card shadow="hover">
                <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBbWicA3O2oZhica9lMNFYpZf9LKZLGdx9iboPyE0PGGd0DV7jCjicMdbHxyLPAvCodicic4/356" alt="流行钢琴（即兴伴奏）公开课—乐才派钢琴课堂" title="流行钢琴（即兴伴奏）公开课—乐才派钢琴课堂" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                <h5 class="item-tt ">
                  流行钢琴（即兴伴奏）公开课—乐才派钢琴课堂
                </h5>
              </el-card>
              </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDicghvnxwJ85uWRKAwmialnKUJIfzXuZrC6GD0Dic1WoUwOLR62NeMoIgrM3OByU88JY/356" alt="尤克里里新手弹唱宝典第一步曲 短时间提高弹唱水平" title="尤克里里新手弹唱宝典第一步曲 短时间提高弹唱水平" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    尤克里里新手弹唱宝典第一步曲 短时间提高弹唱水平
                  </h5>
                </el-card>
                </td>
               </tr>
               </el-col>
              <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.月薪1万都在学的理财课.1" data-name="月薪1万都在学的理财课" data-report-module="月薪1万都在学的理财课" data-order="1" data-hasrender="true">
                <div class="container-1208">
                  <h1>
                    月薪1万都在学的理财课

                  </h1>
                  <!-- <div class="short-gray-line"></div> -->

                </div></div></el-col>
              <el-col :span="4" > <tr>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLARL7Qs1cn2lNibFCQ8KPZQibsNszgb21BnxsPY1Usj8kOJPweNkMTz9efmTicvjeFCKo/356" alt="【直播】淘宝运营/免费流量/搜索排名/直通车/无货源模式【齐论】" title="【直播】淘宝运营/免费流量/搜索排名/直通车/无货源模式【齐论】" class="item-img" width="223" height="125" >
                  <h5 class="item-tt ">
                    【赢在青年】理财小白7分钟学理财
                  </h5>
                </el-card>
                </td>
                <td><el-card>
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAZicOz9mUQFReNnA1icOsLYhd3icNkLia6pJjYYqhxqy8l1xianYia1TxQiaj8B65WmtlvN8/356" alt="【赢在青年】拯救月光族" title="【赢在青年】拯救月光族" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">

                  <h5 class="item-tt ">
                    【赢在青年】拯救月光族
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBYvcibn8icYyxhXgicOaq3JnyAB2vicCAMG9u5hc8bpEfnmCOcicU3AzxgfBJPcBicOnZHE/356" alt="零基础学股票" title="零基础学股票" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    零基础学股票
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAiadoPgJ2r5zhURl1ndLYOj9mAZEgKB2KG3ObadmvZdUSKib1icL0qSwXKXTsHxnqEHk/356" alt="股市菜鸟到高手特训营" title="股市菜鸟到高手特训营" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    股市菜鸟到高手特训营
                  </h5>
                </el-card>
                </td></tr>
              </el-col>
              <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.摄影达人速成指南.1" data-name="摄影达人速成指南" data-report-module="摄影达人速成指南" data-order="1" data-hasrender="true">
                <div class="container-1209">
                  <h1>
                    摄影达人速成指南

                  </h1>
                  <!-- <div class="short-gray-line"></div> -->

                </div></div></el-col>
              <el-col :span="4"> <tr><td><el-card shadow="hover">
                <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDyHsogoRn2OicclaxvG8u4LfDibp0OT6iaRI0BicdtZe0aTU3e447OLeYSeuEEB4MyNn8/356" alt="摄影后期VIP特训班（限时免费）" title="摄影后期VIP特训班（限时免费）" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                <h5 class="item-tt ">
                  摄影后期VIP特训班（限时免费）
                </h5>
              </el-card>
              </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCCuqeYbnCdoIAcaT4RW6yubPZLvIWd8QKN0gNa9Wej1cLFjPHyaBMeGO6IM7LHcsQ/356" alt="手机摄影也疯狂（试听课）" title="手机摄影也疯狂（试听课）" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    手机摄影也疯狂
                  </h5>
                </el-card>
                </td>
                <td><el-card shadow="hover">
                  <img src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBpWaX6UKkTfFa1JFBhqhr5kLQf2hTFANGB4O5X5p0oco3avYOkFpibvLF5FNu3nuiaQ/356" alt="单反数码相机入门-吕易飞老师摄影入门课程" title="单反数码相机入门-吕易飞老师摄影入门课程" class="item-img" width="220" height="124" onerror="window.__eduCourseCardRetry__ &amp;&amp; __eduCourseCardRetry__.call(this)">
                  <h5 class="item-tt ">
                    单反数码相机入门-吕易飞老师摄影入门课程
                  </h5>
                </el-card>
                </td></tr>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="Java开发" name="second1"> </el-tab-pane>
            <el-tab-pane label="平面设计" name="third1"></el-tab-pane>
            <el-tab-pane label="职业技能" name="fourth1">

            </el-tab-pane>
            <el-tab-pane label="高中" name="five1">

            </el-tab-pane>
            <el-tab-pane label="实用英语" name="six1">

            </el-tab-pane>
            <el-tab-pane label="文艺修养" name="seven1">

            </el-tab-pane>
          </el-tabs>
          </div>
        </div></div></el-col>
    </div>

    <el-col :span="24"> <div class="js-custom-course mod-sub custom-course-wrap" data-mod="custom-course.热门知识.1" data-name="热门知识" data-report-module="热门知识" data-order="1" data-hasrender="true">
      <div class="container-1210">
        <h1>
          热门知识

        </h1>
        <!-- <div class="short-gray-line"></div> -->
      <div >  <el-tabs v-model="activeName" @tab-click="handleClick"  >
        <el-tab-pane></el-tab-pane>
        <el-tab-pane></el-tab-pane>
        <el-tab-pane></el-tab-pane>
        <el-tab-pane></el-tab-pane>
        <el-tab-pane></el-tab-pane>
        <el-tab-pane></el-tab-pane>
        <el-tab-pane></el-tab-pane>
        <el-tab-pane></el-tab-pane>
        <el-tab-pane label="IT·互联网" name="first" >
          <div >  <el-button round>mpacc培训</el-button>
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
          <el-tab-pane label="设计·创作" name="second"> <div>  <el-button round>cad2014安装教程</el-button>
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
            <div>  <el-button round>注会培训</el-button>
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
            <div>  <el-button round>奥数培训</el-button>
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
            <div>  <el-button round>寿司培训</el-button>
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
            <div>  <el-button round>西班牙语培训</el-button>
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
      <div class="lay1">
        <div class="one">
          合作链接
        </div>
        <div class="two">
          <div class="two1"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">腾讯大学</a></div>
          <div class="two2"><a href="https://new.qq.com/ch/edu/" style="color: #999999;text-decoration: none">腾讯网教育频道</a></div>
          <div class="two3"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">腾讯精品课</a></div>
          <div class="two4"><a href="https://cloud.tencent.com/?fromSource=gwzcw.788739.788739.788739" style="color: #999999;text-decoration: none">腾讯云</a></div>
          <div class="two5"><a href="https://qidian.qq.com/solutions/education02.html?" style="color: #999999;text-decoration: none">腾讯企点</a></div>
          <div class="two6"><a href="https://guanjia.qq.com/" style="color: #999999;text-decoration: none">腾讯电脑管家</a></div>
          <div class="two7"><a href="https://cloud.tencent.com/product/ms" style="color: #999999;text-decoration: none">腾讯御安全</a></div>
          <div class="two8"><a href="https://fm.qq.com/" style="color: #999999;text-decoration: none">企鹅FM</a></div>
          <div class="two9"><a href="https://www.weiyun.com/" style="color: #999999;text-decoration: none">腾讯微云</a></div>
          <div class="two10"><a href="https://docs.qq.com/" style="color: #999999;text-decoration: none">腾讯文档</a></div>
          <div class="two11"><a href="http://gameinstitute.qq.com/daxue" style="color: #999999;text-decoration: none">腾讯游戏学院</a></div>
        </div>
        <div class="three">
          <div class="three1"><a href="http://www.hqwx.com/" style="color: #999999;text-decoration: none">环球网校</a></div>
          <div class="three2"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">中华考试网</a></div>
          <div class="three3"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">学神IT教育</a></div>
          <div class="three4"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">云艺帆教育</a></div>
          <div class="three5"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">为课网校</a></div>
          <div class="three6"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">中大网校</a></div>
          <div class="three7"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">益修学院</a></div>
          <div class="three8"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">起点学院</a></div>
          <div class="three9"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">人人都是产品经理</a></div>
          <div class="three10"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">公务员考试网</a></div>
          <div class="three11"><a href="https://daxuepc.com/" style="color: #999999;text-decoration: none">新东方在线</a></div>
        </div>
        <div class="four">
          <div class="four1"><a href="http://www.offcn.com/" style="color: #999999;text-decoration: none">中公公务员网</a></div>
          <div class="four2"><a href="https://www.zxxk.com/" style="color: #999999;text-decoration: none">学科网</a></div>
          <div class="four3"><a href="https://www.yuanhuaren.com/" style="color: #999999;text-decoration: none">原画人</a></div>
          <div class="four4"><a href="https://www.wangyukt.com/" style="color: #999999;text-decoration: none">王宇课堂</a></div>
        </div>
        <div class="five">

        </div>
        <div class="six">
          <img src="http://qm3gjgvoy.hn-bkt.clouddn.com/a802e409b998cb8167a1a396579e3f0.png"/>
        </div>
        <div class="seven">
          Copyright © 2020 Tencent. All Rights Reserved.
        </div>
        <div class="eight">
          深圳市腾讯计算机系统有限公司版权所有|腾讯课堂服务协议|隐私政策|站点地图│侵权投诉|问题反馈|帮助|涨知识
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'index',
  data() {
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
      }],
      goodsList: [
        "https://p.qpic.cn/qqconadmin/0/e6af8212617a4c1c9594c6b9dff6bfb6/0 ",
        "https://p.qpic.cn/qqconadmin/0/02d64d9d9738413cb1a0f601312f358d/0?tp=webp",
        "https://p.qpic.cn/qqconadmin/0/4fb8be947a7a461eacf66a21e1850912/0?tp=webp",
        "https://p.qpic.cn/qqconadmin/0/b76c3c7265494d4984bf4a849c2b80ec/0?tp=webp",
        "https://p.qpic.cn/qqconadmin/0/55ca34df01e244359abf4532863bfeea/0?tp=webp",
        "https://p.qpic.cn/qqconadmin/0/800a6ca7f91e43d88cff9c2d7e3a9988/0?tp=webp",
        "https://p.qpic.cn/qqconadmin/0/53beb3f546fd4b39bcb5f89f09f7764d/0?tp=webp",
        "https://p.qpic.cn/qqconadmin/0/890cb0974fd74527a5a8568f5a0897ba/0?tp=webp"
      ],

      activeName: 'first',
      activeName1: "first1"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  methods: {
    handleClick1(tab, event) {
      console.log(tab, event);
    }
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

<style>
  .eight{
    text-align: center;
    color: #999999;
    font-size: 10px;
  }

  .seven{
    text-align: center;
    color: #999999;
    font-size: 10px;
    height: 30px;
  }

  .six{
    height: 75px;
    margin-left: -11px;
    margin-top: 2px;

  }

  .five{
    background-color: #999999;
    margin-left: 55px;
    height: 0.5px;
    width: 1200px;
    margin-top: 20px;
  }

  .four4{
    float: left;
    width: 110px;
  }

  .four3{
    float: left;
    width: 110px;
  }

  .four2{
    float: left;
    width: 110px;
  }

  .four2{
    float: left;
    width: 110px;
  }

  .four1{
    float: left;
    width: 110px;
  }

  .four{
    color: #999999;
    margin-left: 50px;
    height: 42px;
  }

  .three11{
    float: left;
    width: 110px;
  }

  .three10{
    float: left;
    width: 110px;
  }

  .three9{
    float: left;
    width: 150px;
  }

  .three8{
    float: left;
    width: 110px;
  }

  .three7{
    float: left;
    width: 110px;
  }

  .three6{
    float: left;
    width: 110px;
  }

  .three5{
    float: left;
    width: 110px;
  }

  .three4{
    float: left;
    width: 110px;
  }

  .three3{
    float: left;
    width: 110px;
  }

  .three2{
    float: left;
    width: 110px;
  }

  .three1{
    float: left;
    width: 110px;
  }

  .three{
    color: #999999;
    margin-left: 36px;
    height: 42px;
  }

  .two11{
    float: left;
    width: 110px;
  }
  .two10{
    float: left;
    width: 110px;
  }

  .two9{
    float: left;
    width: 110px;
  }

  .two8{
    float: left;
    width: 110px;
  }

  .two7{
    float: left;
    width: 110px;
  }

  .two6{
    float: left;
    width: 110px;
  }

  .two5{
    float: left;
    width: 110px;
  }

  .two4{
    float: left;
    width: 110px;
  }

  .two3{
    float: left;
    width: 110px;
  }

  .two2{
    float: left;
    width: 110px;
  }

  .two2{
    float: left;
    width: 140px;
  }

  .two1{
    float: left;
    width: 110px;
  }

  .two{
    color: #999999;
    margin-left: 36px;
    height: 42px;
  }

  .one{
    width: 1200px;
    height: 80px;
    color: #999999;
    margin-left: -498px;
    line-height: 80px;
    font-size: 22px;
  }

  .lay1{
    height: 400px;
    width: 100%;
    background-color: #424345;
    margin-top: 30px;
  }
  .e{
    line-height: 65px;
  }

  .d{
    font-size: 14px;
    margin-right: auto;
    width: 350px;
    height: 10px;
    float: left;
  }

  .c{
    height: 65px;
    width: 435px;
    float: left;
    text-align: center;
    line-height: 65px;
  }

  .block{
    width: 166px;
    height: 65px;
    font-size: 25px;
    text-align: center;
    line-height: 65px;
    float: left;
    /*background-color: cornflowerblue;*/
  }

  .a img{
    width: 192px;
    height: 65px;
  }

  .a{
    width: 202px;
    height: 65px;
    margin-left: 180px;
    float: left;
  }

  .lay{
    height: 40px;
  }
  .el-carousel img{
    height: 100%;
    width: 100%;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
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
