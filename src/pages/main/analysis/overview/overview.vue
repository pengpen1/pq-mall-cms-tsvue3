<template>
  <div class="overview">
    <pq-card title="关于" class="el-card">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </pq-card>

    <pq-card title="技术栈" class="el-card">
      <pq-text-link :text-arrs="technologyStacks" />
      <pq-descriptions
        title="生产环境依赖"
        :column="2"
        :table-datas="dependencies"
      />
      <pq-descriptions
        title="开发环境依赖"
        :column="2"
        :table-datas="devDependencies"
      />
    </pq-card>

    <pq-card title="项目结构" class="el-card">
      <div class="c-left">
        <pq-code language="bash" :code="projectDir" />
      </div>
    </pq-card>

    <pq-descriptions
      title="文件命名规范"
      :column="1"
      :table-datas="[
        { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
        {
          name: '文件(.ts .vue .json .d.ts)',
          description: '统一小写, 多个单词使用-分割'
        }
      ]"
    />

    <pq-card title="Git提交规范" class="el-card">
      <pq-descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'yarn commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }
        ]"
      />
    </pq-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PqDescriptions from '@/base-ui/descriptions'
import PqTextLink from '@/base-ui/text-link'
import PqCard from '@/base-ui/card'
import PqCode from '@/base-ui/code'
import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir
} from './config'

export default defineComponent({
  name: 'overview',
  components: {
    PqCard,
    PqDescriptions,
    PqTextLink,
    PqCode
  },
  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies,
      projectDir
    }
  }
})
</script>

<style scoped lang="less">
.el-card {
  margin-bottom: 20px;
}
.c-left {
  text-align: left;
}
</style>
