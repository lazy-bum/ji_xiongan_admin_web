import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.RunAbnormalDto>[] = [
  {
    field: 'station',
    component: 'Select',
    label: '场站名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'address',
    component: 'Input',
    label: '报警地点',
    rules: [{ type: 'string' }],
  },
  {
    field: 'date',
    component: 'DatePicker',
    label: '报警时间',
    componentProps: {
      showTime: true,
      style: {
        width: '100%',
      },
    },
  },
  {
    field: 'state',
    component: 'Input',
    label: '状态',
    rules: [{ type: 'string' }],
  },
  {
    field: 'stateColor',
    component: 'Input',
    label: '状态颜色',
    rules: [{ type: 'string' }],
    componentProps: {
      type: 'color',
    },
  },
];
