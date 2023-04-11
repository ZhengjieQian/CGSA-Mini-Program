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
    midTab: [{
      title: '校友说',
      link: '../../pages/publish-alumni-posts/publish-alumni-posts'
    }, {
      title: '二手闲置',
      link: '../../pages/publish-second-hand/publish-second-hand'
    }, {
      title: '租房信息',
      link: '../../pages/publish-housing-info/publish-housing-info'
    }],
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
  postBtnTapped(e) {
    wx.navigateTo({
      url: this.data.midTab[e.currentTarget.dataset.currentIndex].link
    })
  }
});