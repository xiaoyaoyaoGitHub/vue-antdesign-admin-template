import { axios } from '@/utils/request'

/**
 * 查询素材列表
 * @param {*} parameter
 * @returns
 */
export function meterialList(parameter) {
  return axios({
    url: '/meterial/list',
    method: 'get',
    data: parameter,
  })
}
