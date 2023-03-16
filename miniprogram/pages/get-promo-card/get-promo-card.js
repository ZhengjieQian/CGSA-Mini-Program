// pages/get-promo-card/get-promo-card.js
// 获取折扣卡页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    genderPickerIndex: '',
    genderPickerData: ['男', '女'],
    birthday: '',
    birthdayPickerStartDate: '1900-01-01',
    birthdayPickerEndDate: '2023-03-15'
  },
  genderPickerChanged(e) {
    this.setData({
      genderPickerIndex: e.detail.value
    });
  },
  birthdayPickerChanged(e) {
    this.setData({
      birthday: e.detail.value
    });
  }
});