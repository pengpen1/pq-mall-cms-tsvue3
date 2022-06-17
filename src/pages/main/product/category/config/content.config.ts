export const contentTableConfig = {
  title: '类别列表',
  listConfig: [
    { prop: 'name', label: '角色名称', minWidth: '120', align: 'center' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'create',
      align: 'center'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'update',
      align: 'center'
    },
    { label: '操作', minWidth: '120', slotName: 'handler', align: 'center' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
