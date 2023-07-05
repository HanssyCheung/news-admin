import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  state: {
    isGetterRouter: false, //是不是第一次配置路由
    isCollapsed: false, //是否折叠
    userInfo: {}// 用户信息
  },
  getters: {
  },
  mutations: {
    // 登录标志位
    changeGetterRouter(state, value) {
      state.isGetterRouter = value
    },
    //控制侧边栏的展开
    changeCollapsed(state, value) {
      state.isCollapsed = !state.isCollapsed
    },
    changeUserInfo(state, value) {
      // 保存旧的用户信息的情况下添加新的用户信息
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
    },
    //清空用户缓存
    clearUserInfo(state,value){
      state.userInfo = {}
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ["isCollapsed","userInfo"]//控制是否持久化
  })]
})
