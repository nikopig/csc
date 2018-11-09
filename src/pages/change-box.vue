<template>
  <div class="wrapper page-change-box">
    <div class="container">
      <div class="section">
        <div class="header">
          <label class="pname">商品入库标签：</label>
          <span class="pnum">{{info.DABZ_BARCODE}}</span>
        </div>
        <div class="content left">
          <ul class="pinfo">
            <li>
              <i class="icon-box"></i>
              <label class="key">商品编码:</label>
              <label class="val">{{info.SHANGP_ID}}</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">商品名称:</label>
              <label class="val">{{info.CHINESE_NAME}}</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">商品规格:</label>
              <label class="val">{{info.YAOP_GUIG}}</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">商品批号:</label>
              <label class="val">{{info.LOT}}</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">生产厂家:</label>
              <label class="val">{{info.MAKER}}</label>
            </li>
          </ul>
          <div class="img-box">
            <img src="/static/img/img-prod.png">
          </div>
        </div>
      </div>
      <div class="section">
        <div class="header">
          <div class="center-box">
            <label class="key">装箱数量</label>
            <label class="val"><span>{{total}}</span> / <span>{{info.JIHUA_NUM}}</span></label>
          </div>
        </div>
        <div class="content right">
          <ul>
            <li v-for="(l, i) in list" :key="i">
              <div class="column"><mt-field type="number" :label="`数量${i + 1}：`" v-model="l.num" @input="changeNum(l)"></mt-field></div>
              <div class="column"><span>料箱编号{{i + 1}}:&nbsp;&nbsp;</span><span>{{l.no}}</span></div>
              <div class="column">
                <div class="add">
                  <i class="iconfont icon-addition" :class="i === count - 1 ? 'type-success' : 'type-info'" @click="addRow"></i>
                </div>
                <div class="del">
                  <i class="iconfont icon-offline type-danger" @click="del(i)"></i>
                </div>
              </div>
            </li>
          </ul>
          <div class="ft">
            <div class="btn success" @click="check">保存确认</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
import Api from '../js/api'
import { Toast } from 'mint-ui'
export default {
  name: 'changeBox',
  components: {XButton},
  props: {},
  data () {
    return {
      info: {},
      list: [
        {
          num: '',
          no: ''
        }
      ]
    }
  },
  watch: {},
  computed: {
    surplus () {
      return this.info.JIHUA_NUM - this.total
    },
    total () {
      let rel = 0
      this.list.forEach(r => {
        rel += (r.num ? Number(r.num): 0)
      })
      return rel
    },
    count () {
      return this.list.length
    }
  },
  methods: {
    changeNum (l) {
      let exp = /^([1-9]\d*|[0]{1,1})$/
      if (!exp.test(l.num)) {
        Toast('您输入的数值不合法')
      } else if (this.surplus < 0) {
        Toast('数量已超过计划数量')
      }
    },
    addRow () {
      this.list.push({
        num: '',
        no: ''
      })
    },
    getData () {
      let params = [
          {'_ParamName': 'iv_barcode', '_DataType': '1', '_InputType': '1', '_ParamText': '3000000000001'},
          {'_ParamName': 'oc_spinfo', '_DataType': '3', '_InputType': '2', '_ParamText':null}
      ]
      Api.post('PKG_STOCKS.P_GET_SPINFO', params)
      .then(res => {
        console.log(res)
        if (res.Flag) {
          let data = res.Data
          if (data.length > 0) {
            this.info  = data[0]
          }
        }
      })
    },
    check () {
      if (this.surplus >= 0) {
        // 输入的数量应该是整数
        let exp = /^([1-9]\d*|[0]{1,1})$/
        let flag = this.list.some(l => {
          return !exp.test(l.num)
        })
        if (flag) {
          Toast('输入的数量不为正整数，请先检查！')
          return false
        } else {
          this.list.forEach(l => {
            this.save(l)
          })
        }
      } else {
        Toast('数量已超过计划数量，请先检查！')
        return false
      }
    },
    save (l) {
      let params = [
          {'_ParamName': 'IV_BARCODE', '_DataType': '1', '_InputType': '1', '_ParamText': this.info.DABZ_BARCODE},
          {'_ParamName':' IV_LXBH_NO', '_DataType': '1', '_InputType': '1', '_ParamText':l.no},
          {'_ParamName': 'IV_SHANGP_ID', '_DataType': '1', '_InputType': '1', '_ParamText': this.info.SHANGP_ID},
          {'_ParamName': 'IV_LOT', '_DataType': '1', '_InputType': '1', '_ParamText': this.info.LOT},
          {'_ParamName': 'IV_NUM', '_DataType': '1', '_InputType': '1', '_ParamText': l.num},
          {'_ParamName': 'IV_QUYU_NO', '_DataType': '1', '_InputType': '1', '_ParamText': 'JO1'}
      ]
      Api.post('PKG_STOCKS.P_RKZY', params)
      .then(res => {
        console.log(res)
        if (res.Flag) {
        } else {
          Toast(res.ErrInfo)
        }
      })
    },
    del (i) {
      this.list.splice(i, 1)
    }
  },
  created () {},
  mounted () {
    this.getData()
  }
}
</script>
<style lang="less">
.page-change-box {
    input.mint-field-core {
      font-size: 0.24rem;
      color: #ff5555;
    }
}
</style>

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
  &.page-change-box {
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
          text-align: center;
          // display: flex;
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
          position: relative;
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
                  background: url(/static/img/icon-4.png) no-repeat center;
                }
                &:nth-of-type(5) i.icon-box {
                  background: url(/static/img/icon-5.png) no-repeat center;
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
            ul {
              li {
                width: 100%;
                padding-left: 0.3rem;
                box-sizing: border-box;
                height: 0.6rem;
                line-height: 0.6rem;
                display: flex;
                // flex-direction: column;
                border: 1px solid #eee;
                .column {
                    .mint-cell:last-child {
                      background: none;
                    }
                }
                .column:nth-of-type(1) {
                  width: 3rem;
                  display: flex;
                  label {
                    width: 0.8rem;
                  }
                }
                .column:nth-of-type(2) {
                  width: 3rem;
                }
                .column:nth-of-type(3) {
                  flex: 1;
                  font-size: 0.36rem;
                  display: flex;
                  .add, .del {
                    flex: 1;
                    text-align: center;
                  }
                }
              }
            }
          }
          .ft {
            position: absolute;
            bottom: 0.3rem;
            right: 0.3rem;
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
      .section:nth-of-type(1) {
        flex: 1
      }
      .section:nth-of-type(2) {
        flex: 2;
        .header {
          display: flex;
        }
      }
    }
  }
}
</style>