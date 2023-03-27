// pages/promo-card/promo-card.js
// 折扣卡显示页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showIndicatorDots: true,
    indicatorColor: '#fff6eb',
    indicatorActiveColor: '#ffffff',
    autoPlay: true,
    interval: 5000,
    duration: 1300,
    images: [
      '../../images/index-swiper/index-swiper1.jpg',
      '../../images/index-swiper/index-swiper2.jpg',
      '../../images/index-swiper/index-swiper3.jpg',
      '../../images/index-swiper/index-swiper4.jpg'
    ],
  },
});