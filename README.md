# CyanUtils

[![npm version](https://badge.fury.io/js/vae-utils.svg)](https://badge.fury.io/js/vae-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

CyanUtils 是一个轻量级的 JavaScript 工具库，提供了日常开发中常用的实用函数。包含数组处理、字符串操作、日期格式化、表单验证、浏览器操作等多个模块。

## ✨ 特性

- 📦 轻量级，无第三方依赖
- 🔧 涵盖日常开发常用功能
- 🌍 支持 ES6+ 模块化导入
- 💪 TypeScript 友好
- 🚀 开箱即用

## 📦 安装

```bash
npm install vae-utils
```

```bash
yarn add vae-utils
```

```bash
pnpm add vae-utils
```

## 🚀 快速开始

```javascript
// ES6 模块导入
import { dateFormat, randomString, isEmail } from 'vae-utils';

// 使用示例
const formattedDate = dateFormat(new Date(), 'YYYY-MM-DD');
const randomStr = randomString(8);
const isValidEmail = isEmail('test@example.com');
```

## 📚 API 文档

### 🔢 数组相关 (Array)

```javascript
import { similarity, arrayToTree, flattenArr } from 'vae-utils';
```

#### `flattenArr(arr)`
扁平化多维数组

```javascript
const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = flattenArr(nested);
// 输出: [1, 2, 3, 4, 5, 6]
```

#### `arrayToTree(items)`
将扁平化数组转换为树结构（常用于导航栏）

```javascript
const flatArray = [
  { id: 1, pid: 0, name: '父级1' },
  { id: 2, pid: 1, name: '子级1' },
  { id: 3, pid: 1, name: '子级2' }
];
const tree = arrayToTree(flatArray);
```

#### `similarity(arr1, arr2)`
获取两个数组的交集

```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const intersection = similarity(arr1, arr2);
// 输出: [3, 4]
```

### 🌐 浏览器相关 (Browser)

```javascript
import { scrollToTop, getClientHeight, toFullScreen } from 'vae-utils';
```

#### `scrollToTop()`
滚动到页面顶部

#### `scrollToBottom()`
滚动到页面底部

#### `smoothScroll(element)`
平滑滚动到指定元素

#### `getClientHeight()` / `getClientWidth()`
获取浏览器可视区域高度/宽度

#### `toFullScreen()` / `exitFullscreen()`
进入/退出全屏模式

### 📅 日期相关 (Date)

```javascript
import { dateFormat, calcDate, nowTime } from 'vae-utils';
```

#### `dateFormat(date, format)`
格式化日期

```javascript
const now = new Date();
const formatted = dateFormat(now, 'YYYY-MM-DD HH:mm:ss');
// 输出: "2024-01-15 14:30:25"
```

#### `calcDate(num)`
计算指定天数前/后的日期

```javascript
const yesterday = calcDate(-1);
const tomorrow = calcDate(1);
```

#### `nowTime()`
获取当前时间戳

### 🖥️ 设备检测 (Equipment)

```javascript
import { isMobile, osType, broswer } from 'vae-utils';
```

#### `isMobile()`
判断是否为移动设备

#### `isAppleMobileDevice()` / `isAndroidMobileDevice()`
判断是否为苹果/安卓移动设备

#### `osType()`
获取操作系统类型

#### `broswer()`
获取浏览器类型

### 🔢 数字相关 (Number)

```javascript
import { randomRangeNum, digitUppercase, numThousandFormat } from 'vae-utils';
```

#### `randomRangeNum(min, max)`
生成指定范围内的随机数

```javascript
const randomNum = randomRangeNum(1, 100);
```

#### `digitUppercase(num)`
数字转中文大写

```javascript
const chinese = digitUppercase(12345);
// 输出: "壹万贰仟叁佰肆拾伍"
```

#### `numThousandFormat(num)`
数字千分位格式化

```javascript
const formatted = numThousandFormat(1234567);
// 输出: "1,234,567"
```

### 🧩 对象相关 (Object)

```javascript
import { deepClone, flattenObj } from 'vae-utils';
```

#### `deepClone(obj)`
深拷贝对象

```javascript
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
```

#### `flattenObj(obj)`
扁平化对象

### 📝 字符串相关 (String)

```javascript
import { randomString, turnCase, telFormat, getCamelCase } from 'vae-utils';
```

#### `randomString(length)`
生成指定长度的随机字符串

```javascript
const str = randomString(8);
// 输出: "Kj8xMn2P"
```

#### `turnCase(str, type)`
字符串大小写转换
- `type = 1`: 全大写
- `type = 2`: 全小写  
- `type = 3`: 首字母大写

#### `telFormat(tel)`
手机号中间四位显示为星号

```javascript
const formatted = telFormat('13812345678');
// 输出: "138****5678"
```

#### `getCamelCase(str)` / `getKebabCase(str)`
短横线命名与驼峰命名互转

```javascript
const camel = getCamelCase('hello-world'); // "helloWorld"
const kebab = getKebabCase('helloWorld');  // "hello-world"
```

### 🔗 URL 相关 (URL)

```javascript
import { getUrlParamsList, params2Url } from 'vae-utils';
```

#### `getUrlParamsList(url)`
获取 URL 参数列表

#### `params2Url(params)`
参数对象转 URL 查询字符串

### ✅ 验证相关 (Validate)

```javascript
import { isEmail, isTel, regIdCard, isPostCode } from 'vae-utils';
```

#### `isEmail(email)`
验证邮箱格式

#### `isTel(phone)`
验证手机号格式

#### `regIdCard(idCard)`
验证身份证号码

#### `isPostCode(code)`
验证邮政编码

#### 更多验证函数
- `isPhone()` - 验证电话号码
- `checkBankNumber()` - 验证银行卡号
- `validateLowerCase()` - 验证小写字母
- `validateUpperCase()` - 验证大写字母
- `haveCNChars()` - 检测是否包含中文
- `isLicensePlateNumber()` - 验证车牌号
- `isIPv6()` - 验证 IPv6 地址
- `isEmojiCharacter()` - 检测 emoji 字符

### 🛠️ 其他工具 (Utils)

```javascript
import { downloadFileBlob, downloadFileBase64 } from 'vae-utils';
```

#### `downloadFileBlob(blob, filename)`
下载 Blob 文件

#### `downloadFileBase64(base64, filename)`
下载 Base64 文件

## 🔧 开发

### 自动生成 index.js

项目提供了自动生成主入口文件的脚本：

```bash
npm run auto
```

这个命令会扫描 `src` 目录下的所有模块文件，自动生成 `index.js` 文件。

### 项目结构

```
CyanUtils/
├── src/           # 源代码目录
│   ├── array.js   # 数组相关工具
│   ├── browser.js # 浏览器相关工具
│   ├── date.js    # 日期相关工具
│   ├── equipment.js # 设备检测工具
│   ├── number.js  # 数字相关工具
│   ├── object.js  # 对象相关工具
│   ├── string.js  # 字符串相关工具
│   ├── url.js     # URL 相关工具
│   ├── utils.js   # 其他工具
│   └── validate.js # 验证相关工具
├── scripts/       # 构建脚本
├── index.js       # 主入口文件
└── package.json
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 📞 联系方式

- GitHub: [https://github.com/cyan0714/CyanUtils](https://github.com/cyan0714/CyanUtils)
- 作者: Shiyan Chen
