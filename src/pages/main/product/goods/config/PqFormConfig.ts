import { IPqForm } from '@/base-ui/form'

export const PqFormConfig: IPqForm = {
  formItems: [
    { field: 'id', label: 'id', placeholder: '请输入id', type: 'input' },
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'cellphone',
      label: '电话号码',
      placeholder: '请输入电话号码',
      type: 'input'
    },
    {
      field: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      type: 'input'
    },
    {
      field: 'enable',
      label: '用户状态',
      placeholder: '请选择用户的状态',
      type: 'select',
      selectOptions: [
        {
          title: '启用',
          value: '启用'
        },
        {
          title: '禁用',
          value: '禁用'
        }
      ]
    },
    {
      field: 'createAt',
      label: '创建时间',
      placeholder: '请选择创建的时间',
      type: 'detepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  itemStyle: {
    padding: '10px 40px'
  },
  labelWidth: '120px',
  colLayout: {
    // ≥1920px 响应式栅格数或者栅格属性对象
    xl: 8,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }
}
