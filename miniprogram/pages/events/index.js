// pages/events/index.js
// 活动页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: ['最新活动', '往期活动'],
    curTabIndex: 0
  },
  changeTab(e) {
    if (this.data.curTabIndex != e.currentTarget.dataset.currentIndex) {
      this.setData({
        curTabIndex: e.currentTarget.dataset.currentIndex
      });
    }
  }
});