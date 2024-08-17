import type { TableColumn } from '@/components/core/dynamic-table';
import { formatToDateTime } from '@/utils/dateUtil';

export type TableListItem = API.CompletedAmountEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '场站名称',
    dataIndex: 'name',
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
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    hideInSearch: true,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    hideInSearch: true,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];
