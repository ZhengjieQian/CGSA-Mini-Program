// pages/mine/index.js
// 用户个人信息页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    promotionCardBackgroundImage: '../../images/mine/promotion_card_background.jpg',
    avatarDefaultImage: '../../images/mine/avatar_default.png',
    userLocation: '加利福尼亚州',
    widgets: [{
      title: '我的发布',
      image: '../../images/mine/my_post.jpg'
    }, {
      title: '社团纳新',
      image: '../../images/mine/association_recruit.jpg'
    }, {
      title: '联系我们',
      image: '../../images/mine/contact_us.jpg'
    }]
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      }
    });
  },
  claimCard() {
    console.log('获取折扣卡');
  }
});