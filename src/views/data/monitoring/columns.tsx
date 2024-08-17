import type { TableColumn } from '@/components/core/dynamic-table';

export type TableListItem = API.MonitoringEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '数量',
    dataIndex: 'count',
    hideInSearch: true,
  },
  {
    title: '百分比',
    dataIndex: 'monthInput',
    hideInSearch: true,
  },
];
