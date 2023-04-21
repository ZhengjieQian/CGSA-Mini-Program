// pages/topic-selection/topic-selection.js
// 发布校友说的选择话题页面
Page({
  data: {
    searchIcon: '../../images/topic-selection/search_icon.jpg',
    cancelIcon: '../../images/topic-selection/cancel_icon.jpg',
    topics: ['表白墙', '吐槽', '曝光', '学术交流']
  },
  cancelSearch() {
    console.log('取消')
  },
  topicSelected(e) {
    console.log(this.data.topics[e.currentTarget.dataset.topicIndex]);
  }
});