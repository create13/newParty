<template>
  <div class="manage-set">
    <div class="title-shows">
      <div class="title-close">
        {{ paramsTitle }}
        <span class="icon-close" @click="jumpSeconds"></span>
      </div>
    </div>
    <div class="center-content">
      <div class="input-search">
        <Row :gutter="20">
          <i-col span="4">
            <i-input v-model="value1" size="large">
              <span slot="prepend">账户名称</span>
            </i-input>
          </i-col>
          <i-col span="4">
            <i-input v-model="value1" size="large">
              <span slot="prepend">组织代码</span>
            </i-input>
          </i-col>
          <i-col span="4">
            <i-input v-model="value1" size="large">
              <span slot="prepend">所属枢纽</span>
            </i-input>
          </i-col>
          <i-col span="4">
            <i-input v-model="value1" size="large">
              <span slot="prepend">账户状态</span>
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
      <div class="input-search row-set">
        <Row :gutter="20">
          <i-col span="6">
            <Button>明细列表</Button>
            <Button type="primary" :loading="loadingSearch" icon="android-exit" @click="toLoadings">
              <span v-if="!loadingSearch">导出</span>
              <span v-else>Loading...</span>
            </Button>
          </i-col>
        </Row>
      </div>
      <div class="table-show">
        <Table :columns="columnsTable" :data="tableData"></Table>
        <Page :total="100" show-elevator></Page>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seconds',
  data () {
    return {
      paramsTitle: '',
      value1: '',
      loadingSearch: false,
      setInput: [
        {types: 'input', spans: null, modelValue: 'valueAcount', lableNames: '账户名称'}
      ],
      columnsTable: [
        {type: 'index', width: 60, align: 'center'},
        {
          title: '操作',
          key: 'opration',
          align: 'center',
          width: 123,
          render: (h, params) => {
            return h('div', [
              h('a', {
                props: {
                  size: 'small'
                },
                style: {
                  marginRight: '6px',
                  color: '#60667F',
                  textDecoration: 'underline'
                },
                on: {
                  click: () => {
                    // this.show(params.index);
                    console.log(params);
                  }
                }
              }, '冻结'),
              h('a', {
                props: {
                  size: 'small'
                },
                style: {
                  marginRight: '-5px',
                  color: '#60667F',
                  textDecoration: 'underline'
                },
                on: {
                  click: () => {
                    this.show(params.index);
                  }
                }
              }, '查看明细')
            ]);
          }
        },
        {title: '账户名称', key: 'acountName'},
        {title: '组织代码', key: 'organization'},
        {title: '所属枢纽', key: 'hub'},
        {title: '结算账户状态', key: 'status'},
        {title: '结算账户余额', key: 'balance'},
        {title: '结算账户授信额度', key: 'limit'},
        {title: '待收款', key: 'collect'},
        {title: '冻结金额', key: 'freeze'},
        {title: '可用额度', key: 'available'},
        {title: '贷款账户余额', key: 'loan'}
      ],
      tableData: [
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        },
        {
          acountName: 'test用户名',
          organization: '0128',
          hub: '南京枢纽',
          status: '正常',
          balance: '1000',
          limit: '0',
          collect: '5000',
          freeze: '0',
          available: '10000',
          loan: '8000'
        }
      ]

    };
  },

  components: {},

  computed: {},

  mounted () {
    this.getParams();
    console.log(this.paramsTitle);
  },

  methods: {
    getParams () {
      this.paramsTitle = decodeURI(this.$route.params.titles);
    },
    toLoadings () {

    },
    jumpSeconds () {
      this.$router.go(-1);
    }
  }
};

</script>
<style lang='less' scoped>
.manage-set {
  width: 100%;
  .title-shows {
    position: relative;
    width: 100%;
    height: 40px;
    background-color: #121A2C;
    .title-close {
      position: absolute;
      z-index: 100;
      width:118px;
      height:40px;
      line-height: 40px;
      background: rgba(255, 255, 255, 0.2);
      font-size: 14px;
      color: #fff;
      text-align: center;
      .icon-close {
        width: 16px;
        height: 16px;
        margin-left: 6px;
        margin-top: 12px;
        vertical-align: top;
        display: inline-block;
        background: url(../assets/image/img-close.png) no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .center-content {
    // border: 1px solid red;
    margin: 20px;
    height: calc(~"100vh - 140px");
    background-color: #fff;
    .input-search {
      &:nth-child(2) {
        border: 0;
      }
      width: 100%;
      height: 7vh;
      padding-left: 20px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #F4F6F7;
      .ivu-btn-primary {
        background:rgba(0,173,169,0.2);
        border-color: rgba(0,173,169,0.2);
        color: #00ADA9;
      }
      .ivu-btn {
        padding: 8px 15px;
        margin-left: 10px;
        &:nth-child(1) {
          margin-left: 0;
        }
      }
    }
    .row-set .ivu-row {
      width: 100%;
    }
    .table-show {
      width: 100%;
      .ivu-page {
        margin-top: 1vh;
        text-align: right;
        margin-right: 3vh;
      }
      .ivu-table-wrapper {
      height: calc(~"84vh - 172px");
      }
    }
  }
}
@media screen and (min-width: 1299px) and (max-width: 1399px){
  .manage-set {
    .title-shows {
      height: 32px;
      .title-close {
        height: 32px;
        line-height: 32px;
        background: rgba(255, 255, 255, 0.5);
        .icon-close{
          width: 14px;
          height: 14px;
          margin-left: 6px;
          margin-top: 9px;
        }
      }
    }
    .center-content {
      margin: 10px;
      height: calc(~"100vh - 91px");
      .input-search {
        .ivu-btn {
          padding: 4px 15px;
        }
      }
      // .table-show {
      //   .ivu-table-wrapper {
      //     height: calc(~"84vh - 172px");
      //   }
      // }
    }
  }
}
</style>
<style>
  @media screen and (min-width: 1299px) and (max-width: 1399px){
    .ivu-input-group-large .ivu-input,
    .ivu-input-group-large>.ivu-input-group-append,
    .ivu-input-group-large>.ivu-input-group-prepend {
      height: 28px!important;
    }
    .ivu-table td, .ivu-table th {
      height: 30px;
    }
    .ivu-page-item-jump-next,
    .ivu-page-item-jump-prev,
    .ivu-page-next, .ivu-page-prev,
    .ivu-page-item,
    .ivu-page-options-elevator input {
      height: 24px;
      line-height: 24px;
    }
  }
</style>
