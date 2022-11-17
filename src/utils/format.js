import dayjs from 'dayjs'

// 格式化时间

export function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(format)
}

export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day')
}
