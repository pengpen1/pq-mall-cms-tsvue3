import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export function usePageContent(
  newCallBack?: () => void,
  editCallBack?: (item?: any) => void
) {
  // 用于回显的formData
  const defaultInfo = ref({})

  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewData() {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }

    newCallBack && newCallBack()
  }

  function handleEditData(item: any) {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }

    editCallBack && editCallBack(item)
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
