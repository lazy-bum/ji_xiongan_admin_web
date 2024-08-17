// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 更新 PUT /api/data/statistics/${param0} */
export async function statisticsUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.StatisticsUpdateParams,
  body: API.StatisticsDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/statistics/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除 DELETE /api/data/statistics/${param0} */
export async function statisticsDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.StatisticsDeleteParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/statistics/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}

/** 创建 POST /api/data/statistics/create */
export async function statisticsCreate(body: API.StatisticsDto, options?: RequestOptions) {
  return request<any>('/api/data/statistics/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 列表 GET /api/data/statistics/list */
export async function statisticsList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.StatisticsListParams,
  options?: RequestOptions,
) {
  return request<API.StatisticsEntity[]>('/api/data/statistics/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
