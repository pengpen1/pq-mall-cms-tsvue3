interface IFormItem {
  field: string
  type: 'input' | 'password' | 'select' | 'detepicker'
  label: string
  rules?: any[]
  placeholder?: any
  isHidden?: boolean
  // 针对select的属性
  selectOptions?: any[]
  //特殊的属性
  otherOptions?: any
}

interface IPqForm {
  formItems: IFormItem[]
  itemStyle?: any
  labelWidth?: string
  colLayout?: any
}
export { IFormItem, IPqForm }
