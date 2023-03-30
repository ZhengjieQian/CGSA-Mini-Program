// pages/bind-promo-card/bind-promo-card.js
// 绑定折扣卡页面
Page({
  /**
   * 页面的初始数据
   * cardNo 卡号
   * password 密码
   */
  data: {
    cardNo: '',
    password: ''
  },
  /**
   * 页面的方法
   * cardNoInput(e) 获取用户输入的卡号并更新到 cardNo，passwordInput(e) 同理
   * submitInfo() 提交当前页面信息
   */
  cardNoInput(e) {
    this.setData({
      cardNo: e.detail.value
    });
  },
  passwordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },
  submitInfo() {
    console.log(this.data);
  }
});