import { axios } from '@/utils/request'

/**
 * 查询素材列表
 * @param {*} parameter
 * @returns
 */
export function meterialList(parameter) {
  return axios({
    url: '/xhotelxms/meterial/list',
    method: 'get',
    data: parameter,
  })
}

/**
 * 新增文本
 * @param {} parameter
 * @returns
 */
export function meterialAddText(parameter) {
  return axios({
    url: '/xhotelxms/meterial/add/text',
    method: 'get',
    params: parameter,
  })
}
/**
 * 添加图片
 * @param {*} params
 * @returns
 */
export function meterialUpload(params) {
  return axios({
    url: '/xhotelxms/meterial/uploud',
    method: 'post',
    data: params,
  })
}
