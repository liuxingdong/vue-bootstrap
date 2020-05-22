<template>
  <b-card title="用户管理" header-tag="header" footer-tag="footer">
    <template v-slot:header>
      <l-search />
    </template>
    <b-card-text>
      <l-table :items="items" :fields="fields"/>
    </b-card-text>

    <template v-slot:footer>
      <pagination
        :startRow="startRow"
        :pageSize="pageSize"
        :endRow="endRow"
        :total="total"
        :pages="pages"
      />
    </template>
  </b-card>
</template>
<script>
import Pagination from "../layout/pagination";
import LSearch from "../template/search";
import LTable from "../template/table";
import { get } from "../../js";
export default {
  name: "User",
  components: {
    "pagination": Pagination,
    "l-search": LSearch,
    "l-table": LTable,
  },
  data() {
    return {
      sortBy: "age",
      sortDesc: false,
      isBusy: true,
      fields: [],
      items: [],
      startRow: 1,
      pageSize: 10,
      endRow: 10,
      total: 100,
      pages: 100
    };
  },
  methods: {
    getUserList() {
      this.$store.state.loading = true;
      get("/sys/user/list").then(res => {
        if (res) {
          this.isBusy = false;
          this.$store.state.loading = false;
          this.fields = res.fields;
          this.items = res.items.data;
        }
      });
    }
  },
  mounted() {
    this.getUserList();
  }
};
</script>
<style scoped src="../../css/system/user.css">
</style>