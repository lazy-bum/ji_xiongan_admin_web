import type { TableColumn } from '@/components/core/dynamic-table';

export type TableListItem = API.StatisticsEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '场站',
    dataIndex: 'station',
  },
  {
    title: '安全运行时常',
    dataIndex: 'runTime',
  },
  {
    title: '年购气量',
    dataIndex: 'yearPurchaseGasTotal',
  },
  {
    title: '年销气量',
    dataIndex: 'yearSaleGasTotal',
  },
  {
    title: '期末库存量',
    dataIndex: 'inventory',
  },
];
