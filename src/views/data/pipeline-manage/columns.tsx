import type { TableColumn } from '@/components/core/dynamic-table';

export type TableListItem = API.DeviceManageEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '第三方施工数量',
    dataIndex: 'dsfsg',
  },
  {
    title: '监护中数量',
    dataIndex: 'jhz',
  },
  {
    title: '施工关闭数量',
    dataIndex: 'sggb',
  },
  {
    title: '已完成风险评价',
    dataIndex: 'ywcfxpj',
  },
  {
    title: '待风险评价',
    dataIndex: 'dfxpj',
  },
];
