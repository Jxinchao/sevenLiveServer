/*
 * pili.js
 * Copyright (C) 2018 disoul <disoul@DiSouldeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */
const PLService = require('./PLService');
const PILI = new PLService();

/**
 * 这里替换成七牛的 AK，SK
 */
PILI.setAuthorization(
  '3AHmd_r5twrPmtOIYu2MFQcdzvQdMdXIcFAM4p3J',
  '6J4ta3bmBhx8fg4LV_T3UfR-GkDhUU5i0RaZUrP3',
);

/**
 * 这里替换成自己直播云中的推流地址和播放地址
 */
PILI.setDomain({
  rtmpPublish: 'pili-publish.douyin.com',   // 推流
  rtmpPlay: 'pili-live-rtmp.douyin.com',    // 播流
});

/**
 * 这里替换成自己直播云中的空间名称
 */
PILI.setSpace('livesuper');

module.exports = PILI;
