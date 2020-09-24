<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="primary"
  >
    <b-navbar-brand href="#">
      <img
        src="~assets/images/logo.png"
        alt=""
        class="img-fluid"
      >
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <span v-if="navItem.subItem.length<1">
          <b-nav-item
            v-for="navItem in dataNav"
            :key="navItem.index"
          >
            <b-icon
              :icon="navItem.iconName"
              class="mr-2"
            ></b-icon>{{navItem.title}}
          </b-nav-item>
        </span>
        <span v-else>
          <b-nav-item-dropdown
            v-for="navItem in dataNav"
            :key="navItem.index"
            :text="navItem.title"
            right
          >
            <b-dropdown-item
              v-for="subItem in navItem.subItem"
              :href="subItem.subUrl"
              :key="subItem.index"
            >{{subItem.subTitle}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </span>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  components:{},
  props:{
    dataNav: {
      require: true,
      type: Array,
      default: () => {}
    }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
  }
}
</script>
<style scoped>
.navbar-brand {
  max-width: 150px;
}
</style>