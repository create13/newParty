<template>
  <div>
    <Header class="height-set">
      <div class="left-icon">
        <img src="@/assets/image/left-logo.png" alt="" class="logo-pic">
        运派智慧物流操作管理系统
      </div>
      <Menu mode="horizontal" theme="dark">
          <div class="layout-nav">
            <menu-item v-for="(navs, nindex) in navList" :key="nindex" :name="navs.type">
              <Icon :type="navs.type" color="#fff"></Icon>
            </menu-item>
            <div class="peoples" @click="moreClick">
              <img src="@/assets/image/img-person.png" alt="" class="img-person">
              <img src="@/assets/image/arrow-down.png" alt="" class="img-arrow">
            </div>
          </div>
        </Menu>
      </Header>
      <div class="pop-in" v-show="showIt">
        aaaa
      </div>
      <Sider>
        <Menu :active-name=activeNames @on-select="changesname" theme="dark" width="auto">
          <MenuGroup>
          <menu-item  v-for="(item, index) in menuList" :key="index" :name="item.name">
            <Icon :type="item.type"></Icon>
            {{item.labels}}
          </menu-item>
          </MenuGroup>
        </Menu>
  </Sider>
  <Content :style="styles">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </Content>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      showIt: false,
      navList: [
        {name: 'search', type: 'ios-search-strong'},
        {name: 'message', type: 'chatbubble-working'},
        {name: 'warns', type: 'ios-bell-outline'},
        {name: 'doubt', type: 'ios-help-outline'}
      ],
      activeNames: 'myDesk',
      menuList: [
        {name: 'myDesk', type: 'ios-navigate', labels: '我的桌面'},
        {name: 'op-manage', type: 'ios-keypad', labels: '运营管理'},
        {name: 'op-configuration', type: 'ios-analytics', labels: '运营配置'}

      ],
      styles: {
        position: 'absolute',
        left: '200px',
        top: '60px',
        bottom: '0',
        right: '0',
        background: '#E8ECF0'
      }
    };
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    moreClick () {
      this.showIt = !this.showIt;
    },
    changesname (name) {
      console.log(name);
      this.$router.push({path: `/${name}`});
    }
  }
};

</script>
<style lang='less' scoped>
.height-set {
    height: 60px;
    .left-icon {
      position: absolute;
      z-index: 920;
      width: 250px;
      height: 40px;
      line-height: 40px;
      top: 10px;
      left: 20px;
      color: #fff;
      font-size: 16px;
      .logo-pic {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    .layout-nav {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .ivu-menu-item {
      font-size: 19px;
      }
      .peoples {
        width: 36px;
        height: 32px;
        padding: 0 20px;
        display: flex;
        .img-person {
          width: 24px;
          height: 24px;
          margin-top: 2px;
        }
        .img-arrow {
          width: 12px;
          height: 12px;
          align-self: center;
        }
      }
    }
}
.pop-in {
  position: absolute;
  right: 20px;
  top: 61px;
  width: 100px;
  height: 100px;
  border: 1px solid #eeeeee;
  background-color: burlywood;
}
</style>
<style>
  .ivu-menu-vertical .ivu-menu-submenu-title-icon {
    display: none;
  }
  .ivu-layout-sider {
    position: absolute;
    top: 60px;
    bottom: 0px;
  }
  .ivu-menu-vertical .ivu-menu-item-group-title {
    height: 0;
  }
  .ivu-menu-item-group-title {
    height: 0;
  }
  .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 12px 24px;
    /* #E8ECF0 */
  }
</style>
