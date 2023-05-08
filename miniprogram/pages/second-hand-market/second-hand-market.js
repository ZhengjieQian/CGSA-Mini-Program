// pages/second-hand-market/second-hand-market.js
// 二手市场
Page({
  data: {
    searchIcon: '../../images/second-hand-market/search_icon.jpg',
    filterItemIcon: '../../images/second-hand-market/filter_item_icon.jpg',
    tags: ['全部', '电子产品', '交通工具', '家具家电', '厨房用品', '学习资料'],
    activeTagIndex: 0,
    products: [{
      image: '../../images/second-hand-market/product_1.jpg',
      title: '红色 高颜值自行车 骨折随缘出',
      price: '60',
      views: '72',
      avatar: '../../images/second-hand-market/product_1_avatar.jpg',
      username: '徐明玺Aaron',
      location: 'Los Angeles',
      date: '04-26'
    }, {
      image: '../../images/second-hand-market/product_1.jpg',
      title: '红色 高颜值自行车 骨折随缘出',
      price: '60',
      views: '72',
      avatar: '../../images/second-hand-market/product_1_avatar.jpg',
      username: '徐明玺Aaron',
      location: 'Los Angeles',
      date: '04-26'
    }, {
      image: '../../images/second-hand-market/product_1.jpg',
      title: '红色 高颜值自行车 骨折随缘出',
      price: '60',
      views: '72',
      avatar: '../../images/second-hand-market/product_1_avatar.jpg',
      username: '徐明玺Aaron',
      location: 'Los Angeles',
      date: '04-26'
    }, {
      image: '../../images/second-hand-market/product_1.jpg',
      title: '红色 高颜值自行车 骨折随缘出',
      price: '60',
      views: '72',
      avatar: '../../images/second-hand-market/product_1_avatar.jpg',
      username: '徐明玺Aaron',
      location: 'Los Angeles',
      date: '04-26'
    }, {
      image: '../../images/second-hand-market/product_1.jpg',
      title: '红色 高颜值自行车 骨折随缘出',
      price: '60',
      views: '72',
      avatar: '../../images/second-hand-market/product_1_avatar.jpg',
      username: '徐明玺Aaron',
      location: 'Los Angeles',
      date: '04-26'
    }, {
      image: '../../images/second-hand-market/product_1.jpg',
      title: '红色 高颜值自行车 骨折随缘出',
      price: '60',
      views: '72',
      avatar: '../../images/second-hand-market/product_1_avatar.jpg',
      username: '徐明玺Aaron',
      location: 'Los Angeles',
      date: '04-26'
    }]
  },
  changeTag(e) {
    this.setData({
      activeTagIndex: e.currentTarget.dataset.currentIndex
    });
  }
});