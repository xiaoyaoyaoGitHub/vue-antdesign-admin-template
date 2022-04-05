import { CREATE_SOP, QUERY_JOB_LIST } from './type'
import { xhotelSopSave, xhotelJobList } from '@/api/marketing/sop'
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // 创建sop
    async [CREATE_SOP]({ commit }, data) {
      const res = await xhotelSopSave(data)
      console.log(res)
      return res
    },
    async [QUERY_JOB_LIST]({ commit }, data) {
      const res = await xhotelJobList(data)
      console.log(res)
      // commit(QUERY_JOB_LIST, )
    },
  },
}
