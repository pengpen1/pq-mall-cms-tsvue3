// table配置抽取
export const PqTableConfig = {
  listConfig: [
    {
      prop: 'name',
      label: '角色名',
      minWidth: '100',
      align: 'center',
      slotName: 'name'
    },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: '100',
      align: 'center',
      slotName: 'intro'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      align: 'center',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
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
  title: '角色列表'
}
