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
            <div class="item first">
              <input type="text" class="IP" placeholder="服务器IP" name="IP" id="IP" v-model="user.IP">
              <input type="text" class="port" placeholder="服务端口" name="port" id="port" v-model="user.port">
            </div>
            <div class="item">
              <input type="text" class="pnum" placeholder="工作站号" name="pnum" id="pnum"  v-model="user.pnum" @click="showitem" @blur="blur">
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
            <!-- 站号列表 -->
            <ul class="pnumwrap" v-if="pnum">
              <li v-for="(item,index) of pnumdata" :key="index" @click="showdata">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
      pnum: false,
      pnumdata: ['J01','J02']
    }
  },
  computed: {
    // 获取store
    ...mapState({StateData: state => state.login.user})
  },
  methods:{
    showitem () {
      this.pnum = true
    },
    showdata (e) {
      this.user.pnum = e.target.innerHTML
      this.pnum = false
    },
    blur () {
      setTimeout(() => { this.pnum = false }, 200)
    },
    // store
    ...mapActions('login',['saveUser']),
    // 登陆
    login () {
      let params = {
        IP: this.user.IP,
        port: this.user.port,
        pnum: this.user.pnum,
        jnum: this.user.jnum,
        password: this.user.password
      }
      // 存cookie
      if (params.IP && params.port && params.pnum && params.jnum && params.password) {
        let LoginCookie = String(params.IP) + String(params.port) + String(params.pnum) +String(params.jnum) + String(params.password)
        // 存store
        this.saveUser(params)
        this.setCookie('LoginCookie', LoginCookie, 365 * 24 * 60)
        this.$router.push({path: '/'})
      } else {
        alert('请输入登录信息')
      }
    }
  }
}
</script>
<style lang="less">
.wrapper {
  height: 100%;
  &.page-login {
    font-family: "Microsoft YaHei","微软雅黑";
    position: relative;
    background: #e8eaf1;
    width: 100%;
    .container {
      box-sizing: border-box;
      width: 78%;
      margin: 0 auto;
      height: 100%;
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
          position: relative;
          margin-top: .17rem;
          .item {
            &.first {
              display: flex;
            }
            input{
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
              &::-webkit-input-placeholder {
                color: rgb(184, 187, 192);
                letter-spacing: .01rem;
              }
              &:-moz-placeholder {
                color: rgb(184, 187, 192);
                letter-spacing: .01rem;
              }
              &::-moz-placeholder {
                color: rgb(184, 187, 192);
                letter-spacing: .01rem;
              }
              &:-ms-input-placeholder {
                color: rgb(184, 187, 192);
                letter-spacing: .01rem;
              }
              &.IP {
                width: 62%;
                padding-left: .15rem;
                margin-right: .11rem;
              }
              &.port {
                flex: 1;
                padding-left: .15rem;
              }
              &.pnum {
                position: relative;
                background: url(/static/img/arrowicon.png) no-repeat .15rem center;
                background-size: .16rem;
              }
              &.jnum {
                background: url(/static/img/usericon.png) no-repeat .15rem center;
                background-size: .16rem;
              }
              &.password {
                background: url(/static/img/passicon.png) no-repeat .15rem center;
                background-size: .16rem;
              }
            }
            .btn {
              box-sizing: border-box;
              width: 100%;
              height: .46rem;
              line-height: .46rem;
              font-size: .2rem;
              margin-top: .14rem;
              letter-spacing: .05rem;
              background-color: #198efb;
              border: none;
              text-align: center;
              color: #fff;
              outline: none;
              cursor: pointer;
            }
          }
          .pnumwrap {
            position: absolute;
            top: 1.2rem;
            background: #ddd;
            left: 0;
            width: 100%;
            height: 0.92rem;
            box-sizing: border-box;
            border: .01rem solid rgb(223, 227, 233);
            border-top: 0;
            border-bottom: 0;
            // overflow-y: scroll;
            li {
              display: inline-block;
              width: 100%;
              color: #666;
              font-size: .16rem;
              box-sizing: border-box;
              height: .46rem;
              padding: .15rem 0 .15rem .38rem;
              border-bottom: .01rem solid #fff;
            }
          }
        }
      }
    }
  }
}
</style>