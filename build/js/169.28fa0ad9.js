"use strict";(self["webpackChunkvue3_ts_cms"]=self["webpackChunkvue3_ts_cms"]||[]).push([[169],{22418:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(73396),l=a(87139);const o={class:"page-content"},i=(0,n.Uk)("新增"),r={class:"handler-btns",style:{display:"flex","justify-content":"center"}},s=(0,n.Uk)("编辑"),d=(0,n.Uk)("删除");function p(e,t,a,p,c,u){const g=(0,n.up)("el-button"),m=(0,n.up)("pq-table");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(m,(0,n.dG)({listData:e.listData},e.PqTableConfig,{listCount:e.listCount,page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=t=>e.pageInfo=t)}),(0,n.Nv)({headerHandler:(0,n.w5)((()=>[e.isCreate?((0,n.wg)(),(0,n.j4)(g,{key:0,type:"primary",onClick:e.handleNewClick},{default:(0,n.w5)((()=>[i])),_:1},8,["onClick"])):(0,n.kq)("",!0),(0,n.Wm)(g,{icon:"Refresh"})])),createAt:(0,n.w5)((t=>[(0,n.Uk)((0,l.zw)(e.$filters.formatDate(t.row.createAt)),1)])),updateAt:(0,n.w5)((t=>[(0,n.Uk)((0,l.zw)(e.$filters.formatDate(t.row.updateAt)),1)])),handler:(0,n.w5)((t=>[(0,n._)("div",r,[e.isUpdate?((0,n.wg)(),(0,n.j4)(g,{key:0,type:"primary",size:"small",text:"",icon:"EditPen",style:{padding:"0"},onClick:a=>e.handleEditClick(t.row)},{default:(0,n.w5)((()=>[s])),_:2},1032,["onClick"])):(0,n.kq)("",!0),e.isDelete?((0,n.wg)(),(0,n.j4)(g,{key:1,type:"primary",size:"small",text:"",icon:"Delete",style:{padding:"0"},onClick:a=>e.handleDeleteClick(t.row)},{default:(0,n.w5)((()=>[d])),_:2},1032,["onClick"])):(0,n.kq)("",!0)])])),_:2},[(0,n.Ko)(e.otherPropsSlots,(t=>({name:t.slotName,fn:(0,n.w5)((a=>[(0,n.WI)(e.$slots,t.slotName,{row:a.row})]))})))]),1040,["listData","listCount","page"])])}var c=a(44870),u=a(41411);const g={class:"table"},m={class:"header"},h={class:"title"},C={class:"headerHandler"},f={key:0,class:"footer"},w={class:"demo-pagination-block"};function y(e,t,a,o,i,r){const s=(0,n.up)("el-table-column"),d=(0,n.up)("el-table"),p=(0,n.up)("el-pagination");return(0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",m,[(0,n.WI)(e.$slots,"header",{},(()=>[(0,n._)("div",h,(0,l.zw)(e.title),1),(0,n._)("div",C,[(0,n.WI)(e.$slots,"headerHandler",{},void 0,!0)])]),!0)]),(0,n.Wm)(d,(0,n.dG)({data:e.listData,border:"",style:{width:"100%"},onSelectionChange:e.handleSelectionChange},e.childrenProps),{default:(0,n.w5)((()=>[e.showSelectColumn?((0,n.wg)(),(0,n.j4)(s,{key:0,type:"selection",align:"center",width:"60"})):(0,n.kq)("",!0),e.showIndexColumn?((0,n.wg)(),(0,n.j4)(s,{key:1,type:"index",label:"序号",align:"center",width:"80"})):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.listConfig,(t=>((0,n.wg)(),(0,n.j4)(s,(0,n.dG)({key:t.prop},t,{"show-overflow-tooltip":""}),{default:(0,n.w5)((a=>[(0,n.WI)(e.$slots,t.slotName,{row:a.row},(()=>[(0,n.Uk)((0,l.zw)(a.row[t.prop]),1)]),!0)])),_:2},1040)))),128))])),_:3},16,["data","onSelectionChange"]),e.showFooter?((0,n.wg)(),(0,n.iD)("div",f,[(0,n.WI)(e.$slots,"footer",{},(()=>[(0,n._)("div",w,[(0,n.Wm)(p,{"page-sizes":[10,20,30],"page-size":e.page.pageSize,"current-page":e.page.currentPage,small:e.small,disabled:e.disabled,background:e.background,layout:"total, sizes, prev, pager, next, jumper",total:e.listCount,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["page-size","current-page","small","disabled","background","total","onSizeChange","onCurrentChange"])])]),!0)])):(0,n.kq)("",!0)])}var k=(0,n.aZ)({props:{listData:{type:Array,required:!0},listCount:{type:Number,default:0},listConfig:{type:Array,required:!0},showIndexColumn:{type:Boolean,default:!1},showSelectColumn:{type:Boolean,default:!1},title:{type:String,required:!0},page:{type:Object,default:()=>({currentPage:0,pageSize:10})},childrenProps:{type:Object,default:()=>({})},showFooter:{type:Boolean,default:!0}},emits:["SelectionChange","update:page"],setup(e,{emit:t}){function a(e){t("SelectionChange",e)}const n=(0,c.iH)(!1),l=(0,c.iH)(!1),o=(0,c.iH)(!1),i=a=>{console.log(`${a} items per page`),t("update:page",{...e.page,pageSize:a})},r=a=>{console.log(`current page: ${a}`),t("update:page",{...e.page,currentPage:a})};return{handleSelectionChange:a,small:n,background:l,disabled:o,handleSizeChange:i,handleCurrentChange:r}}}),b=a(40089);const v=(0,b.Z)(k,[["render",y],["__scopeId","data-v-07f024d4"]]);var N=v,P=N;function S(e,t){const a=(0,u.oR)(),n=a.state.loginModule.permissions;let l="";return l="user"===e?`system:users:${t}`:`system:${e}:${t}`,!!n.find((e=>e===l))}var q=(0,n.aZ)({name:"system-user",props:{PqTableConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},components:{PqTable:P},emits:["newBtnClick","editBtnClick"],setup(e,{emit:t}){const a=S(e.pageName,"create"),l=S(e.pageName,"delete"),o=S(e.pageName,"update"),i=S(e.pageName,"query"),r=(0,c.iH)({currentPage:1,pageSize:10});(0,n.YP)(r,(()=>{d()}));const s=(0,u.oR)(),d=(t={})=>{i?s.dispatch("systemModule/getPageListAction",{pageName:e.pageName,queryInfo:{offset:(r.value.currentPage-1)*r.value.pageSize,size:r.value.pageSize,...t}}):alert(`抱歉！您没有权限查看页面：${e.pageName}`)};d();const p=(0,n.Fl)((()=>s.getters["systemModule/pageListData"](e.pageName))),g=(0,n.Fl)((()=>s.getters["systemModule/pageListCount"](e.pageName))),m=e.PqTableConfig?.listConfig.filter((e=>{if(e.slotName)return"createAt"!==e.slotName&&("updateAt"!==e.slotName&&"handler"!==e.slotName)}));function h(t){s.dispatch("systemModule/deletePageDataAction",{pageName:e.pageName,id:t.id})}function C(e){t("editBtnClick",e)}function f(){t("newBtnClick")}return{listData:p,listCount:g,getPageData:d,pageInfo:r,otherPropsSlots:m,isCreate:a,isDelete:l,isUpdate:o,handleDeleteClick:h,handleEditClick:C,handleNewClick:f}}});const z=(0,b.Z)(q,[["render",p]]);var D=z,_=D},82169:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(73396);const l={class:"menu"};function o(e,t,a,o,i,r){const s=(0,n.up)("PageContent");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(s,{pageName:"menu",PqTableConfig:e.PqTableConfig},null,8,["PqTableConfig"])])}var i=a(22418);const r={listConfig:[{prop:"name",label:"菜单名称",minWidth:"100",align:"center"},{prop:"type",label:"类型",minWidth:"60",align:"center",slotName:"type"},{prop:"url",label:"菜单url",minWidth:"100",align:"center"},{prop:"icon",label:"菜单icon",minWidth:"100",align:"center"},{prop:"permission",label:"按钮权限",minWidth:"100",align:"center"},{prop:"createAt",label:"创建时间",minWidth:"200",align:"center",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"200",align:"center",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler",align:"center"}],showIndexColumn:!1,showSelectColumn:!1,showFooter:!1,title:"菜单列表",childrenProps:{rowKey:"id",treeProps:{children:"children"}}};var s=(0,n.aZ)({name:"system-department",setup(){return{PqTableConfig:r}},components:{PageContent:i.Z}}),d=a(40089);const p=(0,d.Z)(s,[["render",o],["__scopeId","data-v-0cf5d291"]]);var c=p}}]);
//# sourceMappingURL=169.28fa0ad9.js.map