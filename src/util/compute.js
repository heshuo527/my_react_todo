/**
 * 多维度数组拍平
 * @param {*} arr 
 * @returns 
 */
export const arrFlat = (arr) => {
  const toggle = arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? arrFlat(item) : item)
  }, [])
  return toggle;
};

/**
 * 计算数组任意组合是否符合整除条件
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */
export const solve = (arr, target) => {
  // 辅助函数，用于检查数组中的某一项或多项的和是否能被目标整数整除
  const checkSumDivisible = (index, sum) => {
    // 如果和已经能被目标整数整除，则返回 true
    if (sum % target === 0) {
      return true;
    }
    // 如果已经遍历到数组的最后一项，且和仍然不能被目标整数整除，则返回 false
    if (index === arr.length) {
      return false;
    }
    // 对于当前项，有两种选择：包含当前项或不包含当前项 
    // 如果包含当前项，递归调用 checkSumDivisible，并将 sum 加上当前项的值
    // 如果不包含当前项，递归调用 checkSumDivisible，继续检查下一项
    return checkSumDivisible(index + 1, sum + arr[index]) || checkSumDivisible(index + 1, sum);
  };

  // 从数组的第一项开始检查，初始和为 0
  return checkSumDivisible(0, 0);
};
