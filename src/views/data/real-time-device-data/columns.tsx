import type { TableColumn } from '@/components/core/dynamic-table';
import type { FormSchema } from '@/components/core/schema-form';
import { formatToDateTime } from '@/utils/dateUtil';

export type TableListItem = API.RealTimeDeviceDataEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '场站',
    dataIndex: 'station',
  },
  {
    title: '点位',
    dataIndex: 'code',
  },
  {
    title: '数据',
    dataIndex: 'data',
  },
  {
    title: '发送的数据',
    dataIndex: 'send',
  },
  {
    title: '接收的数据',
    dataIndex: 'receive',
  },
  {
    title: '时间',
    dataIndex: 'createdAt',
    customRender: ({ record }) => formatToDateTime(record.createdAt),
  },
];

export const searchFormSchemas: FormSchema[] = [
  {
    field: 'station',
    label: '场站',
    component: 'Select',
    colProps: { span: 8 },
  },
  {
    field: 'device',
    label: '设备',
    component: 'Select',
    colProps: { span: 8 },
  },
];
