// pages/my-posts/my-posts.js
// 我的发布页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    curTopTabIndex: 0,
    topTab: [{
      title: '发布的',
      image: '../../images/my-post/top_tab_published_inactive.jpg',
      activeImage: '../../images/my-post/top_tab_published_active.jpg'
    }, {
      title: '下架的',
      image: '../../images/my-post/top_tab_removed_inactive.jpg',
      activeImage: '../../images/my-post/top_tab_removed_active.jpg'
    }],
    curMidTabIndex: 0,
    midTab: ['校友说', '二手闲置', '租房信息'],
    noPostImage: '../../images/my-post/no_post.jpg'
  },
  changeTopTab(e) {
    let tappedTabIndex = e.currentTarget.dataset.currentIndex;
    if (this.data.curTopTabIndex != tappedTabIndex) {
      this.setData({
        curTopTabIndex: tappedTabIndex,
        curMidTabIndex: 0
      });
    }
  },
  changeMidTab(e) {
    let tappedTabIndex = e.currentTarget.dataset.currentIndex;
    if (this.data.curMidTabIndex != tappedTabIndex) {
      this.setData({
        curMidTabIndex: tappedTabIndex
      });
    }
  },
  postBtnTapped() {
    wx.navigateTo({
      url: '../../pages/publish-alumni-posts/publish-alumni-posts'
    })
  }
});