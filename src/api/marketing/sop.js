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
 * 请求流程任务列表
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

/**
 * 请求sop列表
 * @param {*} params
 * @returns
 */
export function xhotelSopList(params) {
  return axios({
    url: '/xhotelxms/xhotelSop/list',
    method: 'get',
    params,
  })
}

/**
 * 获取sop详情
 * @param {} id
 * @returns
 */
export function xhotelSopDetail(id) {
  return axios({
    url: `/xhotelxms/xhotelSop/${id}`,
    method: 'get',
  })
}

/**
 * 保存
 * @param {*} data
 * @returns
 */
export function xhotelSopJobSave(data) {
  return axios({
    url: '/xhotelxms/xhotelSopJob/save',
    method: 'post',
    data,
  })
}
