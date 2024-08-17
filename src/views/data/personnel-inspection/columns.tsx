import type { TableColumn } from '@/components/core/dynamic-table';

export type TableListItem = API.PersonnelInspectionEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '人员类型',
    dataIndex: 'personType',
  },
  {
    title: '巡检完成量',
    dataIndex: 'inspectionComplete',
  },
];
