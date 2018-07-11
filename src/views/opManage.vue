<template>
  <div class="second-page">
    <div class="colors-square">
      <div class="colors-second" v-for="(sitem, sindex) in secondsData" :key="sindex" :style="{backgroundColor: sitem.colorsbg}" @click="routeGo(sitem)">
        <img :src="sitem.imagesIcon" alt="" class="img-size">
        <div class="fonts-desc">{{sitem.fontsDesc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'opManage',
  data () {
    return {
      secondsData: [
        {imagesIcon: require('../assets/image/second-villa.png'), fontsDesc: '物流公司管理', colorsbg: '#55ABFB', path: ''},
        {imagesIcon: require('../assets/image/second-menu.png'), fontsDesc: '交易账户管理', colorsbg: '#40C3B0', path: '/opConfig'},
        {imagesIcon: require('../assets/image/second-package.png'), fontsDesc: '结算账户授信', colorsbg: '#F1D36A', path: ''},
        {imagesIcon: require('../assets/image/second-search.png'), fontsDesc: '货款授信初审', colorsbg: '#FBBA8E', path: ''},
        {imagesIcon: require('../assets/image/second-money.png'), fontsDesc: '充值管理', colorsbg: '#14D0BC', path: ''},
        {imagesIcon: require('../assets/image/second-pay.png'), fontsDesc: '线下充值审核', colorsbg: '#41D386', path: ''},
        {imagesIcon: require('../assets/image/second-file.png'), fontsDesc: '提现申请初审', colorsbg: '#39D8E6', path: ''},
        {imagesIcon: require('../assets/image/second-deduct.png'), fontsDesc: '扣款申请', colorsbg: '#FB6C68', path: ''},
        {imagesIcon: require('../assets/image/second-check.png'), fontsDesc: '扣款审核', colorsbg: '#FB6C68', path: ''},
        {imagesIcon: require('../assets/image/second-location.png'), fontsDesc: '运营线路审核', colorsbg: '#2898C2', path: ''},
        {imagesIcon: require('../assets/image/second-branch.png'), fontsDesc: '组织管理', colorsbg: '#398D94', path: ''},
        {imagesIcon: require('../assets/image/second-home.png'), fontsDesc: '账号管理', colorsbg: '#18AE98', path: ''},
        {imagesIcon: require('../assets/image/second-accredit.png'), fontsDesc: '专线授信审核', colorsbg: '#2898C2', path: ''},
        {imagesIcon: require('../assets/image/second-cards.png'), fontsDesc: '提现申请复核', colorsbg: '#19A9B6', path: ''}

      ]
    };
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    routeGo (url) {
      this.$router.push(url.path);
    }
  }
};

</script>
<style lang='less' scoped>
.second-page {
  width: 98%;
  background-color: #fff;
  margin: 2vh 1%;
  padding: 10vh 0 8vh 0;
  height: calc(~"96vh - 60px");
  .colors-square {
    width: 880px;
    margin: 0 auto;
    height: calc(~"80vh - 60px");
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    .colors-second {
      display: flex;
      flex-flow: column nowrap;
      width:100px;
      height:112px;
      border-radius:4px;
      box-shadow:1px 0px 1px rgba(26,88,146,1);
      margin-left: 80px;
      margin-bottom: 7vh;
      &:nth-child(1),
      &:nth-child(5n+1) {
        margin-left: 0;
      }
      .img-size {
        width: 52px;
        height: 55px;
        margin: 12px auto;
      }
      .fonts-desc {
        font-size: 14px;
        color: #fff;
        text-align: center;
      }
    }
    @media screen and (min-width: 1660px) {
      .colors-second {
          width:130px;
          height: 142px;
          margin-left: 88px;
          .img-size {
            margin: 24px auto 16px auto;
          }
      }
    }
  }
}
@media screen and (min-width: 1660px) {
  .second-page {
    .colors-square {
      width: 1020px;
    }
  }
}

</style>
