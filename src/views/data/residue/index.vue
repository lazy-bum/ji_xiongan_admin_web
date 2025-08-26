<template>
  <DynamicTable
    row-key="id"
    header-title="用户余量"
    :data-request="Api.dataResidue.residueList"
    :columns="columns"
    bordered
    size="small"
    show-index
    :search="false"
  >
    <template #toolbar>
      <a-button type="primary" :disabled="!$auth('data:residue:create')" @click="openMenuModal({})">
        新增
      </a-button>
    </template>
  </DynamicTable>
</template>

<script lang="ts" setup>
  import { onBeforeMount, ref, computed } from 'vue';
  import { type TableListItem, type TableColumnItem } from './columns';
  import type { FormSchema } from '@/components/core/schema-form';
  import { useTable, type TableColumn } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/';
  import Api from '@/api/';

  defineOptions({
    name: 'DataResidue',
  });

  const tableHeader = ref<API.TableHeaderManageEntity[]>([]);

  const baseColumns = computed(() => {
    return tableHeader.value.map((ele) => ({
      title: ele.unit ? `${ele.name}(${ele.unit})` : ele.name,
      dataIndex: ['data', ele.field],
      hideInSearch: true,
    })) as TableColumn<TableListItem>[];
  });

  const roleSchemas = computed(() => {
    return tableHeader.value.map((ele: any) => {
      return {
        field: ele.field,
        component: ele.formType,
        label: ele.unit ? `${ele.name}(${ele.unit})` : ele.name,
        rules: [{ required: ele.required }],
      };
    }) as FormSchema[];
  });

  const [DynamicTable, dynamicTableInstance] = useTable();

  const [showModal] = useFormModal();

  onBeforeMount(async () => {
    const data = await Api.dataTableHeaderManage.tableHeaderManageList({
      module: 'residue',
      pageSize: 100,
    });
    tableHeader.value = data?.items || [];
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
            await Api.dataResidue.residueUpdate({ id: record.id }, { data: params });
          } else {
            await Api.dataResidue.residueCreate({ data: params });
          }
          dynamicTableInstance?.reload();
        },
      },
      formProps: {
        layout: 'vertical',
        schemas: roleSchemas.value,
      },
    });

    if (record.id) {
      formRef?.setFieldsValue({
        ...record.data,
      });
    }
  };
  const delRowConfirm = async (record: TableListItem) => {
    await Api.dataResidue.residueDelete({ id: record.id });
    dynamicTableInstance?.reload();
  };

  const columns = computed<TableColumnItem[]>(() => [
    ...baseColumns.value,
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
            perm: 'data:residue:update',
            effect: 'disable',
          },
          onClick: () => {
            openMenuModal(record);
          },
        },
        {
          label: '删除',
          auth: 'data:residue:delete',
          popConfirm: {
            title: '你确定要删除吗？',
            placement: 'left',
            onConfirm: () => delRowConfirm(record),
          },
        },
      ],
    },
  ]);
</script>
