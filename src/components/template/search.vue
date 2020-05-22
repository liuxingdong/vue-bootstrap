<template>
  <b-container fluid>
    <b-row>
      <b-col md="3">
        <b-input-group>
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-button squared variant="secondary">搜索</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col md="9">
        <b-button-group class="pr-0" style="float:right;">
          <b-button variant="success" >
            <b-icon icon="gear-fill" aria-hidden="true"></b-icon>新增
          </b-button>
          <b-button variant="info" >
            <b-icon icon="gear-fill" aria-hidden="true"></b-icon>批量删除
          </b-button>
          <b-button variant="warning" >
            <b-icon icon="gear-fill" aria-hidden="true"></b-icon>刷新
          </b-button>
        </b-button-group>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "LSearch",
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
</style>