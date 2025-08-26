import type { TableColumn } from '@/components/core/dynamic-table';
import type { FormSchema } from '@/components/core/schema-form';

export type TableListItem = API.CompletedAmountEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '关联场站',
    dataIndex: 'station',
  },
  {
    title: '名称',
    dataIndex: 'name',
    hideInSearch: true,
  },
  {
    title: '设备id',
    dataIndex: 'deviceId',
    hideInSearch: true,
  },
  {
    title: '计划量',
    dataIndex: 'plan',
    hideInSearch: true,
  },
  {
    title: '完成量',
    dataIndex: 'complete',
    hideInSearch: true,
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    hideInSearch: true,
  },
];

export const searchFormSchemas: FormSchema[] = [
  {
    field: 'station',
    label: '关联场站',
    component: 'Select',
    colProps: { span: 8 },
  },
];
