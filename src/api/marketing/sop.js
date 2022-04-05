import { axios } from '@/utils/request'

/**
 * 创建sop
 * @param {*} data
 * @returns
 */
export function xhotelSopSave(data) {
  return axios({
    url: '/xhotelxms/xhotelSop/save',
    method: 'post',
    data,
  })
}

/**
 * 请求任务列表
 * @param {*} params
 * @returns
 */
export function xhotelJobList(params) {
  return axios({
    url: '/xhotelxms/xhotelSopJob/list',
    method: 'get',
    params,
  })
}
