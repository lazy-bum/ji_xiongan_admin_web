import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.StatisticsDto>[] = [
  {
    field: 'station',
    component: 'Select',
    label: '场站名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'runTime',
    component: 'DatePicker',
    label: '安全运行时常',
    componentProps: {
      style: {
        width: '100%',
      },
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    field: 'yearPurchaseGasTotal',
    component: 'InputNumber',
    label: '年购气量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'yearSaleGasTotal',
    component: 'InputNumber',
    label: '年销气量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'inventory',
    component: 'InputNumber',
    label: '期末库存量',
    rules: [{ type: 'number' }],
  },
];
