import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.DeviceManageDto>[] = [
  {
    field: 'station',
    component: 'Select',
    label: '场站名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'maintenance',
    component: 'InputNumber',
    label: '在修设备',
    rules: [{ type: 'number' }],
  },
  {
    field: 'repair',
    component: 'InputNumber',
    label: '报修设备',
    rules: [{ type: 'number' }],
  },
  {
    field: 'normal',
    component: 'InputNumber',
    label: '正常设备',
    rules: [{ type: 'number' }],
  },
];
