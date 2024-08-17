// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 更新 PUT /api/data/monitoring/${param0} */
export async function monitoringUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MonitoringUpdateParams,
  body: API.MonitoringDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/monitoring/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除 DELETE /api/data/monitoring/${param0} */
export async function monitoringDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MonitoringDeleteParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/monitoring/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}

/** 创建 POST /api/data/monitoring/create */
export async function monitoringCreate(body: API.MonitoringDto, options?: RequestOptions) {
  return request<any>('/api/data/monitoring/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 列表 GET /api/data/monitoring/list */
export async function monitoringList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MonitoringListParams,
  options?: RequestOptions,
) {
  return request<API.MonitoringEntity[]>('/api/data/monitoring/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
