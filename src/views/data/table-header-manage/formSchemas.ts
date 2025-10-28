import { componentMap, type FormSchema } from '@/components/core/schema-form';

export const roleSchemas: FormSchema<API.TableHeaderManageEntity>[] = [
  {
    field: 'module',
    component: 'Select',
    label: '模块',
    rules: [{ required: true }],
  },
  {
    field: 'name',
    component: 'Input',
    label: '展示名称',
    rules: [{ required: true }],
  },
  {
    field: 'unit',
    component: 'Input',
    label: '单位',
  },
  {
    field: 'field',
    component: 'Input',
    label: '字段名',
    rules: [{ required: true }],
    dynamicDisabled: true,
    vShow: false,
  },
  {
    field: 'formType',
    component: 'Select',
    label: '表单类型',
    rules: [{ required: true }],
    defaultValue: 'Input',
    componentProps: {
      options: Object.keys(componentMap).map((item) => ({ label: item, value: item })),
    },
    vShow: false,
  },
  {
    field: 'formOption',
    component: 'InputTextArea',
    label: '表单配置',
    vShow: false,
    rules: [
      {
        validator: async (_, value) => {
          console.log(value);
          if (!value) {
            return Promise.resolve();
          }
          try {
            JSON.parse(`${value}`);
            return Promise.resolve();
          } catch (error) {
            console.error(error);
            return Promise.reject('JSON格式不正确');
          }
        },
      },
    ],
    componentProps: {
      autoSize: { minRows: 2, maxRows: 6 },
    },
  },
  {
    field: 'show',
    component: 'RadioGroup',
    label: '是否显示',
    defaultValue: 1,
    componentProps: {
      buttonStyle: 'solid',
      options: [
        {
          label: '是',
          value: 1,
        },
        {
          label: '否',
          value: 0,
        },
      ],
    },
  },
  {
    field: 'required',
    component: 'RadioGroup',
    label: '是否必填',
    defaultValue: 1,
    componentProps: {
      buttonStyle: 'solid',
      options: [
        {
          label: '是',
          value: 1,
        },
        {
          label: '否',
          value: 0,
        },
      ],
    },
  },
  {
    field: 'orderNo',
    component: 'InputNumber',
    label: '排序',
    defaultValue: 0,
    rules: [{ required: true, type: 'number' }],
  },
];
