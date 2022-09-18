/**
 * 数组扁平化
 */
 const flattenArr = arr => {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArr(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

/**
 * 扁平化数组转树结构 （导航栏常用）
 */
 const arrayToTree = items => {
  const result = [] // 存放结果集
  const itemMap = {} //
  for (const item of items) {
    const id = item.id
    const pid = item.pid
    if (!itemMap[id]) {
      itemMap[id] = {
        children: []
      }
    }
    itemMap[id] = {
      ...item,
      children: itemMap[id]['children']
    }
    const treeItem = itemMap[id]
    if (pid === 0) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
}

/**
 * 数组交集
 * @param { array} arr1
 * @param { array } arr2
 */
 const similarity = (arr1, arr2) => arr1.filter(v => arr2.includes(v))


/**
 * 数组中某元素出现的次数
 * @param { array } arr
 * @param {*} value
 */
 export function countOccurrences(arr, value) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}

export default {
  similarity,
  arrayToTree,
  flattenArr
}
