<template>
  <div id="app" :style="appStyle">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      appStyle: {}
    }
  },
  methods: {
    initRem () {
      let w = window.innerWidth
      let doc = document.documentElement || document
      doc.style.fontSize = (w / 1366) * 100 + 'px'
    }
  },
  mounted () {
    this.initRem()
    window.addEventListener('resize', this.initRem)
    this.appStyle = {
      height: window.innerHeight + 'px'
    }
  }
}
</script>

<style>
  #app {
    font-size: 0.18rem;
  }
</style>
