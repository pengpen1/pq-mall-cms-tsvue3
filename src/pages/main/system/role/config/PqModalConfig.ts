import { IPqForm } from '@/base-ui/form'

export const PqModalConfig: IPqForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名',
      placeholder: '请输入角色名',
      type: 'input'
    },
    {
      field: 'intro',
      label: '角色介绍',
      placeholder: '请输入角色介绍',
      type: 'input'
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
