// 根据 process.env.NODE_ENV 区分
// 开发环境 development
// 生产环境 production
// 测试环境 test

let BASE_URL = ''
const TIME_OUT = 10000

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = '/api'
    break
  case 'production':
    BASE_URL = '/api'
    break
  case 'test':
    BASE_URL = ''
    break
  default:
    break
}

export { BASE_URL, TIME_OUT }
