import { App } from 'vue'

// import 'element-plus/dist/index.css'
//上面包含了基本样式,但是我觉得包过大

import 'element-plus/theme-chalk/base.css' //基本样式
import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-table.css'
import 'element-plus/theme-chalk/el-table-column.css'
import 'element-plus/theme-chalk/el-alert.css'
import 'element-plus/theme-chalk/el-autocomplete.css'
import 'element-plus/theme-chalk/el-avatar.css'
import 'element-plus/theme-chalk/el-backtop.css'
import 'element-plus/theme-chalk/el-badge.css'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-tabs.css'
import 'element-plus/theme-chalk/el-tab-pane.css'
import 'element-plus/theme-chalk/el-form.css'
import 'element-plus/theme-chalk/el-form-item.css'
import 'element-plus/theme-chalk/el-input.css'
import 'element-plus/theme-chalk/el-checkbox.css'
import 'element-plus/theme-chalk/el-link.css'
import 'element-plus/theme-chalk/el-container.css'
import 'element-plus/theme-chalk/el-aside.css'
import 'element-plus/theme-chalk/el-header.css'
import 'element-plus/theme-chalk/el-main.css'
import 'element-plus/theme-chalk/el-menu.css'
import 'element-plus/theme-chalk/el-sub-menu.css'
import 'element-plus/theme-chalk/el-icon.css'
import 'element-plus/theme-chalk/el-menu-item-group.css'
import 'element-plus/theme-chalk/el-menu-item.css'
import 'element-plus/theme-chalk/el-dropdown.css'
import 'element-plus/theme-chalk/el-dropdown-menu.css'
import 'element-plus/theme-chalk/el-dropdown-item.css'
import 'element-plus/theme-chalk/el-col.css'
import 'element-plus/theme-chalk/el-row.css'
import 'element-plus/theme-chalk/el-select.css'
import 'element-plus/theme-chalk/el-option.css'
import 'element-plus/theme-chalk/el-date-picker.css'
import 'element-plus/theme-chalk/el-breadcrumb.css'
import 'element-plus/theme-chalk/el-breadcrumb-item.css'
import 'element-plus/theme-chalk/el-pagination.css'
import 'element-plus/theme-chalk/el-image.css'
import 'element-plus/theme-chalk/el-image-viewer.css'
import 'element-plus/theme-chalk/el-dialog.css'
import 'element-plus/theme-chalk/el-tree.css'
import 'element-plus/theme-chalk/el-card.css'
import 'element-plus/theme-chalk/el-descriptions.css'
import 'element-plus/theme-chalk/el-descriptions-item.css'
import 'element-plus/theme-chalk/el-tag.css'
import 'element-plus/theme-chalk/el-tooltip.css'

import {
  ElButton,
  ElTable,
  ElTableColumn,
  ElAlert,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElIcon,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElPagination,
  ElImage,
  ElImageViewer,
  ElDialog,
  ElTree,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElTooltip
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElTableColumn,
  ElAlert,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElIcon,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElPagination,
  ElImage,
  ElImageViewer,
  ElDialog,
  ElTree,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElTooltip
]
// components.forEach((item) => {
//   // toLowerCase()
//   let newString = item.toLowerCase().replace('el', 'el-')
//   let importString = `element-plus/theme-chalk/${newString}.css`
//   import importString
// })

export function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
