import type { TableColumn } from '@/components/core/dynamic-table';
import type { FormSchema } from '@/components/core/schema-form';

export type TableListItem = API.YinProtectionEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '场站',
    dataIndex: 'station',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '销气量',
    dataIndex: 'buyGas',
  },
  {
    title: '销气量',
    dataIndex: 'meltGas',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
  },
];

export const searchFormSchemas: FormSchema[] = [
  {
    field: 'station',
    label: '场站',
    component: 'Select',
    colProps: { span: 8 },
  },
];
