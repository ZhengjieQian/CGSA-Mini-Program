// pages/publish-second-hand/publish-second-hand.js
// 发布二手信息
var app = getApp();

Page({
  data: {
    addImage: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/second-hand-market/add_image.jpg',
    addImageDefault: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/second-hand-market/add_image_default.jpg',
    addImageCancel: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/second-hand-market/add_image_cancel.png',
    forwardArrow: 'cloud://cgsa-mini-program-9e3o2q71fdb4e3.6367-cgsa-mini-program-9e3o2q71fdb4e3-1315632320/images/second-hand-market/forward_arrow.jpg',
    detailWidgets: [{
      title: '价格',
      placeholder: '请填写价格',
      inputType: 'number',
      method: 'inputPrice'
    }, {
      title: '手机号',
      placeholder: '请填写美国手机号（选填）',
      inputType: 'text',
      method: 'inputPhone'
    }, {
      title: '微信号',
      placeholder: '请填写微信号（选填）',
      inputType: 'text',
      method: 'inputWeChat'
    }, {
      title: '地理位置',
      placeholder: '请填写所在位置',
      inputType: 'text',
      method: 'inputLocation'
    }],
    categories: ['电子产品', '交通工具', '家具家电', '厨房用品', '书籍教具', 
                 '美妆服饰', '宠物用品', '汽车用品', '文体器材', '票务卡券', '其他物品'],
    pickerIndex: '',
    images: [],
    imageCloudPaths: [],
    imageUploadLimit: 9,  // 用户一次性可上传图片个数
    title: '',
    description: '',
    isNew: false,
    price: '',
    phone: '',
    wechat: '',
    location: ''
  },
  // 页面生命周期 onLoad
  onLoad: function() {
    if(!app.globalData.openID) {  // 如果没有拿到用户的 openID，调用 app.js 的方法获取用户的 openID
      app.getUserOpenID();
    }
  },
  // 用户点击添加图片
  addImage() {
    if (this.data.images.length < this.data.imageUploadLimit) {  // 最多上传指定张数的图片
      wx.chooseMedia({
        count: 9,
        mediaType: ['image']
      }).then((res) => {
        let images = JSON.parse(JSON.stringify(this.data.images));  // 复制临时图片数组
        for (let i = 0; i < res.tempFiles.length; i++) {
          if (images.length < this.data.imageUploadLimit) {
            images.push(res.tempFiles[i].tempFilePath);  // 将未超出上传限制的图片加入临时数组，其余图片舍弃
          } else {
            break;
          }
        }
        this.setData({
          images: images
        });
      }).catch((err) => {
        console.log(err);
      });
    } else {
      wx.showToast({
        title: '您最多可上传 ' + this.data.imageUploadLimit + ' 张图片',
        icon: 'none'
      })
    }
  },
  // 用户点击预览图片
  previewImage(e) {
    wx.previewImage({
      urls: this.data.images,
      current: this.data.images[e.currentTarget.dataset.index]
    })
  },
  // 用户点击取消图片
  cancelImage(e) {
    let images = JSON.parse(JSON.stringify(this.data.images));  // 复制临时图片数组
    images.splice(e.currentTarget.dataset.index, 1);  // 删除数组中指定位置的元素
    this.setData({
      images: images
    });
  },
  // 用户输入标题
  inputTitle(e) {
    this.setData({
      title: e.detail.value
    });
  },
  // 用户输入商品描述
  inputDescription(e) {
    this.setData({
      description: e.detail.value
    });
  },
  // 用户点击商品是否全新的按钮
  checkboxIsNewTapped() {
    this.setData({
      isNew: !this.data.isNew
    });
  },
  // 用户选择商品类别
  selectCategory(e) {
    this.setData({
      pickerIndex: e.detail.value
    });
  },
  // 用户输入价格
  inputPrice(e) {
    this.setData({
      price: e.detail.value
    });
  },
  // 用户输入手机号
  inputPhone(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  // 用户输入微信号
  inputWeChat(e) {
    this.setData({
      wechat: e.detail.value
    });
  },
  // 用户输入地理位置
  inputLocation(e) {
    this.setData({
      location: e.detail.value
    });
  },
  // 用户点击发布按钮，先上传图片
  postBtnTapped() {
    wx.showLoading({
      title: '正在发布中'
    });
    var promise = Promise.all(this.data.images.map((imgTempUrl, index) => {
      return new Promise(function (resolve, reject) {
        let imgNameArr = imgTempUrl.split('/');
        let imgName = imgNameArr[imgNameArr.length - 1];
        wx.cloud.uploadFile({
          cloudPath: './images/second-hand-market-product/' + app.globalData.openID + '_' + imgName,
          filePath: imgTempUrl,
          success: res => {
            console.log('正在上传第' + index + '张图片...');
            resolve(res.fileID);
          },
          fail: err => {
            console.log(err);
            reject(new Error('Failed to upload file'));
          }
        });
      });
    }));
    promise.then(res => {
      this.setData({
        imageCloudPaths: res
      }, () => {
        this.uploadServerDB();
      });
    }).catch(err => {
      console.log(err);
    });
  },
  // 将整理好的信息上传到数据库
  uploadServerDB() {
    const productDB = wx.cloud.database().collection('second_hand_product');
    productDB.add({
      data: {
        comments: [],
        date: app.globalData.date,
        description: this.data.description,
        images: this.data.imageCloudPaths,
        isNew: this.data.isNew,
        likes: 0,
        location: this.data.location,
        phone: this.data.phone,
        price: this.data.price,
        tag: this.data.categories[this.data.pickerIndex],
        title: this.data.title,
        views: 0,
        wechat: this.data.wechat
      }
    }).then(() => {
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 3000
      });
    }).catch(err => {
      console.log(err);
    });
    console.log('');
    console.log('============================ 上传数据开始 ============================');
    console.log('_openid: ' + app.globalData.openID);
    console.log('comments: ' + []);
    console.log('date: ' + app.globalData.date);
    console.log('description: ' + this.data.description);
    console.log('images: ');
    console.log(this.data.imageCloudPaths);
    console.log('isNew: ' + this.data.isNew);
    console.log('likes: 0');
    console.log('location: ' + this.data.location);
    console.log('phone: ' + this.data.phone);
    console.log('price: ' + this.data.price);
    console.log('tag: ' + this.data.categories[this.data.pickerIndex]);
    console.log('title: ' + this.data.title);
    console.log('views: 0');
    console.log('wechat: ' + this.data.wechat);
    console.log('============================ 上传数据结束 ============================');
    console.log('');
  }
})