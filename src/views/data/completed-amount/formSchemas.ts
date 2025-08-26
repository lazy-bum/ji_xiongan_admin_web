import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.CompletedAmountDto>[] = [
  {
    field: 'station',
    component: 'Select',
    label: '关联场站',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'name',
    component: 'Input',
    label: '名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'deviceId',
    component: 'Input',
    label: '设备id',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'plan',
    component: 'InputNumber',
    label: '计划量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'orderNo',
    component: 'InputNumber',
    label: '排序',
    rules: [{ type: 'number' }],
  },
];
