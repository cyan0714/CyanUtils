/**
 * 生成随机字符串
 * @param {number} len 字符串长度
 * @returns {string} 随机字符串
 */
const randomString = (len) => {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
  let strLen = chars.length;
  let randomStr = '';
  for (let i = 0; i < len; i++) {
      randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
};

/**
 * 字符串大小写转换
 * @param {string} str 待转换的字符串
 * @param {number} type 1-全大写 2-全小写 3-首字母大写 其他-不转换
 * @returns {string} 转换后的字符串
 */
function turnCase(str, type) {
  switch (type) {
      case 1:
          return str.toUpperCase();
      case 2:
          return str.toLowerCase();
      case 3:
          return str[0].toUpperCase() + str.substr(1).toLowerCase();
      default:
          return str;
  }
}

/**
 * 随机生成16进制颜色代码
 * @returns {string} 16进制颜色代码，如 #ff0000
 */
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

/**
 * 手机号中间四位变成星号
 * @param {string|number} tel 手机号
 * @returns {string} 格式化后的手机号
 */
const telFormat = (tel) => {
  tel = String(tel); 
  return tel.substr(0,3) + "****" + tel.substr(7);
};

/**
 * 驼峰命名转换成短横线命名
 * @param {string} str 驼峰命名字符串
 * @returns {string} 短横线命名字符串
 */
const getKebabCase = (str) => {
  return str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase())
}

/**
 * 短横线命名转换成驼峰命名
 * @param {string} str 短横线命名字符串
 * @returns {string} 驼峰命名字符串
 */
const getCamelCase = (str) => {
  return str.replace( /-([a-z])/g, (i, item) => item.toUpperCase())
}

/**
 * 去除字符串空格
 * @param {string} str 待处理的字符串
 * @param {number} type 去除空格类型 1-所有空格 2-前后空格 3-前空格 4-后空格 默认为1
 * @returns {string} 处理后的字符串
 */
const trimBlank = (str, type = 1) => {
	if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return str;
	switch (type) {
		case 1:
			return str.replace(/\s/g, "");
		case 2:
			return str.replace(/(^\s)|(\s*$)/g, "");
		case 3:
			return str.replace(/(^\s)/g, "");
		case 4:
			return str.replace(/(\s$)/g, "");
		default:
			return str;
	}
}

/**
 * 全角转换为半角
 * @param {string} str 待转换的字符串
 * @returns {string} 转换后的字符串
 */
const toCDB = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65281 && code <= 65374) {
      result += String.fromCharCode(str.charCodeAt(i) - 65248);
    } else if (code == 12288) {
      result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

/**
 * 半角转换为全角
 * @param {string} str 待转换的字符串
 * @returns {string} 转换后的字符串
 */
const toDBC = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 33 && code <= 126) {
      result += String.fromCharCode(str.charCodeAt(i) + 65248);
    } else if (code == 32) {
      result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

export default {
  randomString,
  turnCase,
  randomHexColorCode,
  telFormat,
  getKebabCase,
  getCamelCase,
  trimBlank,
  toCDB,
  toDBC,
}

