import type { FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.FlowmeterDto>[] = [
  {
    field: 'enteringFlowContrast',
    component: 'InputNumber',
    label: '进站流量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'outboundFlowContrast',
    component: 'InputNumber',
    label: '出站流量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'yearEnteringFlowContrast',
    component: 'InputNumber',
    label: '年进站流量',
    rules: [{ type: 'number' }],
  },
  {
    field: 'yearOutboundFlowContrast',
    component: 'InputNumber',
    label: '年出站流量',
    rules: [{ type: 'number' }],
  },
];
