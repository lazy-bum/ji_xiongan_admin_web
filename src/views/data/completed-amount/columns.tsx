import type { TableColumn } from '@/components/core/dynamic-table';

export type TableListItem = API.CompletedAmountEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
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
