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
    component: 'InputNumber',
    label: '安全运行时常',
    rules: [{ type: 'number' }],
  },
  {
    field: 'energyConsumption',
    component: 'InputNumber',
    label: '总能耗',
    rules: [{ type: 'number' }],
  },
  {
    field: 'yearPurchaseGasTotal',
    component: 'InputNumber',
    label: '年购气量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'yearConsumeGasTotal',
    component: 'InputNumber',
    label: '年耗气量',
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
