// components/index-swiper/index-swiper.js
// 主页轮播图
Component({
  /**
   * 组件的初始数据
   * images 数组存放的是首页轮播图的相对路径
   * swiperHeight 是组件中 swiper 的高度，可以自定义或自动计算
   * autoCalSwiperHeight 是否自动计算 swiper 的高度
   * showIndicatorDots 是否显示轮播图下方的几个小圆点
   * autoPlay 是否自动播放轮播图
   * interval 每个轮播图显示的时间，单位毫秒(ms)
   * duration 轮播图之间切换动画的时间，单位毫秒(ms)
   * imageMode 轮播图中图像的显示模式
   */
  data: {
    images: [
      '../../images/index-swiper/index-swiper1.jpg',
      '../../images/index-swiper/index-swiper2.jpg',
      '../../images/index-swiper/index-swiper3.jpg',
      '../../images/index-swiper/index-swiper4.jpg'
    ],
    swiperHeight: '350rpx',
    autoCalSwiperHeight: false,
    showIndicatorDots: true,
    autoPlay: true,
    interval: 5000,
    duration: 1300,
    imageMode: 'widthFixed'
  },

  /**
   * 组件的方法列表
   * calSwiperHeight(e) 函数实现自适应调整轮播图大小，使得图片能在不同设备上完整显示出来
   */
  methods: {
    calSwiperHeight(e) {
      if (this.data.autoCalSwiperHeight) {
        let windowWidth = wx.getSystemInfoSync().windowWidth;
        let imageWidth = e.detail.width;
        let imageHeight = e.detail.height;
        let swiperHeight = windowWidth * imageHeight / imageWidth + 'px';
        this.setData({
          swiperHeight: swiperHeight
        });
      }
    }
  }
});