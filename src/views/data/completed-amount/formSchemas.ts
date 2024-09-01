import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.CompletedAmountDto>[] = [
  {
    field: 'name',
    component: 'Input',
    label: '月份',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'plan',
    component: 'InputNumber',
    label: '计划量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'complete',
    component: 'InputNumber',
    label: '完成量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'orderNo',
    component: 'InputNumber',
    label: '排序',
    rules: [{ type: 'number' }],
  },
];
