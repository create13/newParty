<template>
  <div>
    <Row :gutter="20">
      <i-col span="4">
        <i-input v-model="value1" size="large">
          <span slot="prepend">账户名称</span>
        </i-input>
      </i-col>
      <i-col span="4">
        <i-input v-model="value1" size="large">
          <span slot="prepend">账户名称</span>
        </i-input>
      </i-col>
      <i-col span="4">
        <i-input v-model="value1" size="large">
          <span slot="prepend">账户名称</span>
        </i-input>
      </i-col>
      <i-col span="4">
        <i-input v-model="value1" size="large">
          <span slot="prepend">账户名称</span>
        </i-input>
      </i-col>
      <i-col span="5">
        <Button type="primary" :loading="loadingSearch" icon="search" @click="toLoadings">
          <span v-if="!loadingSearch">查询</span>
          <span v-else>Loading...</span>
        </Button>
        <Button type="primary" :loading="loadingSearch" icon="android-sync" @click="toLoadings">
          <span v-if="!loadingSearch">刷新</span>
          <span v-else>Loading...</span>
        </Button>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'search-component',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
};

</script>
<style lang='less' scoped>
</style>