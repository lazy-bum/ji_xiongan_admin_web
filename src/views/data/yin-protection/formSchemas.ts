import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.YinProtectionDto>[] = [
  {
    field: 'station',
    component: 'Select',
    label: '场站名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'name',
    component: 'Input',
    label: '名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'buyGas',
    component: 'InputNumber',
    label: '购气量',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'meltGas',
    component: 'InputNumber',
    label: '销气量',
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'orderNo',
    component: 'InputNumber',
    label: '排序',
    rules: [{ required: true, type: 'number' }],
  },
];
