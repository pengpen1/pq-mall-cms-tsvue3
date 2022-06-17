// table配置抽取
export const PqTableConfig = {
  listConfig: [
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '100',
      align: 'center'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '60',
      align: 'center',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '60',
      align: 'center',
      slotName: 'newPrice'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100',
      align: 'center',
      slotName: 'imgUrl'
    },
    {
      prop: 'status',
      label: '状态',
      minWidth: '80',
      align: 'center',
      slotName: 'status'
    },
    {
      prop: 'inventoryCount',
      label: '库存计数',
      minWidth: '80',
      align: 'center'
    },
    {
      prop: 'saleCount',
      label: '销售额',
      minWidth: '80',
      align: 'center'
    },
    {
      prop: 'address',
      label: '地址',
      minWidth: '80',
      align: 'center'
    },
    {
      prop: 'categoryId',
      label: '类别ID',
      minWidth: '50',
      align: 'center'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      align: 'center',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      align: 'center',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      align: 'center',
      slotName: 'handler'
    }
  ],
  // 定制表格风格的变量
  showIndexColumn: true,
  showSelectColumn: true,
  title: '商品列表'
}
