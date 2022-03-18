// 日期间隔
export const calcDate = (date1, date2) => {
  let date3 = date2 - date1

  let days = Math.floor(date3 / (24 * 3600 * 1000))

  let leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
  let hours = Math.floor(leave1 / (3600 * 1000))

  let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
  let minutes = Math.floor(leave2 / (60 * 1000))

  let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
  let seconds = Math.round(date3 / 1000)
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}

// 日期格式化
export const dateFormat = (date, format) => {
  format = format || 'yyyy-MM-dd hh:mm:ss'
  if (date !== 'Invalid Date') {
    let o = {
      'M+': date.getMonth() + 1, //month
      'd+': date.getDate(), //day
      'h+': date.getHours(), //hour
      'm+': date.getMinutes(), //minute
      's+': date.getSeconds(), //second
      'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
      S: date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (let k in o)
      if (new RegExp('(' + k + ')').test(format))
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    return format
  }
  return ''
}

// 当前时间
export const nowTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const date = now.getDate() >= 10 ? now.getDate() : '0' + now.getDate()
  const hour = now.getHours() >= 10 ? now.getHours() : '0' + now.getHours()
  const miu = now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes()
  const sec = now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds()
  return +year + '年' + (month + 1) + '月' + date + '日 ' + hour + ':' + miu + ':' + sec
}
