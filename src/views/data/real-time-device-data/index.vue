<template>
  <DynamicTable
    row-key="id"
    header-title="设备实时数据"
    :data-request="Api.dataRealTimeDeviceData.realTimeDeviceDataList"
    :columns="columns"
    bordered
    size="small"
    show-index
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'station'">
        {{
          deviceTypeList.find(
            (n) =>
              n.value ===
              pointTable.find((n) => n.value === record.code)?.station?.toLocaleLowerCase(),
          )?.label
        }}
      </template>
      <template v-else-if="column.dataIndex === 'code'">
        <div>{{ pointTable.find((n) => n.value === record[column.dataIndex])?.label }}</div>
        <div>{{ record[column.dataIndex] }}</div>
      </template>
    </template>
  </DynamicTable>
</template>

<script lang="ts" setup>
  import { onBeforeMount, ref } from 'vue';
  import { baseColumns, type TableColumnItem, searchFormSchemas } from './columns';
  import { useTable } from '@/components/core/dynamic-table';
  import Api from '@/api/';

  defineOptions({
    name: 'DataRealTimeDeviceData',
  });

  const deviceTypeList = ref<LabelValueOptions>([]);
  const pointTable = ref<LabelValueOptions>([]);

  const [DynamicTable, dynamicTableInstance] = useTable({
    immediate: false,
    formProps: {
      schemas: searchFormSchemas,
    },
  });

  onBeforeMount(async () => {
    const data = await Api.systemDictItem.dictItemFindListByCode({ code: 'data_station' });
    const pointTableData = await Api.dataRealTimeDeviceData.realTimeDeviceDataFindPointTable();
    deviceTypeList.value = data.map((n) => ({ label: n.label, value: n.value }));
    pointTable.value = pointTableData.map((n) => ({ ...n, value: n.code }));

    // 动态更新搜索表单项
    dynamicTableInstance?.getSearchFormRef()?.updateSchema?.([
      {
        field: 'station',
        defaultValue: deviceTypeList.value[0]?.value,
        componentProps: {
          options: deviceTypeList.value,
          onChange: (value) => {
            dynamicTableInstance?.getSearchFormRef()?.setFieldsValue({ device: '' });
            dynamicTableInstance?.getSearchFormRef()?.updateSchema?.([
              {
                field: 'device',
                componentProps: {
                  options: pointTable.value.filter((n) => n.station?.toLocaleLowerCase() === value),
                },
              },
            ]);
          },
        },
      },
      {
        field: 'device',
        componentProps: {
          options: pointTable.value.filter(
            (n) => n.station?.toLocaleLowerCase() === deviceTypeList.value[0]?.value,
          ),
        },
      },
    ]);

    dynamicTableInstance.reload();
  });

  const columns: TableColumnItem[] = [...baseColumns];
</script>
