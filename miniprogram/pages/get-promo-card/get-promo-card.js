// pages/get-promo-card/get-promo-card.js
// 获取折扣卡页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    genderPickerIndex: '',
    gender: '',
    genders: ['男', '女'],
    email: '',
    phone: '',
    university: '',
    birthday: '',
    birthdayPickerStartDate: '1900-01-01',
    birthdayPickerEndDate: '2023-03-15'
  },
  nameInput(e) {
    this.setData({
      name: e.detail.value
    });
  },
  genderPickerChanged(e) {
    this.setData({
      genderPickerIndex: e.detail.value,
      gender: this.data.genders[e.detail.value]
    });
  },
  emailInput(e) {
    this.setData({
      email: e.detail.value
    });
  },
  phoneInput(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  universityInput(e) {
    this.setData({
      university: e.detail.value
    });
  },
  birthdayPickerChanged(e) {
    this.setData({
      birthday: e.detail.value
    });
  },
  submitInfo() {
    console.log(this.data);
  }
});