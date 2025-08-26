import type { TableColumn } from '@/components/core/dynamic-table';
import type { FormSchema } from '@/components/core/schema-form';

export type TableListItem = API.TableHeaderManageEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '模块',
    dataIndex: 'module',
  },
  {
    title: '展示名称',
    dataIndex: 'name',
  },
  {
    title: '单位',
    dataIndex: 'unit',
  },
  {
    title: '字段名',
    dataIndex: 'field',
  },
  {
    title: '是否显示',
    dataIndex: 'show',
  },
  {
    title: '是否必填',
    dataIndex: 'required',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
  },
];

export const searchFormSchemas: FormSchema[] = [
  {
    field: 'module',
    label: '模块',
    component: 'Select',
    colProps: { span: 8 },
  },
];
