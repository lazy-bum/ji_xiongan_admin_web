<template>
  <DynamicTable
    row-key="id"
    header-title="运行异常"
    :data-request="Api.dataRunAbnormal.runAbnormalList"
    :columns="columns"
    bordered
    size="small"
    show-index
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'station'">
        {{ deviceTypeList.find((n) => n.value === record[column.dataIndex])?.label }}
      </template>
      <template v-else-if="column.dataIndex === 'state'">
        {{ stateTypeList.find((n) => n.value === record[column.dataIndex])?.label }}
      </template>
    </template>
    <template #toolbar>
      <a-button
        type="primary"
        :disabled="!$auth('data:run-abnormal:create')"
        @click="openMenuModal({})"
      >
        新增
      </a-button>
    </template>
  </DynamicTable>
</template>

<script lang="ts" setup>
  import { onBeforeMount, ref } from 'vue';
  import {
    baseColumns,
    type TableListItem,
    type TableColumnItem,
    searchFormSchemas,
  } from './columns';
  import { roleSchemas } from './formSchemas';
  import { useTable } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/';
  import Api from '@/api/';

  defineOptions({
    name: 'dataRunAbnormal',
  });

  const deviceTypeList = ref<LabelValueOptions>([]);
  const stateTypeList = ref<LabelValueOptions>([]);

  const [DynamicTable, dynamicTableInstance] = useTable({
    formProps: {
      schemas: searchFormSchemas,
    },
  });

  onBeforeMount(async () => {
    const data = await Api.systemDictItem.dictItemFindListByCode({ code: 'data_station' });
    const stateData = await Api.systemDictItem.dictItemFindListByCode({ code: 'run_abnormal' });
    deviceTypeList.value = data.map((n) => ({ label: n.label, value: n.value }));
    stateTypeList.value = stateData.map((n) => ({ label: n.label, value: n.value }));

    // 动态更新搜索表单项
    dynamicTableInstance?.getSearchFormRef()?.updateSchema?.([
      {
        field: 'station',
        componentProps: {
          options: deviceTypeList.value,
        },
      },
      {
        field: 'state',
        componentProps: {
          options: stateTypeList.value,
        },
      },
    ]);
  });

  const [showModal] = useFormModal();

  /**
   * @description 打开新增/编辑弹窗
   */
  const openMenuModal = async (record: Partial<TableListItem>) => {
    const [formRef] = await showModal({
      modalProps: {
        title: `${record.id ? '编辑' : '新增'}`,
        width: '500px',
        onFinish: async (values) => {
          record.id && (values.roleId = record.id);
          const params = { ...values };
          if (record.id) {
            await Api.dataRunAbnormal.runAbnormalUpdate({ id: record.id }, params);
          } else {
            await Api.dataRunAbnormal.runAbnormalCreate(params);
          }
          dynamicTableInstance?.reload();
        },
      },
      formProps: {
        labelWidth: 100,
        schemas: roleSchemas,
      },
    });

    formRef?.updateSchema?.([
      {
        field: 'station',
        componentProps: {
          options: deviceTypeList.value,
        },
      },
      {
        field: 'state',
        componentProps: {
          options: stateTypeList.value,
        },
      },
    ]);

    if (record.id) {
      formRef?.setFieldsValue({
        ...record,
      });
    }
  };
  const delRowConfirm = async (record: TableListItem) => {
    await Api.dataRunAbnormal.runAbnormalDelete({ id: record.id });
    dynamicTableInstance?.reload();
  };

  const columns: TableColumnItem[] = [
    ...baseColumns,
    {
      title: '操作',
      width: 130,
      dataIndex: 'ACTION',
      hideInSearch: true,
      fixed: 'right',
      actions: ({ record }) => [
        {
          label: '编辑',
          auth: {
            perm: 'data:run-abnormal:update',
            effect: 'disable',
          },
          onClick: () => {
            openMenuModal(record);
          },
        },
        {
          label: '删除',
          auth: 'data:run-abnormal:delete',
          popConfirm: {
            title: '你确定要删除吗？',
            placement: 'left',
            onConfirm: () => delRowConfirm(record),
          },
        },
      ],
    },
  ];
</script>
