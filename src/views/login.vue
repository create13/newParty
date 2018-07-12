<template>
  <div class="login-page">
    <div class="login-main">
      <i-input v-model="username" placeholder="请输入用户名" clearable style="width: 200px"></i-input>
      <i-input v-model="pass" placeholder="请输入密码" clearable style="width: 200px"></i-input>
      <i-input v-model="checked" placeholder="请输入验证码" clearable style="width: 200px"></i-input>
       <Button type="primary">登录</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      pass: '',
      checked: ''
    };
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    refreshCode () {
    },
    onlogin () {
    }
  }
};

</script>
<style lang='less' scoped>
  .login-page {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url(../assets/image/bg-login.jpg) no-repeat;
    background-size: 100% 100%;
    .login-main {
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: -200px;
      margin-left: -200px;
      width: 400px;
      height: 400px;
      background-color: #fff;
    }
  }
</style>
<style lang="less">
  .ivu-input {
    margin-top: 20px;
  }
  .ivu-btn {
    padding: 6px 88px;
    margin-top: 20px;
  }
</style>
