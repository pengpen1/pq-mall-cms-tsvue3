import { IPqForm } from '@/base-ui/form'

export const PqModalConfig: IPqForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      type: 'input'
    },
    {
      field: 'password',
      label: '密码',
      placeholder: '请输入密码',
      type: 'password',
      isHidden: false
    },
    {
      field: 'cellphone',
      label: '电话号码',
      placeholder: '请输入电话号码',
      type: 'input'
    },
    {
      field: 'roleId',
      label: '角色',
      placeholder: '请选择角色',
      type: 'select',
      selectOptions: []
    },
    {
      field: 'departmentId',
      label: '部门',
      placeholder: '请选择部门',
      type: 'select',
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
