// app.js
App({
  globalData: {
    cloudID: 'cgsa-mini-program-9e3o2q71fdb4e3',
    appID: 'wx4c183d2aec2c73a4',
    openID: '',
    date: '',
    avatarDefaultImage: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/avatar/avatar_default.png'
  },
  onLaunch: function() {
    this.initCloudEnv();
    this.getServerDate();
  },
  // 初始化云环境
  initCloudEnv() {
    wx.cloud.init({
      env: this.globalData.cloudID,
    });
  },
  // 获取服务器时间
  getServerDate() {
    wx.cloud.callFunction({
      name: 'getDate',
      success: res => {
        var utc_datetime = res.result;
        // 转换日期格式
        var T_pos = utc_datetime.indexOf('T');
        var dot_pos = utc_datetime.indexOf('.');
        var year_month_day = utc_datetime.substr(0, T_pos);
        var hour_minute_second = utc_datetime.substr(T_pos + 1, dot_pos - T_pos - 1);
        var new_datetime = year_month_day + " " + hour_minute_second;  // UTC YYYY-MM-DD HH:MM:SS
        // 转换时区为 PST
        var timestamp = new Date(Date.parse(new_datetime));
        timestamp = timestamp.getTime();
        timestamp = timestamp / 1000;
        timestamp = timestamp - 8 * 60 * 60;
        this.globalData.date = new Date(parseInt(timestamp) * 1000);
      }
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
  },
});