import { QUERY_MATERIAL_LIST } from '@/store/mutation-types'
import { meterialList } from '@/api/contentCenter/material'

export default {
  state: {
    meterials: [], // 素材列表
  },
  mutations: {
    [QUERY_MATERIAL_LIST](state, lists) {
      state.meterials = lists
    },
  },
  actions: {
    // 查询素材接口
    async [QUERY_MATERIAL_LIST]({ commit }, params) {
      const res = await meterialList(params)
      commit(QUERY_MATERIAL_LIST, res.data.commonList)
    },
  },
}
