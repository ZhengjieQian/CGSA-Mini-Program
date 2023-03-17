// pages/get-promo-card/get-promo-card.js
// 获取折扣卡页面
Page({
  /**
   * 页面的初始数据
   * name 姓名
   * genderPickerIndex 性别选择器的当前下标
   * gender 性别
   * genders 性别选择器的可选内容
   * email 邮箱
   * phone 电话
   * university 就读学校
   * birthday 生日
   * birthdayPickerStartDate 生日选择器的起始可选时间
   * birthdayPickerEndDate 生日选择器的终止可选时间
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
  /**
   * 页面的方法
   * nameInput(e) 当用户在姓名输入框内输入内容时触发此方法
   * genderPickerChanged(e) 当用户改变性别选择器的当前选项时触发此方法
   * emailInput(e), phoneInput(e), universityInput(e), birthdayPickerChanged(e) 与上述方法类似
   * submitInfo() 当用户点击提交按钮时触发此方法
   */
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