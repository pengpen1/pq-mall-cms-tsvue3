import { IPqForm } from '@/base-ui/form'

export const PqModalConfig: IPqForm = {
  formItems: [
    {
      field: 'name',
      label: '部门名称',
      placeholder: '请输入部门名称',
      type: 'input'
    },
    {
      field: 'leader',
      label: '领导',
      placeholder: '请输入领导姓名',
      type: 'input'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择上级部门',
      selectOptions: []
    }
  ],
  colLayout: {
    span: 24
  },
  labelWidth: '70px',
  itemStyle: {
    margin: '8px 18px 8px 0px'
  }
}
