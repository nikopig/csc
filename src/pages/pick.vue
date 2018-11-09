<template>
  <div class="wrapper page-pick">
    <div class="container">
      <div class="section">
        <!-- <div class="header">
          <label class="pname">商品入库标签</label>
          <div class="pnum">10110705087333</div>
        </div> -->
        <div class="content left">
          <ul class="pinfo">
            <li>
              <i class="icon-box"></i>
              <label class="key">商品编码:</label>
              <label class="val">{{pInfo.SHANGP_ID}}</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">商品名称:</label>
              <label class="val">{{pInfo.CHINESE_NAME}}</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">商品批号:</label>
              <label class="val">{{pInfo.LOT}}</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">拣选数量:</label>
              <label class="val">{{pInfo.JIHUA_NUM}}</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">单据编号:</label>
              <label class="val">{{pInfo.DANJ_NO}}</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">订单项剩余体积:</label>
              <label class="val"></label>
            </li>
          </ul>
          <div class="img-box">
            <img src="/static/img/img-prod1.png">
          </div>
        </div>
      </div>
      <div class="section">
        <!-- <div class="header">
          <div class="center-box">
            <label class="key">装箱数量</label>
            <label class="val"><span>40</span> / <span>100</span></label>
          </div>
        </div> -->
        <div class="content right">
          <div class="bw lx">
            <div class="tl">料箱</div>
            <div class="ls">
              <div class="box" v-for="(n, i) in 2" :key="i" :class="lxpos === i ? 'lx-active' : 'lx'"><div class="num"></div></div>
              <!-- <div class="box"></div> -->
            </div>
          </div>
          <hr style="border-top: 1px dashed #999; height: 0px; margin: 0px;">
          <div class="bw ddx">
            <div class="tl">订单箱</div>
            <div class="ls">
              <div class="box" v-for="(n, i) in 4" :key="i" :class="zzxpos === i ? 'zzx-active' : 'zzx'"><div v-if="zzxpos === i" class="num">{{carInfo.JIHUA_NUM}}</div></div>
              <!-- <div class="box"></div>
              <div class="box box-4"></div>
              <div class="box box-5"><div class="num"></div></div> -->
            </div>
          </div>
          <div class="tw">
            <h1 class="title">下个任务信息</h1>
            <ul class="tb">
              <li class="hd">
                <div class="cell">单据编号</div>
                <div class="cell">商品编号</div>
                <div class="cell">商品名称</div>
                <div class="cell">批号</div>
                <div class="cell">数量</div>
                <div class="cell">体积</div>
              </li>
              <li class="tr" v-for="(row, index) in list" :key="index">
                <div class="cell">{{row.DANJ_NO}}</div>
                <div class="cell">{{row.SHANGP_NO}}</div>
                <div class="cell">{{row.CHINESE_NAME}}</div>
                <div class="cell">{{row.LOT}}</div>
                <div class="cell">{{row.JIHUA_NUM}}</div>
                <div class="cell">{{row.VOLUME}}</div>
              </li>
            </ul>
          </div>
          <div class="ft">
            <div class="btn primary" @click="changeBox">换箱确认</div>
            <div class="btn success" @click="confirm">保存</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
import Api from '../js/api'
export default {
  name: 'changeBox',
  components: {XButton},
  props: {},
  data () {
    return {
      list: [],
      carInfo: {},
      pInfo: {}
    }
  },
  watch: {},
  computed: {
    lxpos () {
      return this.carInfo.LX_POS - 0
    },
    zzxpos () {
      return this.carInfo.ZZX_POS - 0
    }
  },
  methods: {
    // 保存
    confirm () {
      let params = [
          {'_ParamName': 'iv_lxbh_no', '_DataType': '1', '_InputType': '1', '_ParamText': this.carInfo.LXBH_NO},
          {'_ParamName': 'iv_zhouzx_no', '_DataType': '1', '_InputType': '1', '_ParamText': this.carInfo.ZHOUZX_NO},
          {'_ParamName': 'in_shij_num', '_DataType': '1', '_InputType': '1', '_ParamText': '20'},
          {'_ParamName': 'ov_out1', '_DataType': '1', '_InputType': '2', '_ParamText': null},
          {'_ParamName': 'ov_out2', '_DataType': '1', '_InputType': '2', '_ParamText': null}
      ]
      Api.post('PKG_STOCKS.P_JH_CONFIRM', params)
      .then(res => {
        if (res.Flag) {
          // let data = res.Data
        }
      })
    },
    // 换箱
    changeBox () {
      let params = [
          {'_ParamName': 'iv_zhouzx_no', '_DataType': '1', '_InputType': '1', '_ParamText': this.carInfo.ZHOUZX_NO},
          {'_ParamName': 'OV_OUT', '_DataType': '1', '_InputType': '2', '_ParamText': null}
      ]
      Api.post('pkg_stocks.p_full', params)
      .then(res => {
        if (res.Flag) {
          // let data = res.Data
        }
      })
    },
    // 取数据
    getData () {
      let params = [
          {'_ParamName': 'iv_quyu_no', '_DataType': '1' ,'_InputType': '1', '_ParamText': 'J01'},
          {'_ParamName': 'iv_ry_jhy', '_DataType': '1', '_InputType': '1', '_ParamText': ''},
          {'_ParamName': 'oc_curtask', '_DataType': '3', '_InputType': '2', '_ParamText': null},
          {'_ParamName': 'oc_spinfo', '_DataType': '3', '_InputType': '2', '_ParamText': null},
          {'_ParamName': 'oc_tasks', '_DataType': '3', '_InputType': '2', '_ParamText': null}
      ]
      Api.post('pkg_stocks.p_obtain_interface', params)
      .then(res => {
        console.log(res)
        if (res.Flag) {
          let data = res.Data
          if (data.length > 2) {
              this.carInfo = data[0]
              this.pInfo = data[1]
              this.list = data.splice(2)
          }
        }
      })
    }
  },
  created () {},
  mounted () {
    this.getData()
  }
}
</script>
<style lang="less" scoped>
.primary {
  background-color: #62ABE8;
}
.success {
  background-color: #55C45f;
}
.iconfont {
  font-size: 0.32rem;
}
.type-info {
  color: #ccc;
}
.type-danger {
  color: #EC6D6D;
}
.type-success {
  color: #42BA4C;
}

.wrapper{
  height: 100%;
  &.page-pick {
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      .section {
        display: flex;
        flex-direction: column;
        .header {
          height: 0.7rem;
          line-height: 0.7rem;
          font-size: 0.2rem;
          color: #fff;
          background-color: #404d6A;
          display: flex;
          .pname {
            width: 2rem;
            text-align: center;
          }
          .pumn {
            flex: 1;
          }
          .center-box {
            height: 0.7rem;
            line-height: 0.7rem;
            margin: 0 auto;
            label.key {
              padding-right: 0.2rem;
            }
            label.val {
              padding-left: 0.2rem;
              span:nth-of-type(1) {
                color: #ff7979;
              }
            }
          }
        }
        .content {
          flex:  1;
          padding-top: 0.2rem;
          &.left {
            background-color: #f3f5f9;
            ul {
              padding-left: 0.4rem;
              color: #333;
              box-sizing: border-box;
              li {
                height: 0.6rem;
                line-height: 0.6rem;
                i.icon-box {
                  display: inline-block;
                  *display: inline-block;
                  width: 0.36rem;
                  height: 0.36rem;
                  vertical-align: middle;
                }
                &:nth-of-type(1) i.icon-box {
                  background: url(/static/img/icon-1.png) no-repeat center;
                }
                &:nth-of-type(2) i.icon-box {
                  background: url(/static/img/icon-2.png) no-repeat center;
                }
                &:nth-of-type(3) i.icon-box {
                  background: url(/static/img/icon-3.png) no-repeat center;
                }
                &:nth-of-type(4) i.icon-box {
                  background: url(/static/img/icon-6.png) no-repeat center;
                }
                &:nth-of-type(5) i.icon-box {
                  background: url(/static/img/icon-7.png) no-repeat center;
                }
                &:nth-of-type(6) i.icon-box {
                  background: url(/static/img/icon-8.png) no-repeat center;
                }
              }
            }
            .img-box {
              width: 4.14rem;
              height: 3.46rem;
              margin: 0 auto;
              margin-top: 0.12rem;
              padding: 0.34rem 0.36rem;
              box-sizing: border-box;
              background-color: #fff;
              img {
                width: 3.42rem;
                height: 2.78rem;
              }
            }
          }
          &.right {
            padding: 0.3rem;
            box-sizing: border-box;
            .bw {
              height: 2rem;
              padding: 0.4rem 0;
              box-sizing: border-box;
              display: flex;
              .tl {
                width: 0.72rem;
                line-height: 1.2rem;
              }
              .ls {
                flex: 1;
                display: flex;
                justify-content: center;
                .box {
                  margin: 0 0.25rem;
                }
              }
            }
            .tw {
              h1.title {
                font-size: 0.18rem;
                font-weight: normal;
                text-align: center;
              }
              .tb {
                font-size: 0.12rem;
                color: #555;
                border: 1px solid #ddd;
                .hd, .tr {
                  display: flex;
                  // flex-direction: column;
                }
                .hd {
                  background: #EAEEF4;
                  border-bottom: 1px solid #ddd;
                  padding: 0.15rem 0;
                }
                .tr {
                  padding: 0.12rem 0;
                }
                .tr.bl {
                  background-color: #E8F1FE;
                }
                .cell {
                  flex: 1;
                  text-align: center;
                }
              }
            }
            .ft {
              margin-top: 0.3rem;
              display: flex;
              justify-content: flex-end;
              .btn {
                width: 1.72rem;
                height: 0.45rem;
                line-height: 0.45rem;
                font-size: 0.2rem;
                color: #fff;
                text-align: center;
                border-radius: 3px;
                margin: 0 0.2rem;
              }
            }
          }
        }
      }
      .section:nth-of-type(1) {
        flex: 1
      }
      .section:nth-of-type(2) {
        flex: 2
      }
    }
    .box {
      width: 1.2rem;
      height: 1.2rem;
      background-size: 100%;
      position: relative;
      color: #fff;
      .num {
        width: 100%;
        position: absolute;
        font-size: 0.22rem;
        text-align: center;
        bottom: 0.15rem;
        left: 0;
      }
      &.lx-active {
        background: url(/static/img/box-1.png) no-repeat center;
      }
      &.lx {
        background: url(/static/img/box-2.png) no-repeat center;
      }
      &.zzx-active {
        background: url(/static/img/box-3.png) no-repeat center;
      }
      &.zzx {
        background: url(/static/img/box-4.png) no-repeat center;
      }
      &.box-5 {
        background: url(/static/img/box-5.png) no-repeat center;
      }
    }
  }
}
</style>