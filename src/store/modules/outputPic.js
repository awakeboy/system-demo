
const state = {
  percentage: 0, // 供电方案答复单进度条
  cadAmount: 0, // cad识别出的房间平面数,弃用
  capacity: '', // 供电容量
  firstMeasurementMethod: '', // 计量方案
  firstPowerSituation: '', // 电源进线类型（单电源/双电源）
  projectPosition: '' // 当前项目所在区域
}

const mutations = {
  CHANGE_PROGRESS: (state, { key, value }) => {
    state[key] = value
  },
  CHANGE_AMOUNT: (state, { key, value }) => {
    state[key] = value
  },
  CHANGE_CAPACITY: (state, { key, value }) => {
    state[key] = value
  },
  CHANGE_MEASUREMENTMETHOD: (state, { key, value }) => {
    state[key] = value
  },
  CHANGE_POWERSITUATION: (state, { key, value }) => {
    state[key] = value
  },
  CHANGE_POSITION: (state, { key, value }) => {
    state[key] = value
  }
}

const actions = {
  changeProgress({ commit }, data) {
    commit('CHANGE_PROGRESS', data)
  },
  changeCadAmount({ commit }, data) {
    commit('CHANGE_AMOUNT', data)
  },
  changeCapacity({ commit }, data) {
    commit('CHANGE_CAPACITY', data)
  },
  changeMeasurementMethod({ commit }, data) {
    commit('CHANGE_MEASUREMENTMETHOD', data)
  },
  changePowerSituation({ commit }, data) {
    commit('CHANGE_POWERSITUATION', data)
  },
  changePosition({ commit }, data) {
    commit('CHANGE_POSITION', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

