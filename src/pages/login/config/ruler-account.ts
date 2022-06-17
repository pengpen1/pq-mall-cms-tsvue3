// 编写规则
const rules = {
  name: [
    {
      required: true,
      // 验证不通过的提示信息
      message: '用户名是必须传的内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/i,
      message: '用户名必须是5~10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传的参数',
      trigger: 'blur'
    },
    {
      // 括号的一个作用就是定义子模式,否定式向前查找断言
      // pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
      pattern: /(^\d{6,20}$)|(^[0-9A-Za-z]{6,20}$)/,
      message: '密码至少包含数字和英文,长度为6-20',
      trigger: 'blur'
    }
  ]
}
export default rules
