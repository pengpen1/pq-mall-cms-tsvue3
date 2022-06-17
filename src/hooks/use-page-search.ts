import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  function handleRefreshClick() {
    pageContentRef.value?.getPageData()
  }
  function handleQueryClick(queryInfo: any) {
    // queryInfo就是formData，从pageSearch那里传过来的
    pageContentRef.value?.getPageData(queryInfo)
    console.log(queryInfo)
  }
  return [pageContentRef, handleQueryClick, handleRefreshClick]
}
