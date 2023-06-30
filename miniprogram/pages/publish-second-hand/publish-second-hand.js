// pages/publish-second-hand/publish-second-hand.js
// 发布二手信息
var app = getApp();

Page({
  data: {
    addImage: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/second-hand-market/add_image.jpg',
    addImageDefault: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/second-hand-market/add_image_default.jpg',
    addImageCancel: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/second-hand-market/add_image_cancel.png',
    images: ['1','2','3','4','5','6','7','8','9'],
    forwardArrow: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/second-hand-market/forward_arrow.jpg',
    detailWidgets: [{
      title: '分类',
      subtitle: '选择分类',
      method: 'selectCategory'
    }, {
      title: '价格',
      subtitle: '请填写价格',
      method: 'inputPrice'
    }, {
      title: '联系方式',
      subtitle: '请填写联系方式',
      method: 'inputContactInfo'
    }, {
      title: '地理位置',
      subtitle: '请填写所在位置',
      method: 'inputLocation'
    }]
  },
  // 页面生命周期 onLoad
  onLoad: function() {
    if(!app.globalData.openID) {  // 如果没有拿到用户的 openID，调用 app.js 的方法获取用户的 openID
      app.getUserOpenID();
    }
  },
  addImage() {
    console.log('添加图片');
  },
  previewImage(e) {
    console.log('预览图片：' + this.data.images[e.currentTarget.dataset.index]);
  },
  cancelImage(e) {
    console.log('取消图片：' + this.data.images[e.currentTarget.dataset.index]);
  },
  selectCategory() {
    console.log('选择类别');
  },
  inputPrice() {
    console.log('输入价格');
  },
  inputContactInfo() {
    console.log('输入联系方式');
  },
  inputLocation() {
    console.log('输入地理位置');
  },
  postBtnTapped() {
    console.log('发布');
  }
})