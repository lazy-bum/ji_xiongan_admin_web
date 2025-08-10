// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 导出数据 GET /api/data/real-time-device-data/exportDataToCsvFile */
export async function realTimeDeviceDataExportDataToCsvFile(options?: RequestOptions) {
  return request<API.InfluxdbDataDto[]>('/api/data/real-time-device-data/exportDataToCsvFile', {
    method: 'GET',
    ...(options || {}),
  });
}

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

/** 获取当日、昨日、当月、上月的增量数据 GET /api/data/real-time-device-data/getIncrementData */
export async function realTimeDeviceDataGetIncrementData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RealTimeDeviceDataGetIncrementDataParams,
  options?: RequestOptions,
) {
  return request<Record<string, any>>('/api/data/real-time-device-data/getIncrementData', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取6小时平均值 GET /api/data/real-time-device-data/getStationNewData */
export async function realTimeDeviceDataGetStationNewData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RealTimeDeviceDataGetStationNewDataParams,
  options?: RequestOptions,
) {
  return request<any>('/api/data/real-time-device-data/getStationNewData', {
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
