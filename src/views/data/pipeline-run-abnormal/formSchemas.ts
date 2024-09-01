import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.PipelineRunAbnormalDto>[] = [
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
