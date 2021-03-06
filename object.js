/**
 * 对象深拷贝
 */
 export const deepClone = data => {
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
export const flattenObj = (obj, result = {}) => {
  for (let key in obj) {
    if (obj[key] && typeof obj[key] == 'object') {
      flattenObj(obj[key], result)
    } else {
      result[key] = obj[key]
    }
  }
  return result
}