import type { TableColumn } from '@/components/core/dynamic-table';
import type { FormSchema } from '@/components/core/schema-form';

export type TableListItem = API.DeviceManageEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '场站',
    dataIndex: 'station',
  },
  {
    title: '在修设备',
    dataIndex: 'maintenance',
  },
  {
    title: '报修设备',
    dataIndex: 'repair',
  },
  {
    title: '正常设备',
    dataIndex: 'normal',
  },
];

export const searchFormSchemas: FormSchema[] = [
  {
    field: 'station',
    label: '场站',
    component: 'Select',
    colProps: { span: 8 },
  },
];
