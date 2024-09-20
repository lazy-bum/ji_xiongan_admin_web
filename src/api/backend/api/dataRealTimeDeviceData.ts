// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 更新 PUT /api/data/real-time-device-data/${param0} */
export async function realTimeDeviceDataUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RealTimeDeviceDataUpdateParams,
  body: API.RealTimeDeviceDataDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/real-time-device-data/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除 DELETE /api/data/real-time-device-data/${param0} */
export async function realTimeDeviceDataDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RealTimeDeviceDataDeleteParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/real-time-device-data/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}

/** 创建 POST /api/data/real-time-device-data/create */
export async function realTimeDeviceDataCreate(
  body: API.RealTimeDeviceDataDto,
  options?: RequestOptions,
) {
  return request<any>('/api/data/real-time-device-data/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 获取点表 GET /api/data/real-time-device-data/findPointTable */
export async function realTimeDeviceDataFindPointTable(options?: RequestOptions) {
  return request<any>('/api/data/real-time-device-data/findPointTable', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取6小时平均值 GET /api/data/real-time-device-data/get6HoursData */
export async function realTimeDeviceDataGet6HoursData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RealTimeDeviceDataGet6HoursDataParams,
  options?: RequestOptions,
) {
  return request<any>('/api/data/real-time-device-data/get6HoursData', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取列表 GET /api/data/real-time-device-data/list */
export async function realTimeDeviceDataList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RealTimeDeviceDataListParams,
  options?: RequestOptions,
) {
  return request<API.RealTimeDeviceDataEntity[]>('/api/data/real-time-device-data/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
