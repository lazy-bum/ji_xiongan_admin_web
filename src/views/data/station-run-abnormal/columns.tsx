import type { TableColumn } from '@/components/core/dynamic-table';
import type { FormSchema } from '@/components/core/schema-form';

export type TableListItem = API.StationRunAbnormalEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '报警地点',
    dataIndex: 'address',
  },
  {
    title: '报警类型',
    dataIndex: 'type',
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
  },
];

export const searchFormSchemas: FormSchema[] = [];
