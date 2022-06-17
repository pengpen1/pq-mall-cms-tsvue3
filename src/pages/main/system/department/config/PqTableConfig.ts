// table配置抽取
export const PqTableConfig = {
  listConfig: [
    {
      prop: 'name',
      label: '部门名称',
      minWidth: '100',
      align: 'center'
    },
    {
      prop: 'leader',
      label: '领导',
      minWidth: '100',
      align: 'center'
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
  title: '部门列表'
}
