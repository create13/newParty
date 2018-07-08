<template>
  <div>
    <div class="out-wrap">
      <!-- <Row>
        <i-col span="12">
          <i-input v-model="value" size="large" placeholder="large size"></i-input>
        </i-col>
        <i-col span="12"></i-col>
      </Row> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      value: ''
    };
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
};

</script>
<style scoped>
  .out-wrap {
    width: 100%;
    height: 100%;
    background-image: url(../assets/image/img-bg.jpg);
    background-repeat:  no-repeat;
    background-size: 100% 100%;
  }
</style>
