<template>
  <div class="PqForm">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <ElForm :label-width="labelWidtn">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template v-if="item.type == 'input' || item.type == 'password'">
                <ElInput
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                ></ElInput>
              </template>

              <template v-else-if="item.type == 'select'">
                <ElSelect
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.selectOptions"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </ElSelect>
              </template>

              <template v-else-if="item.type == 'detepicker'">
                <ElDatePicker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                ></ElDatePicker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </ElForm>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from './type'

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidtn: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => {
        return {
          padding: '10px 40px'
        }
      }
    },
    colLayout: {
      type: Object,
      default: () => {
        return {
          // ≥1920px 响应式栅格数或者栅格属性对象
          xl: 6,
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        }
      }
    }
  },
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      // formData是引用类型，不加deep的话，只会监听地址的改变，属性改变没有效果
      { deep: true }
    )
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.PqForm {
  padding-top: 18px;
}
</style>
