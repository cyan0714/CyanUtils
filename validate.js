/**
 * 邮箱
 * @param {*} s
 */
function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 验证邮箱
 * @param email
 * @returns {boolean}
 */
function validateEmail(email) {
  const re =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

// 校验是否为中国大陆的邮政编码
const isPostCode = value => {
  return /^[1-9][0-9]{5}$/.test(value.toString())
}

/**
 * 手机号码
 * @param {*} s
 */
const isTel = value => {
  return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString())
}

/**
 * 电话号码
 * @param {*} s
 */
function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * @description: 大陆居民身份证或军警身份证
 * @param {*} str
 * @return {*}
 */
 const regIdCard = str => {
  const weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  const idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
  const format = idcard_patter.test(str);
  const seventeen = str.substring(0, 17);
  let num = 0;
  for (let i = 0; i < seventeen.length; i++) {
    num = num + seventeen[i] * weight_factor[i];
  }
  return str[17] === check_code[num % 11] && format ? true : false;
}

// 小写字母
function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

// 大写字母
function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

// 大小写字母
function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/*验证 pad 还是 pc*/
const vaildatePc = function () {
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
function validatename(name) {
  var regName = /^[\u4e00-\u9fa5]{2,4}$/
  if (!regName.test(name)) return false
  return true
}

// 判断是否为整数
function validatenum(num, type) {
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
function validatenumord(num, type) {
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
function validatenull(val) {
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
function checkBankNumber(bankno) {
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
const haveCNChars = value => {
  return /[\u4e00-\u9fa5]/.test(value)
}

// 人名是否是中文校验
const StringIsCNName = str => {
  if (!str.trim()) return false;
  let re = /[^\u4e00-\u9fa5]/;
  if (re.test(str)) return false;
  return true;
};

/**
 * 验证不能包含字母
 * @param { string } value
 */
const isNoWord = value => /^[^A-Za-z]*$/g.test(value)

/**
 * 验证车牌号
 * @param { string } value
 */
const isLicensePlateNumber = value =>
  /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(
    value
  )

// 校验是否为 IPv6 地址
const isIPv6 = str => {
  return Boolean(
    str.match(/:/g)
      ? str.match(/:/g).length <= 7
      : false && /::/.test(str)
      ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str)
      : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str)
  )
}

// 校验是否包含 emoji 表情
const isEmojiCharacter = value => {
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
//  来往内地通行证（香港居民）
 const StringIsHongKongTXZ = str => {
  if (!str.trim()) return false;
  let re = new RegExp(/^([Hh]\d{8})$/);
  return re.test(str);
};

// 来往内地通行证（澳门居民）
const StringIsMacaoTXZ = str => {
  if (!str.trim()) return false;
  let re = new RegExp(/^([Mm]\d{8})$/);
  return re.test(str);
};

// 来往大陆通行证（台湾居民）
const StringIsTaiWanTXZ = str => {
  if (!str.trim()) return false;
  let re = new RegExp(/^\d{8}$/);
  return re.test(str);
};

export default {
  isEmail,
  validateEmail,
  isPostCode,
  isTel,
  isPhone,
  regIdCard,
  validateLowerCase,
  validateUpperCase,
  validatAlphabets,
  vaildatePc,
  validatename,
  validatenum,
  validatenumord,
  validatenull,
  checkBankNumber,
  haveCNChars,
  StringIsCNName,
  isLicensePlateNumber,
  isIPv6,
  isEmojiCharacter,
  StringIsHongKongTXZ,
  StringIsMacaoTXZ,
  StringIsTaiWanTXZ
}