<template>
  <div id="app">
    <NavBar :dataNav="dataNav"></NavBar>

  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from 'components/common/NavBar'

import{ localRequest} from 'network/request'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data(){
    return {
      dataNav: [],
    }
  },
  methods: {
    getDataNav () {
      localRequest('global.json').then((result) => {
        this.dataNav = result;
        console.log(this.dataNav)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getDataNav()
  },
}
</script>
<style lang="scss">
</style>
