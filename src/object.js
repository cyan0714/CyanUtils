/**
 * 对象深拷贝
 */
 const deepClone = data => {
  var type = getObjType(data)
  var obj
  if (type === 'array') {
    obj = []
  } else if (type === 'object') {
    obj = {}
  } else {
    //不再具有下一层次
    return data
  }
  if (type === 'array') {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]))
    }
  } else if (type === 'object') {
    for (var key in data) {
      obj[key] = deepClone(data[key])
    }
  }
  return obj
}

/**
 * 对象扁平化
 */
const flattenObj = (obj, result = {}) => {
  for (let key in obj) {
    if (obj[key] && typeof obj[key] == 'object') {
      flattenObj(obj[key], result)
    } else {
      result[key] = obj[key]
    }
  }
  return result
}

/**
 * 树结构转一维数组
 */
const getOneArr = (arr) => {
  let data = JSON.parse(JSON.stringify(arr))
  let newData = []
  const callback = (item) => {
      (item.children || (item.children = [])).map(v => {
          callback(v)
      })
      delete item.children
      newData.push(item)
  }
  data.map(v => callback(v))
  return newData
}

export default {
  deepClone,
  flattenObj,
  getOneArr
}