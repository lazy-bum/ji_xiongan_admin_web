import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.MonitoringDto>[] = [
  {
    field: 'name',
    component: 'Input',
    label: '场站名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'count',
    component: 'InputNumber',
    label: '数量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'monthInput',
    component: 'InputNumber',
    label: '百分比',
    rules: [{ type: 'number' }],
  },
];
