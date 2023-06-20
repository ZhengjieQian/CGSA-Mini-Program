// pages/mine/index.js
// 用户个人信息页面
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    promotionCardBackgroundImage: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/mine/promotion_card_background.jpg',
    avatarDefaultImage: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/avatar/avatar_default.png',
    avatarUrl: '',
    nickname: '',
    widgets: [{
      title: '我的消息',
      image: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/mine/notification.jpg',
      link: '../../pages/my-notification/my-notification'
    }, {
      title: '我的发布',
      image: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/mine/my_post.jpg',
      link: '../../pages/my-posts/my-posts'
    }, {
      title: '社团纳新',
      image: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/mine/association_recruit.jpg',
      link: '../../pages/association-recruit/association-recruit'
    }, {
      title: '联系我们',
      image: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/mine/contact_us.jpg',
      link: '../../pages/contact-us/contact-us'
    }]
  },
  // 页面生命周期 onLoad
  onLoad: function() {
    if(!app.globalData.openID) {  // 如果没有拿到用户的 openID，调用 app.js 的方法获取用户的 openID
      app.getUserOpenID().then(openID => {
        this.initUserProfile(openID);
      });
    } else {  // 如果已经拿到 openID，直接进入下一步
      this.initUserProfile(app.globalData.openID);
    }
  },
  // 拿到 openID 之后立刻加载此 openID 关联的头像和昵称
  initUserProfile(openID) {
    const userProfileDB = wx.cloud.database().collection('user_profile');
    userProfileDB.where({
      _openid: openID
    }).get().then(res => {
      if (res.data.length == 0) {  // 新用户，在数据库中增加一条用户信息，使用默认的头像和昵称
        userProfileDB.add({
          data: {
            nickname: '',
            avatarUrl: this.data.avatarDefaultImage
          }
        });
      } else {  // 老用户，加载数据库中的头像和昵称
        this.setData({
          nickname: res.data[0].nickname,
          avatarUrl: res.data[0].avatarUrl
        });
      }
    });
  },
  // 用户选择头像
  onChooseAvatar(e) {
    this.setData({
      avatarUrl: e.detail.avatarUrl
    });
  },
  // 用户输入昵称
  onNicknameInput(e) {
    this.setData({
      nickname: e.detail.value
    });
  },
  // 用户点击更新信息
  onUpdateUserInfoTapped(e) {
    if (!this.data.avatarUrl || !e.detail.value.nickname) {  // 头像或昵称没有补全，提示用户完成
      wx.showToast({
        title: '请选择头像并填写昵称',
        icon: 'none',
        duration: 3000
      });
    } else {  // 更新数据库中该用户的头像和昵称，删除原头像并上传新头像
      this.setData({
        nickname: e.detail.value.nickname
      }, () => {
        const userProfileDB = wx.cloud.database().collection('user_profile');
        userProfileDB.where({  // 根据 openid 查询用户信息
          _openid: app.globalData.openID
        }).get().then(searchRes => {
          let oldAvatarUrl = searchRes.data[0].avatarUrl;
          if (this.data.avatarUrl != oldAvatarUrl) {  // 如果更换了头像，需替换原头像
            wx.cloud.uploadFile({  // 上传头像，加上时间戳区分不同文件，防止由于系统缓存导致的头像更新延迟
              cloudPath: './images/avatar/' + app.globalData.openID + '_' + (new Date().valueOf()) + '.jpeg',
              filePath: this.data.avatarUrl
            }).then(uploadRes => {
              userProfileDB.doc(searchRes.data[0]._id).update({  // 更新昵称和头像的 fileID
                data: {
                  nickname: this.data.nickname,
                  avatarUrl: uploadRes.fileID
                }
              }).then(() => {
                if (oldAvatarUrl != this.data.avatarDefaultImage) {  // 如果之前用的不是默认头像，删除之前的头像
                  wx.cloud.deleteFile({
                    fileList: [oldAvatarUrl]
                  }).then(() => {
                    wx.showToast({
                      title: '替换+删除',
                      icon: 'success',
                      duration: 3000
                    });
                  });
                } else {
                  wx.showToast({
                    title: '替换',
                    icon: 'success',
                    duration: 3000
                  });
                }
              });
            });
          } else {  // 如果没有更换头像，只需要更新昵称即可
            userProfileDB.doc(searchRes.data[0]._id).update({
              data: {
                nickname: this.data.nickname
              }
            }).then(() => {
              wx.showToast({
                title: '未替换',
                icon: 'success',
                duration: 3000
              });
            });
          }
        });
      });
    }
  },
  // 用户点击领取折扣卡按钮
  onClaimCardTapped() {
    wx.navigateTo({
      url: '../../pages/get-promo-card/get-promo-card'
    });
  },
  // 用户点击查看折扣卡按钮
  onShowPromoCardTapped() {
    wx.navigateTo({
      url: '../../pages/promo-card/promo-card'
    });
  },
  // 跳转到指定页面
  navigate(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.link
    });
  }
});