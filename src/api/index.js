import request from '@/utils/request'

// 获取首页列表
export function fetchList() {
  return request({
    url: '/goodsList',
    method: 'get'
  })
}
