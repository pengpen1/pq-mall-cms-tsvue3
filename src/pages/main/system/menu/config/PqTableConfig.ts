// table配置抽取
export const PqTableConfig = {
  listConfig: [
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: '100',
      align: 'center'
    },
    {
      prop: 'type',
      label: '类型',
      minWidth: '60',
      align: 'center',
      slotName: 'type'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '100',
      align: 'center'
    },
    {
      prop: 'icon',
      label: '菜单icon',
      minWidth: '100',
      align: 'center'
    },
    {
      prop: 'permission',
      label: '按钮权限',
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
  showIndexColumn: false,
  showSelectColumn: false,
  showFooter: false,
  title: '菜单列表',
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  }
}
