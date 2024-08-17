import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.PersonnelInspectionDto>[] = [
  {
    field: 'personType',
    component: 'Select',
    label: '人员类型',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'inspectionComplete',
    component: 'InputNumber',
    label: '巡检完成量',
    rules: [{ type: 'number' }],
  },
];
