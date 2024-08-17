import type { TableColumn } from '@/components/core/dynamic-table';

export type TableListItem = API.FlowmeterEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '进站流量',
    dataIndex: 'enteringFlowContrast',
  },
  {
    title: '出站流量',
    dataIndex: 'outboundFlowContrast',
  },
  {
    title: '年进站流量',
    dataIndex: 'yearEnteringFlowContrast',
  },
  {
    title: '年出站流量',
    dataIndex: 'yearOutboundFlowContrast',
  },
];
