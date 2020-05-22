<template>
  <b-table
    :items="items"
    :fields="fields"
    :busy="isBusy"
    bordered
    striped
    outlined
    hover
    no-provider-paging
  >
    <!-- A virtual column -->
    <template v-slot:cell(index)="data">{{ data.index + 1 }}</template>
    <!-- A virtual column -->
    <template v-slot:cell(oper)="data">
      <b-button-group>
        <b-button
          variant="outline-primary"
          v-for="(item,index) in data.item.oper"
          v-bind:key="index"
          size="sm"
        >
          <b-icon :icon="`${item.icon}`"></b-icon>
        </b-button>
      </b-button-group>
    </template>
    <template v-slot:table-busy>
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>加载中...</strong>
      </div>
    </template>
  </b-table>
</template>
<script>
export default {
  name: "LTable",
  props:{
    items:{
      type:Array,
      default:function () {
        return []
      },

    },
    fields:{
      type:Array,
      default:function () {
        return []
      },

    },
  },
  components: {},
  data() {
    return {
      isBusy:false,
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
</style>