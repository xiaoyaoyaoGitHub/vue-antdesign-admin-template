import { QUERY_MATERIAL_LIST, METERIAL_ADD_TEXT, METERIAL_UPLOAD, QUERY_MATERIAL_LIST_MINIAPP, QUERY_MATERIAL_LIST_IMAGE } from './type'
import { meterialList, meterialAddText, meterialUpload } from '@/api/contentCenter/material'

export default {
  state: {
    meterials: [], // 素材列表
    meterialMiniAppLists: [], // 小程序素材列表
    meterialImageLists: [], //图片素材列表
  },
  mutations: {
    [QUERY_MATERIAL_LIST](state, lists) {
      state.meterials = lists
    },
    [QUERY_MATERIAL_LIST_MINIAPP](state, list) {
      //小程序素材列表
      state.meterialMiniAppLists = list
    },
    [QUERY_MATERIAL_LIST_IMAGE](state, list) {
      state.meterialImageLists = list
    },
  },
  getters: {},
  actions: {
    // 查询素材接口
    async [QUERY_MATERIAL_LIST]({ commit }, params = {}) {
      const res = await meterialList(params)
      switch (params.materialType) {
        case 'miniapp':
          commit(QUERY_MATERIAL_LIST_MINIAPP, res.data.personList)
          break
        case 'image':
          commit(QUERY_MATERIAL_LIST_IMAGE, res.data.personList)
        default:
          commit(QUERY_MATERIAL_LIST, res.data.personList)
      }
      return res
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
