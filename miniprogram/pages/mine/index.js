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
    avatarDefaultImage: '../../images/mine/avatar_default.png'
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
  }
});