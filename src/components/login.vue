<template>
<div class="login">
  <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form-signin">
    <div class="text-center mb-4">
    <img class="mb-4" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
    <h1 class="h3 mb-3 font-weight-normal">{{$store.state.themeName}}</h1>
  </div>
    <b-form-group
      id="input-group-1"
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="text"
        size="lg"
        required
        placeholder="请输入账号"
      ></b-form-input>
    </b-form-group>

    <b-form-group 
    id="input-group-2" 
    >
      <b-form-input id="input-2" type="password" v-model="form.name" size="lg" required placeholder="请输入密码"></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-4">
        <b-form-checkbox v-model="form.checked" value="me">记住我</b-form-checkbox>
    </b-form-group>

    <b-button type="submit" variant="primary" size="lg" block>登录</b-button>
  </b-form>
</div>
</template>
<script>
import { get, post } from "../js/index";
import router from "../router";
export default {
  name: "login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if(this.$cookies.isKey("manage_auth_token")){
        lthis.$cookies.remove("manage_auth_token") 
      }
      this.$cookies.set("manage_auth_token", '...')
      router.replace("/")
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  watch: {}
};
</script>
<style scoped src="../css/login.css"></style>