<template>
  <DynamicTable
    row-key="id"
    header-title="人员巡检"
    :data-request="Api.dataPersonnelInspection.personnelInspectionList"
    :columns="columns"
    bordered
    size="small"
    show-index
    :search="false"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'personType'">
        {{ personTypeList.find((n) => n.value === record[column.dataIndex])?.label }}
      </template>
    </template>
    <template #toolbar>
      <a-button
        type="primary"
        :disabled="!$auth('data:personnel-inspection:create')"
        @click="openMenuModal({})"
      >
        新增
      </a-button>
    </template>
  </DynamicTable>
</template>

<script lang="ts" setup>
  import { onBeforeMount, ref } from 'vue';
  import { baseColumns, type TableListItem, type TableColumnItem } from './columns';
  import { roleSchemas } from './formSchemas';
  import { useTable } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/';
  import Api from '@/api/';

  defineOptions({
    name: 'DataPersonnelInspection',
  });

  const personTypeList = ref<LabelValueOptions>([]);
  const [DynamicTable, dynamicTableInstance] = useTable();

  const [showModal] = useFormModal();

  onBeforeMount(async () => {
    const data = await Api.systemDictItem.dictItemFindListByCode({ code: 'person_type' });
    personTypeList.value = data.map((n) => ({ label: n.label, value: n.value }));
  });

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
            await Api.dataPersonnelInspection.personnelInspectionUpdate({ id: record.id }, params);
          } else {
            await Api.dataPersonnelInspection.personnelInspectionCreate(params);
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
        field: 'personType',
        componentProps: {
          options: personTypeList.value,
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
    await Api.dataPersonnelInspection.personnelInspectionDelete({ id: record.id });
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
            perm: 'data:personnel-inspection:update',
            effect: 'disable',
          },
          onClick: () => {
            openMenuModal(record);
          },
        },
        {
          label: '删除',
          auth: 'data:personnel-inspection:delete',
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
