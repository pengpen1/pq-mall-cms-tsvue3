let BASE_URL = ''
let BASE_NAME = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
  BASE_NAME = ''
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = ''
  BASE_NAME = ''
} else {
  BASE_URL = ''
  BASE_NAME = ''
}
export { BASE_URL, BASE_NAME, TIME_OUT }
