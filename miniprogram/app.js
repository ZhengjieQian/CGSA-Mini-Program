// app.js
App({
  globalData: {
    cloudID: 'cgsa-mini-program-9e3o2q71fdb4e3',
    appID: 'wx4c183d2aec2c73a4',
    openID: '',
    avatarDefaultImage: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/avatar/avatar_default.png'
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
          this.globalData.openID = res.result.openid;  // 设置全局 openid
          const userProfileDB = wx.cloud.database().collection('user_profile');
          userProfileDB.where({
            _openid: this.globalData.openID  // 根据 openid 查询是否为新用户
          }).get().then(searchRes => {
            if (searchRes.data.length == 0) {  // 新用户，设置默认头像和昵称，完成后返回 openid
              userProfileDB.add({
                data: {
                  nickname: '',
                  avatarUrl: this.globalData.avatarDefaultImage
                }
              }).then(() => {
                resolve(this.globalData.openID);  // 创建默认用户画像后返回 openid
              });
            } else {  // 老用户，直接返回 openid
              resolve(this.globalData.openID);
            }
          });
        },
        fail: err => {
          reject(err);
        }
      });
    });
  }
});