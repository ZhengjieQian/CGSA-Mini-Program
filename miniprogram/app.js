// app.js
App({
  globalData: {
    cloudID: 'cgsa-mini-program-9e3o2q71fdb4e3',
    appID: 'wx4c183d2aec2c73a4',
    openID: ''
  },
  onLaunch: function() {
    this.initCloudEnv();
  },
  // 初始化云环境
  initCloudEnv() {
    wx.cloud.init({
      env: this.globalData.cloudID,
    });
  },
  // 获取用户的 openID
  getUserOpenID() {
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: 'getUserID',
        success: res => {
          this.globalData.openID = res.result.openid;
          resolve(res.result.openid);
        },
        fail: err => {
          reject(err);
        }
      });
    });
  }
});