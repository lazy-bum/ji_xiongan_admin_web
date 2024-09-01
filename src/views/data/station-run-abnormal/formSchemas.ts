import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.StationRunAbnormalDto>[] = [
  {
    field: 'address',
    component: 'Input',
    label: '报警地点',
    rules: [{ type: 'string' }],
  },
  {
    field: 'type',
    component: 'Input',
    label: '报警类型',
    rules: [{ type: 'string' }],
  },
  {
    field: 'state',
    component: 'Select',
    label: '状态',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'orderNo',
    component: 'InputNumber',
    label: '排序',
    rules: [{ type: 'number' }],
  },
];
