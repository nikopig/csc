<template>
  <div class="wrapper page-login">
    <div class="container">
      <div class="wrap">
        <img class="img" src="/static/img/loginleft.png" alt="穿梭车">
        <div class="txt">
          <img class="logo" src="/static/img/logoicon.png" alt="九州通">
          <div class="introC">穿梭车库一体机管理系统</div>
          <div class="introE">SHUTTLE GARAGE INTEGRATED MANAGEMENT SYSTEM</div>
        </div>
      </div>
      <div class="right">
        <div class="formwrap">
          <div class="title">用户登录</div>
          <div class="form">
            <div class="item clear">
              <input type="text" class="IP" placeholder="服务器IP" name="IP" id="IP" v-model="user.IP">
              <input type="text" class="port" placeholder="服务端口" name="port" id="port" v-model="user.port">
            </div>
            <div class="item">
              <input type="text" class="pnum" placeholder="工作站号" name="pnum" id="pnum"  v-model="user.pnum">
            </div>
            <div class="item">
              <input type="text" class="jnum" placeholder="请输入工号" name="jnum" id="jnum" v-model="user.jnum">
            </div>
            <div class="item">
              <input type="password" class="password" placeholder="请输入密码" name="password" id="password" v-model="user.password">
            </div>
            <div class="item">
              <button  class="btn" @click="login">登陆</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      user: {
        IP: '',
        port: '',
        pnum: '',
        jnum: '',
        password: ''
      },
      // 工作站号
      pnumdata: ['11111111111','2222222222','333333333333']
    }
  },
  methods:{
    // store
    ...mapMutations(['saveUser']),
    // 登陆
    login () {
      this.saveUser(this.user)
      console.log(this.$store.state.user)
      alert('登陆成功')
    }
  }
}
</script>
<style lang="less">
.page-login {
  position: relative;
  background: #e8eaf1;
  height: 100%;
  width: 100%;
  .container {
    box-sizing: border-box;
    width: 78%;
    margin: 0 auto;
    height: 89%;
    padding-top:11%;
    display: flex;
    .wrap {
      position: relative;
      height: 5.32rem;
      .img {
        width: auto;
        height: 5.32rem;
      }
      .txt {
        font-family: "Microsoft YaHei","微软雅黑";
        position: absolute;
        left: 0;
        width: 100%;
        height: 1.43rem;
        box-sizing: border-box;
        top: calc(50% - 0.7rem);
        text-align: center;
        color: #fff;
        background-color: rgba(0,0,0,0.678);
        padding: .17rem 0 .24rem 0;
        .logo {
          width: auto;
          height: .47rem;
        }
        .introC {
          font-size: .26rem;
          font-weight: bold;
        }
        .introE {
          font-size: .13rem;
          padding-top: .08rem;
          font-weight: 500;
        }
      }
    }
    .formwrap {
      box-sizing: border-box;
      font-family: "FZLTCHK";
      flex: 1;
      height: 5.32rem;
      padding: 0.95rem 1.32rem;
      background-color: #fff;
      .title {
        font-size: .26rem;
        color: rgb(53, 64, 82);
        font-weight: bold;
      }
      .form {
        margin-top: .17rem;
        input{
          font-family: "Microsoft YaHei","微软雅黑";
          width: 100%;
          color: #666;
          font-size: .16rem;
          box-sizing: border-box;
          height: .46rem;
          line-height: .46rem;
          padding: .15rem 0 .15rem .38rem;
          border: .01rem solid rgb(223, 227, 233);
          margin-top: .14rem;
          outline: none;
        }
        input::-webkit-input-placeholder {
          color: rgb(184, 187, 192);
          letter-spacing: .01rem;
        }
        input:-moz-placeholder {
          color: rgb(184, 187, 192);
          letter-spacing: .01rem;
        }
        input::-moz-placeholder {
          color: rgb(184, 187, 192);
          letter-spacing: .01rem;
        }
        input:-ms-input-placeholder {
          color: rgb(184, 187, 192);
          letter-spacing: .01rem;
        }
        .clear {
          clear: both;
          .IP {
            float: left;
            width: 62%;
            padding-left: .15rem;
          }
          .port {
            float: right;
            width: 35%;
            padding-left: .15rem;
          }
        }
        .pnum {
          background: url(/static/img/arrowicon.png) no-repeat .15rem center;
          background-size: .16rem;
        }
        .jnum {
          background: url(/static/img/usericon.png) no-repeat .15rem center;
          background-size: .16rem;
        }
        .password {
          background: url(/static/img/passicon.png) no-repeat .15rem center;
          background-size: .16rem;
        }
        .btn {
          box-sizing: border-box;
          width: 100%;
          height: .46rem;
          padding: .13rem 1.45rem .13rem 1.44rem;
          font-size: .2rem;
          margin-top: .14rem;
          letter-spacing: .05rem;
          background-color: #198efb;
          border: none;
          color: #fff;
        }
      }
    }
  }
}
</style>