<template>
  <DynamicTable
    row-key="id"
    header-title="智能阴保"
    :data-request="Api.dataYinProtection.yinProtectionList"
    :columns="columns"
    bordered
    size="small"
    :immediate="false"
    show-index
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'station'">
        {{ deviceTypeList.find((n) => n.value === record[column.dataIndex])?.label }}
      </template>
      <template v-if="column.dataIndex === 'stateColor'">
        <div class="flex-cc">
          <div
            class="w-50px h-15px mr-5px"
            :style="{ backgroundColor: record[column.dataIndex] }"
          />
          <span>{{ record[column.dataIndex] }}</span>
        </div>
      </template>
    </template>
    <template #toolbar>
      <a-button
        type="primary"
        :disabled="!$auth('data:yin-protection:create')"
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
    name: 'dataYinProtection',
  });

  const deviceTypeList = ref<LabelValueOptions>([]);

  const [DynamicTable, dynamicTableInstance] = useTable({
    formProps: {
      schemas: searchFormSchemas,
    },
  });

  onBeforeMount(async () => {
    const data = await Api.systemDictItem.dictItemFindListByCode({ code: 'data_station' });
    deviceTypeList.value = data.map((n) => ({ label: n.label, value: n.value }));

    // 动态更新搜索表单项
    dynamicTableInstance?.getSearchFormRef()?.updateSchema?.([
      {
        field: 'station',
        defaultValue: deviceTypeList.value?.[0]?.value,
        componentProps: {
          options: deviceTypeList.value,
          onChange: (value) => {
            console.log(value);
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
            await Api.dataYinProtection.yinProtectionUpdate({ id: record.id }, params);
          } else {
            await Api.dataYinProtection.yinProtectionCreate(params);
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
    ]);

    const searchFormData = {
      station: dynamicTableInstance.getSearchFormRef?.()?.getFieldsValue()?.station,
      ...record,
    };

    formRef?.setFieldsValue(searchFormData);
  };
  const delRowConfirm = async (record: TableListItem) => {
    await Api.dataYinProtection.yinProtectionDelete({ id: record.id });
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
            perm: 'data:yin-protection:update',
            effect: 'disable',
          },
          onClick: () => {
            openMenuModal(record);
          },
        },
        {
          label: '删除',
          auth: 'data:yin-protection:delete',
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
