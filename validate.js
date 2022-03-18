/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 验证邮箱
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

// 校验是否为中国大陆的邮政编码
export const isPostCode = value => {
  return /^[1-9][0-9]{5}$/.test(value.toString())
}

/**
 * 手机号码
 * @param {*} s
 */
export const isTel = value => {
  return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString())
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

// 判断身份证号码
export function cardid(code) {
  let list = []
  let result = true
  let msg = ''
  var city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  }
  if (!validatenull(code)) {
    if (code.length == 18) {
      if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
        msg = '证件号码格式错误'
      } else if (!city[code.substr(0, 2)]) {
        msg = '地址编码错误'
      } else {
        //18位身份证需要验证最后一位校验位
        code = code.split('')
        //∑(ai×Wi)(mod 11)
        //加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        //校验位
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2, 'x']
        var sum = 0
        var ai = 0
        var wi = 0
        for (var i = 0; i < 17; i++) {
          ai = code[i]
          wi = factor[i]
          sum += ai * wi
        }
        if (parity[sum % 11] != code[17]) {
          msg = '证件号码校验位错误'
        } else {
          result = false
        }
      }
    } else {
      msg = '证件号码长度不为18位'
    }
  } else {
    msg = '证件号码不能为空'
  }
  list.push(result)
  list.push(msg)
  return list
}

// 小写字母
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

// 大写字母
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

// 大小写字母
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/*验证 pad 还是 pc*/
export const vaildatePc = function () {
  const userAgentInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

// 判断姓名是否正确
export function validatename(name) {
  var regName = /^[\u4e00-\u9fa5]{2,4}$/
  if (!regName.test(name)) return false
  return true
}

// 判断是否为整数
export function validatenum(num, type) {
  let regName = /[^\d.]/g
  if (type == 1) {
    if (!regName.test(num)) return false
  } else if (type == 2) {
    regName = /[^\d]/g
    if (!regName.test(num)) return false
  }
  return true
}

// 判断是否为小数
export function validatenumord(num, type) {
  let regName = /[^\d.]/g
  if (type == 1) {
    if (!regName.test(num)) return false
  } else if (type == 2) {
    regName = /[^\d.]/g
    if (!regName.test(num)) return false
  }
  return true
}

// 检验是否为空，空值有：''、null、undefined、[]、{  }
export function validatenull(val) {
  if (typeof val == 'boolean') {
    return false
  }
  if (typeof val == 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length == 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true
    return false
  }
  return false
}

// 校验银行卡号
export function checkBankNumber(bankno) {
  var lastNum = bankno.substr(bankno.length - 1, 1) //取出最后一位（与luhm进行比较）
  var first15Num = bankno.substr(0, bankno.length - 1) //前15或18位
  var newArr = []
  for (var i = first15Num.length - 1; i > -1; i--) {
    //前15或18位倒序存进数组
    newArr.push(first15Num.substr(i, 1))
  }
  var arrJiShu = [] //奇数位*2的积 <9
  var arrJiShu2 = [] //奇数位*2的积 >9
  var arrOuShu = [] //偶数位数组
  for (var j = 0; j < newArr.length; j++) {
    if ((j + 1) % 2 == 1) {
      //奇数位
      if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2)
      else arrJiShu2.push(parseInt(newArr[j]) * 2)
    } //偶数位
    else arrOuShu.push(newArr[j])
  }
  var jishu_child1 = [] //奇数位*2 >9 的分割之后的数组个位数
  var jishu_child2 = [] //奇数位*2 >9 的分割之后的数组十位数
  for (var h = 0; h < arrJiShu2.length; h++) {
    jishu_child1.push(parseInt(arrJiShu2[h]) % 10)
    jishu_child2.push(parseInt(arrJiShu2[h]) / 10)
  }
  var sumJiShu = 0 //奇数位*2 < 9 的数组之和
  var sumOuShu = 0 //偶数位数组之和
  var sumJiShuChild1 = 0 //奇数位*2 >9 的分割之后的数组个位数之和
  var sumJiShuChild2 = 0 //奇数位*2 >9 的分割之后的数组十位数之和
  var sumTotal = 0
  for (var m = 0; m < arrJiShu.length; m++) {
    sumJiShu = sumJiShu + parseInt(arrJiShu[m])
  }
  for (var n = 0; n < arrOuShu.length; n++) {
    sumOuShu = sumOuShu + parseInt(arrOuShu[n])
  }
  for (var p = 0; p < jishu_child1.length; p++) {
    sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p])
    sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p])
  }
  //计算总和
  sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2)
  //计算Luhm值
  var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10
  var luhm = 10 - k
  if (lastNum == luhm) {
    return true
  } else {
    return false
  }
}

// 校验是否包含中文
export const haveCNChars = value => {
  return /[\u4e00-\u9fa5]/.test(value)
}

/**
 * 验证不能包含字母
 * @param { string } value
 */
export const isNoWord = value => /^[^A-Za-z]*$/g.test(value)

/**
 * 验证车牌号
 * @param { string } value
 */
export const isLicensePlateNumber = value =>
  /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(
    value
  )

// 校验是否为 IPv6 地址
export const isIPv6 = str => {
  return Boolean(
    str.match(/:/g)
      ? str.match(/:/g).length <= 7
      : false && /::/.test(str)
      ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str)
      : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str)
  )
}

// 校验是否包含 emoji 表情
export const isEmojiCharacter = value => {
  value = String(value)
  for (let i = 0; i < value.length; i++) {
    const hs = value.charCodeAt(i)
    if (0xd800 <= hs && hs <= 0xdbff) {
      if (value.length > 1) {
        const ls = value.charCodeAt(i + 1)
        const uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000
        if (0x1d000 <= uc && uc <= 0x1f77f) {
          return true
        }
      }
    } else if (value.length > 1) {
      const ls = value.charCodeAt(i + 1)
      if (ls == 0x20e3) {
        return true
      }
    } else {
      if (0x2100 <= hs && hs <= 0x27ff) {
        return true
      } else if (0x2b05 <= hs && hs <= 0x2b07) {
        return true
      } else if (0x2934 <= hs && hs <= 0x2935) {
        return true
      } else if (0x3297 <= hs && hs <= 0x3299) {
        return true
      } else if (
        hs == 0xa9 ||
        hs == 0xae ||
        hs == 0x303d ||
        hs == 0x3030 ||
        hs == 0x2b55 ||
        hs == 0x2b1c ||
        hs == 0x2b1b ||
        hs == 0x2b50
      ) {
        return true
      }
    }
  }
  return false
}
