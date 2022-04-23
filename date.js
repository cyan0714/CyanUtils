//=======================================日期间隔=======================================
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

//=======================================日期格式化=======================================
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

//=======================================当前时间=======================================
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

//=======================================获取昨天日期，格式：2022-04-22=======================================
export const getYesterday = () => {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate() - 1;
  if (d == "0") {
    m = m - 1;
    let temp = new Date(y, m, d);
    d = temp.getDate();
  }
  let Yesterday = [y, m.length > 1 ? m : '0' + m, d];
  return Yesterday.join("-");
}

//=======================================获取上个月或年，格式：getLastMonth('month') => 3, getLastMonth('year') => 2022, getLastMonth() => 2022-03 =====================================
export const getLastMonth = (type) => {
  var date = new Date();
  var year = date.getFullYear();   //当前年：四位数字
  var month = date.getMonth();     //当前月：0-11

  if (month == 0) {   //如果是0，则说明是1月份，上一个月就是去年的12月
    year -= 1;
    month = 12;
  }

  month = month < 10 ? ('0' + month) : month;   //月份格式化：月份小于10则追加个0

  let lastYearMonth = year + '-' + month;
  if (type == 'year') {
    return Number(year)
  } else if (type == 'month') {
    return Number(month)
  } else {
    return lastYearMonth;
  }

}

