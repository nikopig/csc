<template>
  <div class="wrapper page-merge-box">
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
              <label class="val">10110705087333</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">商品名称:</label>
              <label class="val">感冒灵颗粒</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">商品批号:</label>
              <label class="val">16080190</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">库存数量:</label>
              <label class="val">26</label>
            </li>
            <li>
              <i class="icon-box"></i>
              <label class="key">料箱编号:</label>
              <label class="val">D86552236842</label>
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
              <div class="box box-1"><div class="num">25/15</div></div>
              <div class="arrow"></div>
              <div class="box box-2"><div class="num">25/10</div></div>
            </div>
          </div>
          <div class="tw">
            <ul class="tb">
              <li class="hd">
                <div class="cell">商品编号</div>
                <div class="cell">商品名称</div>
                <div class="cell">商品批号</div>
                <div class="cell">库存数量</div>
                <div class="cell">料箱编号</div>
              </li>
              <li class="tr">
                <div class="cell">SP484231</div>
                <div class="cell">东阿阿胶</div>
                <div class="cell">PH4564815</div>
                <div class="cell">12</div>
                <div class="cell">25</div>
              </li>
              <li class="tr bl">
                <div class="cell">SP484231</div>
                <div class="cell">东阿阿胶</div>
                <div class="cell">PH4564815</div>
                <div class="cell">12</div>
                <div class="cell">25</div>
              </li>
              <li class="tr">
                <div class="cell">SP484231</div>
                <div class="cell">东阿阿胶</div>
                <div class="cell">PH4564815</div>
                <div class="cell">12</div>
                <div class="cell">25</div>
              </li>
              <li class="tr bl">
                <div class="cell">SP484231</div>
                <div class="cell">东阿阿胶</div>
                <div class="cell">PH4564815</div>
                <div class="cell">12</div>
                <div class="cell">25</div>
              </li>
            </ul>
          </div>
          <div class="ft">
            <div class="btn success">保存</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  name: 'changeBox',
  components: {XButton},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
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
  &.page-merge-box {
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
          padding-top: 0.36rem;
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
                  background: url(/static/img/icon-9.png) no-repeat center;
                }
                &:nth-of-type(5) i.icon-box {
                  background: url(/static/img/icon-10.png) no-repeat center;
                }
              }
            }
            .img-box {
              width: 4.14rem;
              height: 3.46rem;
              margin: 0 auto;
              margin-top: 0.32rem;
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
              padding: 0.55rem 0 0.85rem 0;
              box-sizing: border-box;
              .tl {
                // width: 0.72rem;
                font-size: 0.24rem;
                line-height: 0.64rem;
              }
              .ls {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                .arrow {
                  width: 0.8rem;
                  height: 0.42rem;
                  margin: 0 0.23rem;
                  background: url(/static/img/arrow.png) no-repeat center;
                  background-size: 100%;
                }
                .box {
                  position: relative;
                  margin: 0 0.23rem;
                  color: #fff;
                  .num {
                    width: 100%;
                    position: absolute;
                    font-size: 0.22rem;
                    text-align: center;
                    bottom: 0.15rem;
                    left: 0;
                  }
                }
              }
            }
            .tw {
              padding: 0 0.9rem;
              box-sizing: border-box;
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
              margin-top: 1rem;
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
      &.box-1 {
        background: url(/static/img/box-1.png) no-repeat center;
      }
      &.box-2 {
        background: url(/static/img/box-2.png) no-repeat center;
      }
      &.box-3 {
        background: url(/static/img/box-3.png) no-repeat center;
      }
      &.box-4 {
        background: url(/static/img/box-4.png) no-repeat center;
      }
      &.box-5 {
        background: url(/static/img/box-5.png) no-repeat center;
      }
    }
  }
}
</style>