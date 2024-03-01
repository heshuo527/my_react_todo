/**
 * ajax请求
 * @param {*} url 
 * @param {*} methods 
 * @param {*} data 
 */
function ajax(url, methods, data = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(methods, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status <= 300) {
          try {
            const responseText = JSON.parse(xhr.responseText);
            resolve(responseText)
          } catch (error) {
            reject(new Error(`文件访问失败  ${xhr.status}`))
          }
        } else {
          reject(new Error(`Request failed with status ${xhr.status}`));
        }
      }
    }
    xhr.onerror = function () {
      reject(new Error('网络错误'))
    }
    if (data !== null) {
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
  })
}

export default ajax;