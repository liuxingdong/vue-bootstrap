<template>
  <ul class="sidebar-menu" :class="{display:!isPatent}">
    <li class="menu-header" v-if="isFirst">Main</li>
    <template v-for="(item,index) in treeData">
      <li v-bind:key="index" @click="clickMenu(item)">
        <router-link :to="item.path" :class="checkId == item.menuId?`active`:null">
          <b-icon :icon="item.icon" class="menu-li-prefix"></b-icon>
          <span>{{item.menuName}}</span>
          <b-icon :icon="checkId == item.menuId?`chevron-down`:`chevron-right`" class="sub-menu-arrow"></b-icon>
        </router-link>
        <template v-if="item.child && item.child.length> 0">
          <child-item :treeData="item.child" :isPatent="checkId == item.menuId" :isFirst="false"/>
        </template>
      </li>
    </template>
  </ul>
</template>
<script>
export default {
  name: "ChildItem",
  props: {
    treeData: {
      type: Array,
      required: true
    },
    isPatent: {
      type: Boolean,
      required: true
    },
    isFirst: {
      type: Boolean,
      required: true
    }
  },
  components: {},
  data() {
    return {
      checkId:''
    };
  },
  methods: {
    clickMenu(data){
        if(data.menuId == this.checkId){
            // this.checkId = '';
        }else {
            this.checkId = data.menuId;
        }
    }
  },
  mounted() {}
};
</script>
<style scoped src="../../css/layout/childitem.css">
</style>