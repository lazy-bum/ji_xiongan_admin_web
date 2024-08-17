import type { TableColumn } from '@/components/core/dynamic-table';

export type TableListItem = API.PeopleDocumentEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '证件类型',
    dataIndex: 'cardType',
  },
  {
    title: '正常证件数',
    dataIndex: 'normal',
  },
  {
    title: '预警证件数',
    dataIndex: 'warn',
  },
  {
    title: '预警证件数',
    dataIndex: 'expire',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
  },
];
