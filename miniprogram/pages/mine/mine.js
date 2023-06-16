// pages/mine/index.js
// 用户个人信息页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openID: '',
    promotionCardBackgroundImage: '../../images/mine/promotion_card_background.jpg',
    avatarDefaultImage: '../../images/mine/avatar_default.png',
    avatarUrl: '',
    nickname: '',
    userLocation: '加利福尼亚州',
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
  onLoad: function() {
    console.log(getApp().globalData.openID)
  },
  onChooseAvatar(e) {
    let avatarUrl = e.detail.avatarUrl;
    this.setData({
      avatarUrl: avatarUrl
    });
  },
  nicknameInput(e) {
    console.log(e.detail.value);
  },
  showPromoCard() {
    if (this.data.nickname && this.data.avatarUrl) {
      wx.navigateTo({
        url: '../../pages/promo-card/promo-card'
      });
    }
  },
  claimCard() {
    wx.navigateTo({
      url: '../../pages/get-promo-card/get-promo-card'
    });
  },
  navigate(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.link
    });
  }
});