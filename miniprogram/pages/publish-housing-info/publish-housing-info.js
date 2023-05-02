// pages/publish-housing-info/publish-housing-info.js
// 发布租房信息
Page({
  data: {
    addImage: '../../images/publish-housing-info/add_image.jpg',
    forwardArrow: '../../images/publish-second-hand/forward_arrow.jpg'
  },
  addImage() {
    console.log('添加图片');
  },
  inputPrice() {
    console.log('输入价格');
  },
  selectSource() {
    console.log('输入房源信息');
  },
  inputContactInfo() {
    console.log('输入联系方式');
  },
  postBtnTapped() {
    console.log('发布');
  }
});