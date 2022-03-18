export { flattenArr, arrayToTree, similarity, countOccurrences } from './array.js'

export { deepClone, flattenObj } from './object.js'

export { downloadFileBlob, downloadFileBase64 } from './utils.js'

export { calcDate, dateFormat, nowTime } from './date.js'

export { isMobile, isAppleMobileDevice, isAndroidMobileDevice, osType, broswer, getExplorerInfo } from './equipment.js'

export { getTopUrl, getUrlParamsList, getUrlState, params2Url, replaceParamVal, delParamVal } from './url.js'

export {
  randomLenNum,
  randomRangeNum,
  outOfNum,
  digitUppercase,
  intToChinese,
  numThousandFormat,
  amountFormat
} from './number.js'

export {
  randomString,
  turnCase,
  randomHexColorCode,
  telFormat,
  getKebabCase,
  getCamelCase,
  trimBlank,
  toCDB,
  toDBC
} from './string.js'

export {
  scrollToTop,
  scrollToBottom,
  smoothScroll,
  getClientHeight,
  getClientWidth,
  toFullScreen,
  exitFullscreen
} from './browser.js'

export {
  isEmail,
  validateEmail,
  isPostCode,
  isTel,
  isPhone,
  cardid,
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
  isNoWord,
  isLicensePlateNumber,
  isIPv6,
  isEmojiCharacter
} from './validate.js'
