"use strict";(self["webpackChunkvue3_ts_cms"]=self["webpackChunkvue3_ts_cms"]||[]).push([[623],{22418:function(e,t,a){a.d(t,{Z:function(){return D}});var n=a(73396),l=a(87139);const i={class:"page-content"},o=(0,n.Uk)("新增"),r={class:"handler-btns",style:{display:"flex","justify-content":"center"}},s=(0,n.Uk)("编辑"),d=(0,n.Uk)("删除");function p(e,t,a,p,c,g){const u=(0,n.up)("el-button"),m=(0,n.up)("pq-table");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(m,(0,n.dG)({listData:e.listData},e.PqTableConfig,{listCount:e.listCount,page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=t=>e.pageInfo=t)}),(0,n.Nv)({headerHandler:(0,n.w5)((()=>[e.isCreate?((0,n.wg)(),(0,n.j4)(u,{key:0,type:"primary",onClick:e.handleNewClick},{default:(0,n.w5)((()=>[o])),_:1},8,["onClick"])):(0,n.kq)("",!0),(0,n.Wm)(u,{icon:"Refresh"})])),createAt:(0,n.w5)((t=>[(0,n.Uk)((0,l.zw)(e.$filters.formatDate(t.row.createAt)),1)])),updateAt:(0,n.w5)((t=>[(0,n.Uk)((0,l.zw)(e.$filters.formatDate(t.row.updateAt)),1)])),handler:(0,n.w5)((t=>[(0,n._)("div",r,[e.isUpdate?((0,n.wg)(),(0,n.j4)(u,{key:0,type:"primary",size:"small",text:"",icon:"EditPen",style:{padding:"0"},onClick:a=>e.handleEditClick(t.row)},{default:(0,n.w5)((()=>[s])),_:2},1032,["onClick"])):(0,n.kq)("",!0),e.isDelete?((0,n.wg)(),(0,n.j4)(u,{key:1,type:"primary",size:"small",text:"",icon:"Delete",style:{padding:"0"},onClick:a=>e.handleDeleteClick(t.row)},{default:(0,n.w5)((()=>[d])),_:2},1032,["onClick"])):(0,n.kq)("",!0)])])),_:2},[(0,n.Ko)(e.otherPropsSlots,(t=>({name:t.slotName,fn:(0,n.w5)((a=>[(0,n.WI)(e.$slots,t.slotName,{row:a.row})]))})))]),1040,["listData","listCount","page"])])}var c=a(44870),g=a(41411);const u={class:"table"},m={class:"header"},w={class:"title"},h={class:"headerHandler"},C={key:0,class:"footer"},f={class:"demo-pagination-block"};function y(e,t,a,i,o,r){const s=(0,n.up)("el-table-column"),d=(0,n.up)("el-table"),p=(0,n.up)("el-pagination");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",m,[(0,n.WI)(e.$slots,"header",{},(()=>[(0,n._)("div",w,(0,l.zw)(e.title),1),(0,n._)("div",h,[(0,n.WI)(e.$slots,"headerHandler",{},void 0,!0)])]),!0)]),(0,n.Wm)(d,(0,n.dG)({data:e.listData,border:"",style:{width:"100%"},onSelectionChange:e.handleSelectionChange},e.childrenProps),{default:(0,n.w5)((()=>[e.showSelectColumn?((0,n.wg)(),(0,n.j4)(s,{key:0,type:"selection",align:"center",width:"60"})):(0,n.kq)("",!0),e.showIndexColumn?((0,n.wg)(),(0,n.j4)(s,{key:1,type:"index",label:"序号",align:"center",width:"80"})):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.listConfig,(t=>((0,n.wg)(),(0,n.j4)(s,(0,n.dG)({key:t.prop},t,{"show-overflow-tooltip":""}),{default:(0,n.w5)((a=>[(0,n.WI)(e.$slots,t.slotName,{row:a.row},(()=>[(0,n.Uk)((0,l.zw)(a.row[t.prop]),1)]),!0)])),_:2},1040)))),128))])),_:3},16,["data","onSelectionChange"]),e.showFooter?((0,n.wg)(),(0,n.iD)("div",C,[(0,n.WI)(e.$slots,"footer",{},(()=>[(0,n._)("div",f,[(0,n.Wm)(p,{"page-sizes":[10,20,30],"page-size":e.page.pageSize,"current-page":e.page.currentPage,small:e.small,disabled:e.disabled,background:e.background,layout:"total, sizes, prev, pager, next, jumper",total:e.listCount,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["page-size","current-page","small","disabled","background","total","onSizeChange","onCurrentChange"])])]),!0)])):(0,n.kq)("",!0)])}var k=(0,n.aZ)({props:{listData:{type:Array,required:!0},listCount:{type:Number,default:0},listConfig:{type:Array,required:!0},showIndexColumn:{type:Boolean,default:!1},showSelectColumn:{type:Boolean,default:!1},title:{type:String,required:!0},page:{type:Object,default:()=>({currentPage:0,pageSize:10})},childrenProps:{type:Object,default:()=>({})},showFooter:{type:Boolean,default:!0}},emits:["SelectionChange","update:page"],setup(e,{emit:t}){function a(e){t("SelectionChange",e)}const n=(0,c.iH)(!1),l=(0,c.iH)(!1),i=(0,c.iH)(!1),o=a=>{console.log(`${a} items per page`),t("update:page",{...e.page,pageSize:a})},r=a=>{console.log(`current page: ${a}`),t("update:page",{...e.page,currentPage:a})};return{handleSelectionChange:a,small:n,background:l,disabled:i,handleSizeChange:o,handleCurrentChange:r}}}),b=a(40089);const v=(0,b.Z)(k,[["render",y],["__scopeId","data-v-07f024d4"]]);var P=v,N=P;function z(e,t){const a=(0,g.oR)(),n=a.state.loginModule.permissions;let l="";return l="user"===e?`system:users:${t}`:`system:${e}:${t}`,!!n.find((e=>e===l))}var S=(0,n.aZ)({name:"system-user",props:{PqTableConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},components:{PqTable:N},emits:["newBtnClick","editBtnClick"],setup(e,{emit:t}){const a=z(e.pageName,"create"),l=z(e.pageName,"delete"),i=z(e.pageName,"update"),o=z(e.pageName,"query"),r=(0,c.iH)({currentPage:1,pageSize:10});(0,n.YP)(r,(()=>{d()}));const s=(0,g.oR)(),d=(t={})=>{o?s.dispatch("systemModule/getPageListAction",{pageName:e.pageName,queryInfo:{offset:(r.value.currentPage-1)*r.value.pageSize,size:r.value.pageSize,...t}}):alert(`抱歉！您没有权限查看页面：${e.pageName}`)};d();const p=(0,n.Fl)((()=>s.getters["systemModule/pageListData"](e.pageName))),u=(0,n.Fl)((()=>s.getters["systemModule/pageListCount"](e.pageName))),m=e.PqTableConfig?.listConfig.filter((e=>{if(e.slotName)return"createAt"!==e.slotName&&("updateAt"!==e.slotName&&"handler"!==e.slotName)}));function w(t){s.dispatch("systemModule/deletePageDataAction",{pageName:e.pageName,id:t.id})}function h(e){t("editBtnClick",e)}function C(){t("newBtnClick")}return{listData:p,listCount:u,getPageData:d,pageInfo:r,otherPropsSlots:m,isCreate:a,isDelete:l,isUpdate:i,handleDeleteClick:w,handleEditClick:h,handleNewClick:C}}});const W=(0,b.Z)(S,[["render",p]]);var q=W,D=q},39623:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(73396),l=a(87139);const i={class:"goods"};function o(e,t,a,o,r,s){const d=(0,n.up)("el-image"),p=(0,n.up)("el-button"),c=(0,n.up)("page-content");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(c,{"page-name":"goods",PqTableConfig:e.PqTableConfig},{imgUrl:(0,n.w5)((e=>[(0,n.Wm)(d,{style:{width:"60px",height:"60px"},src:e.row.imgUrl,previewSrcList:[e.row.imgUrl],fit:"cover","preview-teleported":""},null,8,["src","previewSrcList"])])),oldPrice:(0,n.w5)((e=>[(0,n.Uk)((0,l.zw)("￥"+e.row.oldPrice),1)])),newPrice:(0,n.w5)((e=>[(0,n.Uk)((0,l.zw)("￥"+e.row.newPrice),1)])),status:(0,n.w5)((e=>[(0,n.Wm)(p,{plain:"",type:e.row.status?"success":"danger",size:"small"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.row.status?"售卖中":"下架中"),1)])),_:2},1032,["type"])])),_:1},8,["PqTableConfig"])])}const r={listConfig:[{prop:"name",label:"商品名称",minWidth:"100",align:"center"},{prop:"oldPrice",label:"原价",minWidth:"60",align:"center",slotName:"oldPrice"},{prop:"newPrice",label:"现价",minWidth:"60",align:"center",slotName:"newPrice"},{prop:"imgUrl",label:"商品图片",minWidth:"100",align:"center",slotName:"imgUrl"},{prop:"status",label:"状态",minWidth:"80",align:"center",slotName:"status"},{prop:"inventoryCount",label:"库存计数",minWidth:"80",align:"center"},{prop:"saleCount",label:"销售额",minWidth:"80",align:"center"},{prop:"address",label:"地址",minWidth:"80",align:"center"},{prop:"categoryId",label:"类别ID",minWidth:"50",align:"center"},{prop:"createAt",label:"创建时间",minWidth:"100",align:"center",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"100",align:"center",slotName:"updateAt"},{label:"操作",minWidth:"120",align:"center",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0,title:"商品列表"};var s=a(22418),d=(0,n.aZ)({name:"goods",components:{PageContent:s.Z},setup(){return{PqTableConfig:r}}}),p=a(40089);const c=(0,p.Z)(d,[["render",o],["__scopeId","data-v-bd39e352"]]);var g=c}}]);
//# sourceMappingURL=623.9f45c9d3.js.map