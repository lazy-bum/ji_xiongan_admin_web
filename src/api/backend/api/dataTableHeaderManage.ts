// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 更新 PUT /api/data/table-header-manage/${param0} */
export async function tableHeaderManageUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TableHeaderManageUpdateParams,
  body: API.TableHeaderManageDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/table-header-manage/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除 DELETE /api/data/table-header-manage/${param0} */
export async function tableHeaderManageDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TableHeaderManageDeleteParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/table-header-manage/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}

/** 创建 POST /api/data/table-header-manage/create */
export async function tableHeaderManageCreate(
  body: API.TableHeaderManageDto,
  options?: RequestOptions,
) {
  return request<any>('/api/data/table-header-manage/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 列表 GET /api/data/table-header-manage/list */
export async function tableHeaderManageList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TableHeaderManageListParams,
  options?: RequestOptions,
) {
  return request<{
    items?: API.TableHeaderManageEntity[];
    meta?: {
      itemCount?: number;
      totalItems?: number;
      itemsPerPage?: number;
      totalPages?: number;
      currentPage?: number;
    };
  }>('/api/data/table-header-manage/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
