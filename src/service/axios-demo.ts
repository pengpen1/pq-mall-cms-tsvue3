import axios from 'axios'

console.log('执行axios')

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(11111, res)
})
axios
  .post('http://httpbin.org/post', {
    name: 'gagag',
    age: 18
  })
  .then((res) => {
    console.log(res)
  })
