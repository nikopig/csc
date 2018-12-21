<template>
  <div class="wrapper page-index">
    <div class="container">
      <div class="con-left">
        <div class="row">
          <div class="cell pick">
            <router-link to="/pick">
              <img class="icon" src="/static/img/index-icon/pick.png">
              <span class="title">拣选</span>
            </router-link>
          </div>
          <div class="cell bannerBox">
            <swiper :options="swiperOption" ref="mySwiper" class="wraps">
              <!-- slides -->
              <swiper-slide>
                <img src="/static/img/index-icon/imgOne.jpg">
              </swiper-slide>
              <swiper-slide>
                <img src="/static/img/index-icon/imgTwo.jpg">
              </swiper-slide>
              <swiper-slide>
                <img src="/static/img/index-icon/imgOne.jpg">
              </swiper-slide>
              <swiper-slide>
                <img src="/static/img/index-icon/imgTwo.jpg">
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <div class="row">
          <div class="cell change-box">
            <router-link to="/changeBox">
              <img class="icon" src="/static/img/index-icon/changeBox.png">
              <span class="title">换箱</span>
            </router-link>
          </div>
          <div class="cell row-right">
            <span class="small-cell one">
             <router-link to="/mergeBox">
               <img class="icon" src="/static/img/index-icon/mergeBox.png">
                <p class="titl">合箱</p>
             </router-link>
            </span>
            <span class="small-cell two">
              <router-link to="/mergeBox">
                <img class="icon" src="/static/img/index-icon/moveLibrary.png">
                <p class="titl">移库</p>
              </router-link>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="cell order">
            <router-link to="/">
              <img class="icon" src="/static/img/index-icon/searchOrder.png">
              <span class="title">订单箱查询</span>
            </router-link>
          </div>
          <div class="cell row-right">
            <span class="small-cell one one-1">
              <router-link to="/">
                <img class="icon" src="/static/img/index-icon/takeInventory.png">
                <p class="titl">盘存</p>
              </router-link>
            </span>
            <span class="small-cell two two-2">
              <router-link to="/">
                <img class="icon" src="/static/img/index-icon/searchInventory.png">
                <p class="titl">库存查询</p>
              </router-link>
            </span>
          </div>
        </div>
      </div>
      <div class="con-right">
        <div class="news">
          <dl>
            <dt>
              <img src="/static/img/index-icon/dynamic.png">
              最新动态</dt>
            <dd v-for="item in worker" :key="item.id">
              <div class="left">
                <img :src="item.workimg">
              </div>
              <div class="right">
                <p>
                  <span class="work">
                    工号<span class="workerNum">{{item.workerNum}}</span>
                  </span>
                  实时工
                </p>
                <p>做量统计<span class="workNum">{{item.workCount}}</span></p>
              </div>
            </dd>
          </dl>
        </div>
        <div class="workCount">
          <img src="/static/img/index-icon/workCount.png">
          <p>工作量统计</p>
        </div>
      </div>
      <div class="quit">
        <button>退出</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'index',
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        loop:true,
        autoplay:true,
        pagination:{
          el:'.swiper-pagination',
          clickable:true
        },
        type: 'bullets'
      },
      worker:[{
        workimg:'/static/img/index-icon/worker.jpg',
        workerNum:'1111',
        workCount:'11111'
      },
      {
        workimg:'/static/img/index-icon/worker.jpg',
        workerNum:'1111',
        workCount:'11111'
      },
      {
        workimg:'/static/img/index-icon/worker.jpg',
        workerNum:'1111',
        workCount:'11111'
      },
      {
        workimg:'/static/img/index-icon/worker.jpg',
        workerNum:'1111',
        workCount:'11111'
      },
      {
        workimg:'/static/img/index-icon/worker.jpg',
        workerNum:'1111',
        workCount:'11111'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
.fl{
  float: left;
}
.fr{
  float: right;
}
.clearfix{
  overflow: hidden;
  clear: both;
}
.wrapper{
  height:100%;
  &.page-index{
    width:100%;
    background: #e8eaf1;
    .container{
      width: 100%;
      height:100%;
      padding:0.65rem 0.8rem;
      display: flex;
      box-sizing: border-box;
      font-size: 0.25rem;
      font-weight: 600;
      color:#fff;
      text-align: center;
      font-family: "Microsoft YaHei";
      .con-left{
        width:80%;
        .row{
          overflow: hidden;
          clear: both;
          width:100%;
          height:2rem;
          margin:0.25rem 0rem;
          .cell{
            position: relative;
            width:47%;
            float:left;
            height:100%;
            display: inline-block;
            margin:0rem 0.1rem;
            box-sizing: border-box;
            a{
              text-decoration-line: none;
              color:#fff;
              display: inline-block;
              width:100%;
              height:100%;
              .title{
                position: absolute;
                display: inline-block;
              }
            }
            &.pick{
              line-height: 2rem;
              background: #e37f75;
              .icon{
                display: inline-block;
                position: absolute;
                top:50%;
                margin-top: -0.33rem;
                left:30%;
              }
              .title{
                left:55%;
              }
            }
            .wraps{
              height:100%;
              img{
                width: 100%;
                height: 100%;
                display: inline-block;
              }
            }
            &.change-box{
              line-height: 2rem;
              background: #57b789;
              .icon{
                position: absolute;
                top:50%;
                margin-top:-0.25rem;
                left:25%;
              }
              .title{
                left:60%;
              }
            }
            &.row-right{
              .small-cell{
                display: inline-block;
                width:49%;
                height:100%;
                box-sizing: border-box;
                .icon{
                  display: inline-block;
                  height:0.56rem;
                  margin-top:0.45rem;
                }
                .titl{
                  margin:0.1rem;
                }
                &.one{
                  background: #a866c5;
                }
                &.two{
                  background: #beb322;
                }
                &.one-1{
                  background: #b6905d;
                }
                &.two-2{
                  background: #44729d;
                }
              }
            }
            &.order{
              background: #cfb861;
              line-height: 2rem;
              .icon{
                position: absolute;
                top:50%;
                margin-top:-0.33rem;
                margin-left: -0.8rem;
              }
            }
          }
        }
      }
      .con-right{
        flex: 1;
        .news{
          margin: 0.25rem 0rem;
          background: #7fabc5;
          height:4.25rem;
          font-weight: 500;
          overflow: hidden;
          dl{
            margin:0rem;
            dt{
              height:0.41rem;
              line-height: 0.41rem;
              font-size: 0.18rem;
              text-align: left;
              padding:0rem 0.1rem;
            }
            dd{
              width:100%;
              padding:0rem 0.1rem;
              display: flex;
              margin:0rem 0rem 0.15rem 0rem;
              height:0.6rem;
              box-sizing: border-box;
              line-height: 0.2rem;
              .left{
                width:0.9rem;
                img{
                  display: inline-block;
                  width: 100%;
                  height: 100%;
                }
              }
              .right{
                  font-size: 0.14rem;
                  font-family: "Microsoft YaHei";
                  color: rgba(255, 255, 255, 0.8);
                  p{
                    padding: 0.02rem 0rem;
                    margin:0.05rem;
                    .work{
                      border-bottom:1px solid #fff;
                    }
                    .workNum{
                      margin-left:0.02rem;
                    }
                  }
              }
            }
          }
        }
        .workCount{
          height:2rem;
          background: #d87751;
          img{
            display: inline-block;
            height: 0.56rem;
            margin-top: 0.45rem;
          }
          p{
            margin:0.1rem;
          }
        }
      }
      .quit{
        position: absolute;
        bottom:0.4rem;
        right:0.8rem;
        width:1rem;
        height:0.5rem;
        line-height: 0.5rem;
        button{
          background: none;
          font-weight: 800;
          width: 100%;
          height:100%;
          border: none;
          outline-style: none;
        }
      }
    }
  }

}

</style>