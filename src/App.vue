<template>
  <div id="app" :class="$store.state.themeClass">
    <template v-if="$route.path.indexOf('login')>-1">
      <router-view />
    </template>
    <template v-else>
       <Sidebar />
      <NavBar />
      <main class="main-content">
        <Breadcrumb/>
        <b-card no-body>
          <router-view />
        </b-card>
      </main>
    </template>
    <b-overlay :show="$store.state.loading" no-wrap></b-overlay>
  </div>
</template>

<script>
import "./css/public.css";
import NavBar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import Content from "@/components/layout/content";
import Breadcrumb from "@/components/layout/breadcrumb";
import router from "@/router";
import { get, post } from "@/js/index";
export default {
  name: "App",
  components: {
    "NavBar": NavBar,
    "Content": Content,
    "Sidebar": Sidebar,
    "Breadcrumb": Breadcrumb
  },
  data() {
    return {};
  },
  methods: {
    initData() {
      const authMenuList = this.$store.state.authMenuList;
      if(authMenuList || authMenuList.length == 0){
        get('/menu/authMenuList').then(res=>{
        if(res.data){
          this.$store.state.authMenuList = res.data
        }
      })
      }
    },
    verification() {
      const token = localStorage.getItem("manage_auth_token");
      if (!token && this.$store.adress && this.$store.adress.length> 0 && this.$store.adress[1] !='login') {
        router.replace({ path: "/login" }).catch(res=>{});
      }
    }
  },
  watch: {
    $route(to, from) {
      this.initData();
      this.verification();
    }
  },
  mounted() {
    this.verification();
    this.initData();
  }
};
</script>
