// pages/mine/index.js
// 用户个人信息页面
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    promotionCardBackgroundImage: '../../images/mine/promotion_card_background.jpg',
    avatarDefaultImage: '../../images/mine/avatar_default.png',
    avatarUrl: '',
    nickname: '',
    widgets: [{
      title: '我的消息',
      image: '../../images/mine/notification.jpg',
      link: '../../pages/my-notification/my-notification'
    }, {
      title: '我的发布',
      image: '../../images/mine/my_post.jpg',
      link: '../../pages/my-posts/my-posts'
    }, {
      title: '社团纳新',
      image: '../../images/mine/association_recruit.jpg',
      link: '../../pages/association-recruit/association-recruit'
    }, {
      title: '联系我们',
      image: '../../images/mine/contact_us.jpg',
      link: '../../pages/contact-us/contact-us'
    }]
  },
  // 页面生命周期 onLoad
  onLoad: function() {
    // 如果没有用户的 openID，调用 app.js 的方法获取用户的 openID
    if(!app.globalData.openID) {
      app.getUserOpenID().then(openID => {
        this.initUserProfile(openID);
      }).catch(err => {
        console.log(err);
      });
    } else {
      this.initUserProfile(app.globalData.openID);
    }
  },
  // 加载此 openID 关联的头像和昵称，如果是新用户，使用默认的头像和昵称
  initUserProfile(openID) {
    console.log('已获取用户openID：' + openID);
  },
  // 用户选择头像
  onChooseAvatar(e) {
    this.setData({
      avatarUrl: e.detail.avatarUrl
    });
  },
  // 用户点击更新信息
  onUpdateUserInfoTapped(e) {
    if (!this.data.avatarUrl || !e.detail.value.nickname) {
      wx.showToast({
        title: '请选择头像并填写昵称',
        icon: 'none',
        duration: 3000
      });
    } else {
      this.setData({
        nickname: e.detail.value.nickname
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