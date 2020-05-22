<template>
  <b-container fluid>
    <b-row>
      <b-col>
        显示第 {{startRow}} 到第 {{endRow}} 条记录，总共 {{total}} 条记录 每页显示
        <b-form-select
          v-model="selected"
          :options="options"
           @change="initPageNo"
          class="page-tatal"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-select>条记录
      </b-col>
      <b-col>
        <b-pagination-nav
          v-model="pageNo"
          @change="initPageNo"
          :number-of-pages="pages"
          first-number
          last-number
          base-url="#"
          align="right"
        ></b-pagination-nav>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Pagination",
  props:{
      pages:{
         type: Number,
      required: true,
      default: 100
      },
      total:{
         type: Number,
      required: true,
      default: 100
      },
      pageSize:{
         type: Number,
      required: true,
      default: 10
      },
      startRow:{
         type: Number,
      required: true,
      default: 1
      },
      endRow:{
          type: Number,
      required: true,
      default: 10
      },
  },
  components: {},
  data() {
    return {
      selected: 10,
      pageNo: 1,
      currentPage: 5,
      options: [
        { item: 10, name: "10" },
        { item: 25, name: "25" },
        { item: 50, name: "50"},
        { item: 100, name: "100" }
      ]
    };
  },
  methods: {
    initPageNo(){
       this.$emit("refreshData")
    }
  },watch: {
      pageNo(newVal, oldVal) {
        this.$store.state.search.pageNo = newVal;
      },
      selected(newVal, oldVal) {
        this.$store.state.search.pageSize = newVal;
      }
  }

};
</script>
<style scoped src="../../css/layout/pagination.css">
</style>