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
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#">Disabled</b-nav-item>

        <b-nav-item-dropdown
          text="Lang"
          right
        >
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  components:{},
  props:{
    navData: {
      type: Object,
      required: true
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