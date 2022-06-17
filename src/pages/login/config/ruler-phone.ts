// 编写规则
const rules = {
  num: [
    {
      required: true,
      // 验证不通过的提示信息
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^1[34578][0-9]{9}$/,
      message: '请输入1开头的11位数手机号',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^\d{6}$/,
      message: '请输入6位数的正确验证码',
      trigger: 'blur'
    }
  ]
}
export default rules
