import type { TableColumn } from '@/components/core/dynamic-table';
import type { FormSchema } from '@/components/core/schema-form';

export type TableListItem = API.RunAbnormalEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '场站',
    dataIndex: 'station',
  },
  {
    title: '报警地点',
    dataIndex: 'address',
  },
  {
    title: '报警时间',
    dataIndex: 'date',
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '状态颜色',
    dataIndex: 'stateColor',
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
