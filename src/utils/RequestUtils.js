import axios from 'axios';
import dayjs from 'dayjs';
import EncryptUtils from './EncryptUtils';

const baseUrl = 'http://work.flybycloud.com:8013/h5';


const getAuthToken = () => {
  return '';
}

const reqHeaders = {
  'Content-Type': 'application/json',
  'appId': '111',
  'appVersion': '1.0.1',
  'appType': '0',
}

const formHeaders = {
  'Content-Type': 'multipart/form-data',
  'appId': '111',
  'appVersion': '1.0.1',
  'appType': '0',
}

/**
 * 时间戳
 */
const getTs = () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 签名
 * @param {接口名} api 
 * @param {请求参数} params 
 */
const getSign = (api, params) => {
  let sign = api
  let allParams = params ? Object.assign(params, reqHeaders) : reqHeaders
  for (let key in allParams) {
    if ((allParams[key] instanceof Object) || (allParams[key] instanceof Array)) {
      allParams[key] = ''
    }
    let value = key + '=' + allParams[key]
    sign += value
  }
  return EncryptUtils.md5(sign)
}

export default class RequestUtils {
  /**
   * 
   * @param {接口} api 
   * @param {参数} params 
   * @param {请求类型} reqType 
   */
  static fetch(api, params, reqType) {
    let url = baseUrl + encodeURI(api)
    console.log('请求路径：' + url)
    let method = reqType || 'get';
    reqHeaders.ts = getTs();
    reqHeaders.sign = getSign();
    reqHeaders.token = getAuthToken();
    return new Promise((resolve, reject) => {
      axios({
        method: method,
        url: url,
        headers: reqHeaders,
        data: method === 'post' ? params : {},
        params: method === 'get' ? params : {}
      })
        .then(response => response.data)
        .then(data => {
          console.debug('返回', JSON.stringify(data))
          if (data.errorCode !== null && Number(data.errorCode) === 0) {//正常返回
            resolve(data)
          } else {
            const errorInfo = { errorCode: Number(data.errorCode), errorMsg: data.errorMsg }
            if (errorInfo.errorCode === 8003 || errorInfo.errorCode === 8004) {
            } else {
              reject(errorInfo)
            }
          }
        })
        .catch(error => {
          console.log(error)
          reject({ errorCode: 99999, errorMsg: '系统网络错误' })
        })
    })
  }

  /**
 * 
 * @param {接口} api 
 * @param {参数} params 
 */
  static upload(api, params) {
    let url = baseUrl + encodeURI(api)
    formHeaders.ts = getTs();
    formHeaders.sign = getSign();
    formHeaders.token = getAuthToken();
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        headers: formHeaders,
        data: params,
        params: {}
      })
        .then(response => response.data)
        .then(data => {
          console.log('返回', JSON.stringify(data))
          if (data.errorCode !== null && Number(data.errorCode) === 0) {//正常返回
            resolve(data)
          } else {
            const errorInfo = { errorCode: Number(data.errorCode), errorMsg: data.errorMsg }
            reject(errorInfo)
          }
        })
        .catch(error => {
          console.log(error)
          reject({ errorCode: 99999, errorMsg: '系统网络错误' })
        })
    })
  }

  /**
   * 获取URL字段参数
   * @param {字段} name 
   */
  static getQueryString(name) {
    let url = window.location.search;
    console.log('------------' + url);
    let obj = {};
    if (url.indexOf("?") !== -1) {
      let str = url.substr(1);
      let strs = str.split("&");
      for (let i = 0; i < strs.length; i++) {
        obj[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
      console.log('-----------' + name + obj[name]);
      return obj[name];
    }
    return null;
  }
}

