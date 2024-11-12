// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 创建 POST /api/test/create */
export async function testCreate(options?: RequestOptions) {
  return request<any>('/api/test/create', {
    method: 'POST',
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 列表 GET /api/test/list */
export async function testList(options?: RequestOptions) {
  return request<any>('/api/test/list', {
    method: 'GET',
    ...(options || {}),
  });
}
