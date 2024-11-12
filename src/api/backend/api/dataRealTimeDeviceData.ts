// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 获取多个设备的最新一条数据 GET /api/data/real-time-device-data/findDevicesOneData */
export async function realTimeDeviceDataFindDevicesOneData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RealTimeDeviceDataFindDevicesOneDataParams,
  options?: RequestOptions,
) {
  return request<API.InfluxdbDataDto[]>('/api/data/real-time-device-data/findDevicesOneData', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
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
  return request<Record<string, any>[]>('/api/data/real-time-device-data/get6HoursData', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取列表无分页 GET /api/data/real-time-device-data/listNoPage */
export async function realTimeDeviceDataListNoPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RealTimeDeviceDataListNoPageParams,
  options?: RequestOptions,
) {
  return request<API.RealTimeDeviceDataEntity[]>('/api/data/real-time-device-data/listNoPage', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
