<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="l-navbar fixed-top">
    <b-navbar-brand href="#" class="sys-info-show">{{$store.state.themeName}}</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
           <b-input-group size="sm" >
            <b-form-input size="sm" placeholder="Search"></b-form-input>
             <b-input-group-append>
      <b-button><b-icon icon="search" aria-hidden="true"></b-icon></b-button>
    </b-input-group-append>
          </b-input-group>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right no-caret class="l-item-dropdown">
          <template v-slot:button-content>
            <b-icon icon="bell-fill"></b-icon>
          </template>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right no-caret>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <b-avatar badge-variant="info" src="https://placekitten.com/300/300" font-scale="2.5">
      <template v-slot:badge><b-icon icon="star-fill"></b-icon></template>
    </b-avatar>
          </template>
          <b-dropdown-item href="#" >
            <b-icon icon="person" class="l-dropdown-item-custom"></b-icon>个人中心
          </b-dropdown-item>
          <div class="dropdown-divider"></div>
          <b-dropdown-item href="#" class="text-danger" @click="dologout">
            <b-icon icon="box-arrow-in-right" class="l-dropdown-item-custom"></b-icon>退出
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>
<script>
import router from "../../router";
export default {
  name: "NavBar",
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    toggleBusy() {
    },
    dologout(){
      const token = localStorage.getItem("manage_auth_token");
      if(token){
        localStorage.removeItem("manage_auth_token")

      }
      router.replace({path:'/login'})
    }
  },
  mounted() {}
};
</script>
<style scoped src="../../css/layout/navbar.css">

</style>

