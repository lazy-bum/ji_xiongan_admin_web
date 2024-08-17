import type { TableColumn } from '@/components/core/dynamic-table';
import type { FormSchema } from '@/components/core/schema-form';

export type TableListItem = API.CompletedAmountEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '场站',
    dataIndex: 'station',
  },
  {
    title: '一般设备',
    dataIndex: 'generalDevice',
  },
  {
    title: '主要设备',
    dataIndex: 'mainDevice',
  },
  {
    title: '关键设备',
    dataIndex: 'keyDevice',
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
