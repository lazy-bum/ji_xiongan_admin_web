import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.CompletedAmountDto>[] = [
  {
    field: 'name',
    component: 'Input',
    label: '场站名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'balance',
    component: 'InputNumber',
    label: '余额',
    rules: [{ type: 'number' }],
    componentProps: {
      addonAfter: '万元',
    },
  },
  {
    field: 'monthInput',
    component: 'InputNumber',
    label: '月代输量',
    rules: [{ type: 'number' }],
    componentProps: {
      addonAfter: '万方',
    },
  },
  {
    field: 'yearInput',
    component: 'InputNumber',
    label: '年代输量',
    rules: [{ type: 'number' }],
    componentProps: {
      addonAfter: '万方',
    },
  },
  {
    field: 'monthUsed',
    component: 'InputNumber',
    label: '月代用气量',
    rules: [{ type: 'number' }],
    componentProps: {
      addonAfter: '万方',
    },
  },
  {
    field: 'yearUsed',
    component: 'InputNumber',
    label: '年代用气量',
    rules: [{ type: 'number' }],
    componentProps: {
      addonAfter: '万方',
    },
  },
];
