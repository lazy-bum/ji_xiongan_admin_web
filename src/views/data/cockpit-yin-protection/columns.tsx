import type { TableColumn } from '@/components/core/dynamic-table';

export type TableListItem = API.CockpitYinProtectionEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '备注',
    dataIndex: 'notes',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
  },
];
