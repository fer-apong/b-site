<template>
  <div id="app">
    <NavBar :navData=navData></NavBar>

  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from 'components/common/NavBar'

import globalData from '../public/local/data'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data(){
    return {
      navData: globalData
    }
  },
}
</script>
<style lang="scss">
</style>
