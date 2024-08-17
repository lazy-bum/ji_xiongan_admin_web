import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.PipelineManageDto>[] = [
  {
    field: 'dsfsg',
    component: 'InputNumber',
    label: '第三方施工数量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'jhz',
    component: 'InputNumber',
    label: '监护中数量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'sggb',
    component: 'InputNumber',
    label: '施工关闭数量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'ywcfxpj',
    component: 'InputNumber',
    label: '已完成风险评价',
    rules: [{ type: 'number' }],
  },
  {
    field: 'dfxpj',
    component: 'InputNumber',
    label: '待风险评价',
    rules: [{ type: 'number' }],
  },
];
