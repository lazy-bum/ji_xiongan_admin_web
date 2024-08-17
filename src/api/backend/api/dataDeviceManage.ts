// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 更新 PUT /api/data/device-manage/${param0} */
export async function deviceManageUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeviceManageUpdateParams,
  body: API.DeviceManageDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/device-manage/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除 DELETE /api/data/device-manage/${param0} */
export async function deviceManageDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeviceManageDeleteParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/device-manage/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}

/** 创建 POST /api/data/device-manage/create */
export async function deviceManageCreate(body: API.DeviceManageDto, options?: RequestOptions) {
  return request<any>('/api/data/device-manage/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 列表 GET /api/data/device-manage/list */
export async function deviceManageList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeviceManageListParams,
  options?: RequestOptions,
) {
  return request<API.DeviceManageEntity[]>('/api/data/device-manage/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
