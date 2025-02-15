// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 更新 PUT /api/data/residue/${param0} */
export async function residueUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ResidueUpdateParams,
  body: API.ResidueDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/residue/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除 DELETE /api/data/residue/${param0} */
export async function residueDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ResidueDeleteParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/data/residue/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}

/** 创建 POST /api/data/residue/create */
export async function residueCreate(body: API.ResidueDto, options?: RequestOptions) {
  return request<any>('/api/data/residue/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 获取完成量列表 GET /api/data/residue/list */
export async function residueList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ResidueListParams,
  options?: RequestOptions,
) {
  return request<API.ResidueEntity[]>('/api/data/residue/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
