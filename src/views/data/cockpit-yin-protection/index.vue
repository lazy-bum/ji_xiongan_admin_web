<template>
  <DynamicTable
    row-key="id"
    header-title="智能阴保(驾驶舱)"
    :data-request="Api.dataCockpitYinProtection.cockpitYinProtectionList"
    :columns="columns"
    bordered
    size="small"
    show-index
  >
    <template #toolbar>
      <a-button
        type="primary"
        :disabled="!$auth('data:cockpit-yin-protection:create')"
        @click="openMenuModal({})"
      >
        新增
      </a-button>
    </template>
  </DynamicTable>
</template>

<script lang="ts" setup>
  import { baseColumns, type TableListItem, type TableColumnItem } from './columns';
  import { roleSchemas } from './formSchemas';
  import { useTable } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/';
  import Api from '@/api/';

  defineOptions({
    name: 'DataCockpitYinProtection',
  });

  const [DynamicTable, dynamicTableInstance] = useTable();
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
            await Api.dataCockpitYinProtection.cockpitYinProtectionUpdate(
              { id: record.id },
              params,
            );
          } else {
            await Api.dataCockpitYinProtection.cockpitYinProtectionCreate(params);
          }
          dynamicTableInstance?.reload();
        },
      },
      formProps: {
        labelWidth: 100,
        schemas: roleSchemas,
      },
    });

    const searchFormData = {
      station: dynamicTableInstance.getSearchFormRef?.()?.getFieldsValue()?.station,
      ...record,
    };

    formRef?.setFieldsValue(searchFormData);
  };
  const delRowConfirm = async (record: TableListItem) => {
    await Api.dataCockpitYinProtection.cockpitYinProtectionDelete({ id: record.id });
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
            perm: 'data:cockpit-yin-protection:update',
            effect: 'disable',
          },
          onClick: () => {
            openMenuModal(record);
          },
        },
        {
          label: '删除',
          auth: 'data:cockpit-yin-protection:delete',
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
