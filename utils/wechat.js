/*
 * wechat.js
 * Copyright (C) 2018 disoul <disoul@DiSouldeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */
const axios = require('axios');
const WXBizDataCrypt = require('../aes/WXBizDataCrypt');

const WECHAT_APPID = 'wxdad8388e59f89655';
const WECHAT_APPSECRET = 'e1584395531be02ff00050492c57330a';

/**
 * 获取微信信息
 *
 * @param {string} code wx.login 得到的code
 * @returns {{openid: string, session_key: string, unionid: string}}
 */
exports.getUserInfo = async function(code) {
  const URL = `https://api.weixin.qq.com/sns/jscode2session?appid=${WECHAT_APPID}&secret=${WECHAT_APPSECRET}&js_code=${code}&grant_type=authorization_code`;
  try {
    const res = await axios.get(URL);
    const data = res.data;
    return data;
  } catch(e) {
    throw new Error('get Session key error: ', e);
  }
}

/**
 * 解密微信加密数据
 *
 * @param {string} iv aes cbc iv
 * @param {string} sessionKey 之前通过登陆认证拿到的session
 * @param {string} encryptedData
 * @returns {any}
 */
exports.decryptData = function(iv, sessionKey, encryptedData) {
  const pc = new WXBizDataCrypt(WECHAT_APPID, sessionKey);
  return pc.decryptData(encryptedData, iv);
}
