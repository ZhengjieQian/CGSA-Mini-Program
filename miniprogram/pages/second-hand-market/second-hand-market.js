// pages/second-hand-market/second-hand-market.js
// 二手市场
Page({
  data: {
    searchIcon: '../../images/second-hand-market/search_icon.jpg',
    filterItemIcon: '../../images/second-hand-market/filter_item_icon.jpg',
    tags: ['全部', '电子产品', '交通工具', '家具家电', '厨房用品', '学习资料'],
    activeTagIndex: 0
  },
  changeTag(e) {
    this.setData({
      activeTagIndex: e.currentTarget.dataset.currentIndex
    });
  }
});