<template>
  <DynamicTable
    row-key="id"
    header-title="表头管理"
    :data-request="Api.dataTableHeaderManage.tableHeaderManageList"
    :columns="columns"
    bordered
    size="small"
    :immediate="false"
    show-index
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'module'">
        {{ modulesList.find((n) => n.value === record[column.dataIndex])?.label }}
      </template>
      <template v-if="column.dataIndex === 'show'">
        {{ record[column.dataIndex] === 1 ? '是' : '否' }}
      </template>
      <template v-if="column.dataIndex === 'required'">
        {{ record[column.dataIndex] === 1 ? '是' : '否' }}
      </template>
    </template>
    <template #toolbar>
      <a-button
        type="primary"
        :disabled="!$auth('data:table-header-manage:create')"
        @click="openMenuModal({})"
      >
        新增
      </a-button>
    </template>
  </DynamicTable>
</template>

<script lang="ts" setup>
  import { onBeforeMount, ref } from 'vue';
  import { isEmpty } from 'lodash-es';
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
    name: 'dataTableHeaderManage',
  });

  const modulesList = ref<LabelValueOptions>([]);

  const [DynamicTable, dynamicTableInstance] = useTable({
    formProps: {
      schemas: searchFormSchemas,
    },
  });

  onBeforeMount(async () => {
    const data = await Api.systemDictItem.dictItemFindListByCode({ code: 'data_modules' });
    modulesList.value = data.map((n) => ({ label: n.label, value: n.value }));

    // 动态更新搜索表单项
    dynamicTableInstance?.getSearchFormRef()?.updateSchema?.([
      {
        field: 'module',
        defaultValue: modulesList.value?.[0]?.value,
        componentProps: {
          options: modulesList.value,
          onChange: (value) => {
            dynamicTableInstance?.reload();
          },
        },
      },
    ]);
    dynamicTableInstance?.reload();
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
            await Api.dataTableHeaderManage.tableHeaderManageUpdate({ id: record.id }, params);
          } else {
            await Api.dataTableHeaderManage.tableHeaderManageCreate(params);
          }
          dynamicTableInstance?.reload();
        },
      },
      formProps: {
        labelWidth: 100,
        schemas: roleSchemas,
      },
    });

    const searchForm = dynamicTableInstance?.getSearchFormRef()?.getFieldsValue() || {};

    if (isEmpty(record.id)) {
      formRef?.setFieldsValue({
        module: searchForm.module ?? '',
        field: `module_${new Date().getTime().toString()}`,
      });
    }

    formRef?.updateSchema?.([
      {
        field: 'module',
        componentProps: {
          value: record.module,
          options: modulesList.value,
        },
      },
    ]);

    const searchFormData = {
      station: dynamicTableInstance.getSearchFormRef?.()?.getFieldsValue()?.station,
      ...record,
      formOption: record.formOption ? JSON.stringify(record.formOption) : undefined,
    };

    formRef?.setFieldsValue(searchFormData);
  };
  const delRowConfirm = async (record: TableListItem) => {
    await Api.dataTableHeaderManage.tableHeaderManageDelete({ id: record.id });
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
            perm: 'data:table-header-manage:update',
            effect: 'disable',
          },
          onClick: () => {
            openMenuModal(record);
          },
        },
        {
          label: '删除',
          auth: 'data:table-header-manage:delete',
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
