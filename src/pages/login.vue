<template>
  <div class="wrapper page-login">
    <fieldset class="formbox">
      <legend class="msg">用户登录信息</legend>
      <div class="form">
        <div class="item">
          <label for="IP">服务器IP：</label>
          <input type="text" name="IP" id="IP" v-model="user.IP">
        </div>
        <div class="item">
          <label for="port">服务端口：</label>
          <input type="text" name="port" id="port" v-model="user.port">
        </div>
        <div class="item">
          <label for="pnum">工作站号：</label>
          <input type="text" name="pnum" id="pnum"  v-model="user.pnum" @click="showitem">
          <div class="icon" @click="showitem"></div>
          <ul class="pnumdata">
            <li class="dataitem" v-for="(item,index) of pnumdata" :key="index" @click="changeitem">{{ item }}</li>
          </ul>
        </div>
        <div class="item">
          <label for="jnum">工<i></i>号：</label>
          <input type="text" name="jnum" id="jnum" v-model="user.jnum">
        </div>
        <div class="item">
          <label for="password">密<i></i>码：</label>
          <input type="password" name="password" id="password" v-model="user.password">
        </div>
      </div>
    </fieldset>
    <div class="btnbox">
      <button  class="btn" @click="login">登陆</button>
      <button  class="btn exit" @click="exit">退出</button>
    </div>
    <div class="hint">温馨提示：欢迎您使用九州通医药集团穿梭车智能控制系统</div>
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
    // 工作站号
    showitem () {
      document.getElementsByClassName('pnumdata')[0].style.display = 'block'
    },
    changeitem (e) {
      this.user.pnum = e.target.innerHTML
      document.getElementsByClassName('pnumdata')[0].style.display = 'none'
    },
    // 登陆
    login () {
      this.saveUser(this.user)
      console.log(this.$store.state.user)
      alert('登陆成功')
    },
    ...mapMutations(['saveUser']),
    // 退出
    exit () {}
  }
}
</script>
<style lang="less">
.page-login {
  position: relative;
  background: #999;
  height: 100%;
  width: 100%;
  .formbox {
    position: absolute;
    width: 5.6rem;
    margin: auto;
    padding: .2rem;
    height: 3.3rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: .25rem;
    color: #fff;
    border-radius: .08rem;
    border-color: #fff;
    border-style: solid;
    border-width: .04rem;
    .msg {
      padding:0 .05rem;
      font-size: .27rem;
    }
    .item {
      position: relative;
      margin: .1rem 0;
      padding-left: .15rem;
      label {
        width: 1.25rem;
        display: inline-block;
        i {
          display: inline-block;
          padding-left: .5rem;
        }
      }
      input {
        box-sizing: border-box;
        width: 3.8rem;
        height: .5rem;
        display: inline-block;
        outline: none;
        border: .04rem solid #fff;
        background: #fff;
      }
      .icon {
        position: absolute;
        top: 0.23rem;
        right: .4rem;
        width:0;
        height:0;
        border-width:.08rem .08rem 0;
        border-style:solid;
        border-color:#333 transparent transparent;
      }
      .pnumdata {
        display: none;
        position: absolute;
        top: .5rem;
        right: .35rem;
        line-height: .5rem;
        width: 3.78rem;
        background: #ccc;
        color: #333;
        border-left: .02rem solid #fff;
        border-right: .02rem solid #fff;
        z-index: 999;
        box-sizing: border-box;
        .dataitem {
          line-height: .5rem;
          width: 3.8rem;
          height: .5rem;
          background: #ccc;
          border-bottom: .02rem solid #fff;
        }
      }
    }
  }
  .btnbox {
    position: absolute;
    bottom: .7rem;
    right: .6rem;
    .btn {
      font-size: .25rem;
      line-height: .25rem;
      padding: .2rem .4rem;
      border: none;
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
      border-radius: 4px;
    }
    .exit {
      background-color: #333;
      border-color: #fff;
    }
  }
  .hint {
    position: absolute;
    bottom: .3rem;
    left: .4rem;
    color: red;
    font-size: .3rem;
  }
}
</style>
<style lang="less" scoped>
</style>