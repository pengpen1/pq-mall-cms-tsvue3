// table配置抽取
export const PqTableConfig = {
  listConfig: [
    {
      prop: 'name',
      label: '用户名',
      minWidth: '100',
      align: 'center',
      slotName: 'name'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '100',
      align: 'center',
      slotName: 'realname'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      minWidth: '160',
      align: 'center',
      slotName: 'cellphone'
    },
    {
      prop: 'enable',
      label: '状态',
      minWidth: '100',
      align: 'center',
      slotName: 'enable'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      align: 'center',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      align: 'center',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler',
      align: 'center'
    }
  ],
  // 定制表格风格的变量
  showIndexColumn: true,
  showSelectColumn: true,
  title: '用户列表'
}
