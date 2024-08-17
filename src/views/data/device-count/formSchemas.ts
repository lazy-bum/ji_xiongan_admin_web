import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.DeviceCountDto>[] = [
  {
    field: 'station',
    component: 'Select',
    label: '场站名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'generalDevice',
    component: 'InputNumber',
    label: '一般设备',
    rules: [{ type: 'number' }],
  },
  {
    field: 'mainDevice',
    component: 'InputNumber',
    label: '主要设备',
    rules: [{ type: 'number' }],
  },
  {
    field: 'keyDevice',
    component: 'InputNumber',
    label: '关键设备',
    rules: [{ type: 'number' }],
  },
];
