import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.ResidueDto>[] = [
  {
    field: 'name',
    component: 'Input',
    label: '名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'balance',
    component: 'InputNumber',
    label: '余额(万元)',
    rules: [{ type: 'number' }],
  },
  {
    field: 'monthInput',
    component: 'InputNumber',
    label: '月代输量(万方)',
    rules: [{ type: 'number' }],
  },
  {
    field: 'yearInput',
    component: 'InputNumber',
    label: '年代输量(万方)',
    rules: [{ type: 'number' }],
  },
  {
    field: 'monthUsed',
    component: 'InputNumber',
    label: '月代用气量(万方)',
    rules: [{ type: 'number' }],
  },
  {
    field: 'yearUsed',
    component: 'InputNumber',
    label: '年代用气量(万方)',
    rules: [{ type: 'number' }],
  },
];
