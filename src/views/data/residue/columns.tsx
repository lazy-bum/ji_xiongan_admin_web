import type { TableColumn } from '@/components/core/dynamic-table';

export type TableListItem = API.ResidueEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '名称',
    dataIndex: 'name',
    hideInSearch: true,
  },
  {
    title: '余额(万元)',
    dataIndex: 'balance',
    hideInSearch: true,
  },
  {
    title: '月代输量(万方)',
    dataIndex: 'monthInput',
    hideInSearch: true,
  },
  {
    title: '年代输量(万方)',
    dataIndex: 'yearInput',
    hideInSearch: true,
  },
  {
    title: '月代用气量(万方)',
    dataIndex: 'monthUsed',
    hideInSearch: true,
  },
  {
    title: '年代用气量(万方)',
    dataIndex: 'yearUsed',
    hideInSearch: true,
  },
];
