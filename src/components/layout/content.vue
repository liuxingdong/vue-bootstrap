<template>
  <b-container fluid class="p-3">
    <Breadcrumb/>
    <b-card no-body>
      <router-view/>
    </b-card>
  </b-container>
</template>
<script>
import Breadcrumb from "./breadcrumb";
export default {
  name: "LContent",
  components: {
    "Breadcrumb":Breadcrumb
  },
  data() {
    return {
        aspect: '16:9'
    };
  },
  methods: {
  },
  mounted() {}
}
</script>
<style scoped>

</style>