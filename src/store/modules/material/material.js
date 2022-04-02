import { QUERY_MATERIAL_LIST, METERIAL_ADD_TEXT, METERIAL_UPLOAD } from './type'
import { meterialList, meterialAddText, meterialUpload } from '@/api/contentCenter/material'

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
    // 新增文本
    async [METERIAL_ADD_TEXT]({ commit }, params) {
      console.log(params)
      const res = await meterialAddText(params)
      return res
    },
    // 素材上传
    async [METERIAL_UPLOAD]({ commit }, params) {
      const res = await meterialUpload(params)
      return res
    },
  },
}
