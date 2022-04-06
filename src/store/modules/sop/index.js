import { CREATE_SOP, QUERY_JOB_LIST, QUERY_SOP_LIST, QUERY_SOP_DETAIL } from './type'
import { xhotelSopSave, xhotelJobList, xhotelSopList, xhotelSopDetail } from '@/api/marketing/sop'
export default {
  state: {
    sopList: [],
    jobLists: [], //流程下任务列表
  },
  getters: {},
  mutations: {
    [QUERY_SOP_LIST](state, payload) {
      state.sopList = payload
    },
    [QUERY_JOB_LIST](state, payload) {
      state.jobLists = payload
    },
  },
  actions: {
    // 创建sop
    async [CREATE_SOP]({ commit }, data) {
      const res = await xhotelSopSave(data)
      console.log(res)
      return res
    },
    async [QUERY_JOB_LIST]({ commit }, data) {
      const { code, data: result } = await xhotelJobList(data)
      if (code === 200) {
        commit(QUERY_JOB_LIST, result)
      }
    },
    async [QUERY_SOP_LIST]({ commit }, data) {
      const { code, data: result } = await xhotelSopList(data)
      if (code === 200) {
        commit(QUERY_SOP_LIST, result)
      }
    },
    // 查看详情
    async [QUERY_SOP_DETAIL]({ commit }, id) {
      const { code, data: result } = await xhotelSopDetail(id)
      console.log(result)
    },
  },
}
