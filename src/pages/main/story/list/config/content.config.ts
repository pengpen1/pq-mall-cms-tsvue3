export const contentTableConfig = {
  title: '故事列表',
  listConfig: [
    { prop: 'title', label: '故事标题', minWidth: '120', align: 'center' },
    { prop: 'content', label: '我的故事', minWidth: '500', align: 'center' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt',
      align: 'center'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: false
}
