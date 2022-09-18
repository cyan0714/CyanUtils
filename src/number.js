// 生成随机 len 位数字
 const randomLenNum = (len, date) => {
  let random = ''
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substr(0, len ? len : 4)
  if (date) random = random + Date.now()
  return random
}

// 指定范围随机数
const randomRangeNum = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 数字超过规定大小加上加号 “+”，如数字超过 99 显示 99+
 * @param { number } val 输入的数字
 * @param { number } maxNum 数字规定界限
 */
 const outOfNum = (val, maxNum) =>{
  val = val ? val-0 :0;
  if (val > maxNum ) {
      return `${maxNum}+`
  }else{
      return val;
  }
};

// 数字转化为大写金额
const digitUppercase = (n) => {
  const fraction = ['角', '分'];
  const digit = [
      '零', '壹', '贰', '叁', '肆',
      '伍', '陆', '柒', '捌', '玖'
  ];
  const unit = [
      ['元', '万', '亿'],
      ['', '拾', '佰', '仟']
  ];
  n = Math.abs(n);
  let s = '';
  for (let i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
      let p = '';
      for (let j = 0; j < unit[1].length && n > 0; j++) {
          p = digit[n % 10] + unit[1][j] + p;
          n = Math.floor(n / 10);
      }
      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return s.replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整');
};

// 数字转化为中文数字
const intToChinese = (value) => {
  const str = String(value);
  const len = str.length-1;
  const idxs = ['','十','百','千','万','十','百','千','亿','十','百','千','万','十','百','千','亿'];
  const num = ['零','一','二','三','四','五','六','七','八','九'];
  return str.replace(/([1-9]|0+)/g, ( $, $1, idx, full) => {
     let pos = 0;
     if($1[0] !== '0'){
       pos = len-idx;
       if(idx == 0 && $1[0] == 1 && idxs[len-idx] == '十'){
          return idxs[len-idx];
       }
        return num[$1[0]] + idxs[len-idx];
     } else {
        let left = len - idx;
        let right = len - idx + $1.length;
        if(Math.floor(right / 4) - Math.floor(left / 4) > 0){
           pos = left - left % 4;
        }
        if( pos ){
           return idxs[pos] + num[$1[0]];
        } else if( idx + $1.length >= len ){
           return '';
        }else {
           return num[$1[0]]
        }
     }
    });
 }
 
// 数字千位符分隔
const numThousandFormat = (n) => {
  return (nums || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

// 格式化金额(千分符、小数点保留两位)
const amountFormat = (val) => {
  if (val === undefined) {
    val = 0
  }
  // 小数点后有两个或者两个以上的数字，要将其转为两位小数
  val = Number(val).toFixed(2)
  val = Number(val).toLocaleString() // 3,000
  if (val.indexOf('.') === -1) {
    // 返回的数据没有小数点，就在后面添加 '.00'
    val = val + '.00'
  } else {
    const arr = val.split('.')
    if (arr[1].length === 1) {
      // 返回的数据有小数点，且小数点后只有一位数，要将其转为两位小数，在后面加个 0 即可
      val = arr[0] + '.' + arr[1] + '0'
    } else {
      // 有两位小数点，保持原来的值
      val = val
    }
  }
  return val
}

export default {
  randomLenNum,
  randomRangeNum,
  outOfNum,
  digitUppercase,
  intToChinese,
  numThousandFormat,
  amountFormat
}