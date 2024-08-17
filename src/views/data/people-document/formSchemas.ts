import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.PeopleDocumentDto>[] = [
  {
    field: 'cardType',
    component: 'Input',
    label: '证件类型',
    rules: [{ type: 'string' }],
  },
  {
    field: 'normal',
    component: 'InputNumber',
    label: '正常证件数',
    rules: [{ type: 'number' }],
  },
  {
    field: 'warn',
    component: 'InputNumber',
    label: '预警证件数',
    rules: [{ type: 'number' }],
  },
  {
    field: 'expire',
    component: 'InputNumber',
    label: '预警证件数',
    rules: [{ type: 'number' }],
  },
  {
    field: 'orderNo',
    component: 'InputNumber',
    label: '排序',
    rules: [{ type: 'number' }],
  },
];
