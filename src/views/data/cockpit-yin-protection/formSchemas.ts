import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.CockpitYinProtectionDto>[] = [
  {
    field: 'name',
    component: 'Input',
    label: '名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'state',
    component: 'Input',
    label: '状态',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'notes',
    component: 'Input',
    label: '备注',
    rules: [{ type: 'string' }],
  },
  {
    field: 'orderNo',
    component: 'InputNumber',
    label: '排序',
    rules: [{ type: 'number' }],
  },
];
