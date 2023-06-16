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
    }).then(() => {
      this.getUserID();
    });
  },
  // 获取用户的 openID
  getUserID() {
    wx.cloud.callFunction({
      name: 'getUserID'
    }).then(res => {
      this.globalData.openID = res.result.openid;
    });
  }
});
