/**
 * 数组扁平化
 * @param {Array} arr 需要扁平化的数组
 * @returns {Array} 扁平化后的数组
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
 * @param {Array} items 扁平化的数组，包含id和pid字段
 * @returns {Array} 树结构数组
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
 * @param {Array} arr1 第一个数组
 * @param {Array} arr2 第二个数组
 * @returns {Array} 两个数组的交集
 */
const similarity = (arr1, arr2) => arr1.filter(v => arr2.includes(v))

/**
 * 数组中某元素出现的次数
 * @param {Array} arr 要搜索的数组
 * @param {*} value 要查找的值
 * @returns {number} 该值在数组中出现的次数
 */
const countOccurrences = (arr, value) => {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}

// Named exports
export { similarity, arrayToTree, flattenArr, countOccurrences }

// Default export for backwards compatibility
export default {
  similarity,
  arrayToTree,
  flattenArr,
  countOccurrences
}
