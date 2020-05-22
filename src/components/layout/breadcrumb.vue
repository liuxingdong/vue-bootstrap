<template>
  <div class="l-breadcrumb page-header d-md-flex justify-content-between align-items-center">
      <h4>{{$route.meta.title}}</h4>
      <b-breadcrumb :items="items" class="mb-0 p-0 bg-white"></b-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "Breadcrumb",
  components: {
  },
  data() {
    return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: this.$route.meta.title,
            active: true
          }
        ]
    };
  },
  methods: {
  },
  mounted() {}
};
</script>
<style scoped src="../../css/layout/breadcrumb.css">
</style>