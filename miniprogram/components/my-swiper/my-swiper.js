// my-swiper.js
/**
 * my-swiper 包装了小程序的 swiper 组件，是主页的轮播图
 * images 数组存放的是首页轮播图的相对路径，所有图片的长宽比例需要保持一致
 * calSwiperHeight(e) 函数实现自适应调整轮播图大小，使得图片能在不同设备上完整显示出来
 */

Component({
  data: {
    images: ['../../images/swiper1.jpg', '../../images/swiper2.jpg', '../../images/swiper3.jpg'],
    swiperHeight: '',
    showIndicatorDots: true,
    autoPlay: true,
    interval: 5000,
    duration: 1300,
    imageMode: 'widthFixed'
  },
  methods: {
    calSwiperHeight(e) {
      let windowWidth = wx.getSystemInfoSync().windowWidth;
      let imageWidth = e.detail.width;
      let imageHeight = e.detail.height;
      let swiperHeight = windowWidth * imageHeight / imageWidth + 'px';
      this.setData({
        swiperHeight: swiperHeight
      });
    }
  }
});