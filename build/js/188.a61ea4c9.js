"use strict";(self["webpackChunkvue3_ts_cms"]=self["webpackChunkvue3_ts_cms"]||[]).push([[188],{55026:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(73396);const n={class:"pageModal"},o={class:"dialog-footer"},i=(0,l.Uk)("取消"),d=(0,l.Uk)("确定");function r(e,t,a,r,c,f){const p=(0,l.up)("Pqform"),u=(0,l.up)("el-button"),s=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(s,{modelValue:e.centerDialogVisible,"onUpdate:modelValue":t[2]||(t[2]=t=>e.centerDialogVisible=t),title:"Warning",width:"30%",center:"",modal:!0,"append-to-body":!0,"destroy-on-close":!0},{footer:(0,l.w5)((()=>[(0,l._)("span",o,[(0,l.Wm)(u,{onClick:t[1]||(t[1]=t=>e.centerDialogVisible=!1)},{default:(0,l.w5)((()=>[i])),_:1}),(0,l.Wm)(u,{type:"primary",onClick:e.handleConfirmClick},{default:(0,l.w5)((()=>[d])),_:1},8,["onClick"])])])),default:(0,l.w5)((()=>[(0,l.Wm)(p,(0,l.dG)(e.PqModalConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData=t)}),null,16,["modelValue"]),(0,l.WI)(e.$slots,"default")])),_:3},8,["modelValue"])])}var c=a(44870),f=a(21183),p=a(20065),u=(0,l.aZ)({components:{Pqform:f.Z},props:{PqModalConfig:{type:Object,required:!0},defaultInfo:{type:Object,default:()=>({})},pageName:{type:String,required:!0},otherInfo:{type:Object,default:()=>({})}},setup(e){const t=(0,c.iH)(!1),a=(0,c.iH)({});(0,l.YP)((()=>e.defaultInfo),(t=>{for(const l of e.PqModalConfig.formItems)a.value[`${l.field}`]=t[`${l.field}`]}));const n=(0,p.oR)();function o(){t.value=!1,0===Object.keys(e.defaultInfo).length?n.dispatch("systemModule/createPageDataAction",{pageName:e.pageName,newData:{...a.value,...e.otherInfo}}):n.dispatch("systemModule/editPageDataAction",{pageName:e.pageName,editData:{...a.value,...e.otherInfo},id:e.defaultInfo.id})}return{centerDialogVisible:t,formData:a,handleConfirmClick:o}}}),s=a(40089);const m=(0,s.Z)(u,[["render",r]]);var g=m,h=g},59535:function(e,t,a){a.d(t,{b:function(){return n}});var l=a(44870);function n(e,t){const a=(0,l.iH)({}),n=(0,l.iH)();function o(){a.value={},n.value&&(n.value.centerDialogVisible=!0),e&&e()}function i(e){a.value={...e},n.value&&(n.value.centerDialogVisible=!0),t&&t(e)}return[n,a,o,i]}},42853:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var l=a(73396);const n={class:"department"},o={class:"tableContent"};function i(e,t,a,i,d,r){const c=(0,l.up)("PageSearch"),f=(0,l.up)("page-content"),p=(0,l.up)("PageModal");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(c,{PqFormConfig:e.PqFormConfig,onQueryBtnClick:e.handleQueryClick,onRefreshBtnClick:e.handleRefreshClick},null,8,["PqFormConfig","onQueryBtnClick","onRefreshBtnClick"]),(0,l._)("div",o,[(0,l.Wm)(f,{PqTableConfig:e.PqTableConfig,pageName:"department",ref:"pageContentRef",onEditBtnClick:e.handleEditData,onNewBtnClick:e.handleNewData},null,8,["PqTableConfig","onEditBtnClick","onNewBtnClick"])]),(0,l.Wm)(p,{pageName:"department",PqModalConfig:e.PqModalConfigRef,ref:"pageModalRef",defaultInfo:e.defaultInfo},null,8,["PqModalConfig","defaultInfo"])])}var d=a(17669);const r={formItems:[{field:"name",label:"部门名称",placeholder:"请输入部门名称",type:"input"},{field:"leader",label:"领导者",placeholder:"请输入领导者姓名",type:"input"},{field:"createAt",label:"创建时间",placeholder:"请选择创建的时间",type:"detepicker",otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}],itemStyle:{padding:"10px 40px"},labelWidth:"120px",colLayout:{xl:8,lg:8,md:12,sm:24,xs:24}},c={listConfig:[{prop:"name",label:"部门名称",minWidth:"100",align:"center"},{prop:"leader",label:"领导",minWidth:"100",align:"center"},{prop:"createAt",label:"创建时间",minWidth:"200",align:"center",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"200",align:"center",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler",align:"center"}],showIndexColumn:!0,showSelectColumn:!0,title:"部门列表"};var f=a(22418),p=a(32925),u=a(55026);const s={formItems:[{field:"name",label:"部门名称",placeholder:"请输入部门名称",type:"input"},{field:"leader",label:"领导",placeholder:"请输入领导姓名",type:"input"},{field:"parentId",type:"select",label:"上级部门",placeholder:"请选择上级部门",selectOptions:[]}],colLayout:{span:24},labelWidth:"70px",itemStyle:{margin:"8px 18px 8px 0px"}};var m=a(59535),g=a(20065),h=(0,l.aZ)({name:"system-department",setup(){const[e,t,a]=(0,p.Y)(),[n,o,i,d]=(0,m.b)(),f=(0,g.oR)(),u=(0,l.Fl)((()=>{const e=s.formItems?.find((e=>"parentId"===e.field));return e.selectOptions=f.state.entireDepartment.map((e=>({title:e.name,value:e.id}))),s}));return{PqFormConfig:r,PqTableConfig:c,pageContentRef:e,handleQueryClick:t,handleRefreshClick:a,pageModalRef:n,defaultInfo:o,handleNewData:i,handleEditData:d,PqModalConfigRef:u}},components:{PageSearch:d.Z,PageContent:f.Z,PageModal:u.Z}}),C=a(40089);const b=(0,C.Z)(h,[["render",i],["__scopeId","data-v-029ba388"]]);var y=b}}]);
//# sourceMappingURL=188.a61ea4c9.js.map