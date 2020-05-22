<template>
    <div class="main-sidebar sidebar-style-2" tabindex="1" style="overflow: hidden; outline: none;">
        <aside class="sidebar-wrapper">
          
          <div class="sidebar-user">
            <div class="sidebar-user-picture">
              <b-avatar rounded size="72px"></b-avatar>
            </div>
            <div class="sidebar-user-details">
              <div class="user-name">Sarah Smith</div>
              <div class="user-role">Administrator</div>
            </div>
          </div>
          <child-item :treeData="menuData" :isPatent="true" :isFirst="true"/>
        </aside>
      </div>
</template>
<script>
import ChildItem from "./childitem";
import { get, post } from "../../js/index";
export default {
  name: "LSidebar",
  components: {
    "child-item":ChildItem
  },
  data() {
    return {
      menuData:[]
    };
  },
  methods: {
    initMenu(){
      get('/menu/authMenuList').then(res=>{
        if(res.data){
          this.menuData = res.data
        }
      })
    }
  },
  mounted() {
    this.initMenu();
  }
};
</script>
<style scoped src="../../css/layout/sidebar.css">

</style>