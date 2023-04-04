// pages/my-posts/my-posts.js
// 我的发布页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topTabPublishedIcon: '../../images/my-post/top_tab_published_active.jpg',
    topTabRemovedIcon: '../../images/my-post/top_tab_removed_inactive.jpg',
    noPostImage: '../../images/my-post/no_post.jpg'
  },
  postBtnTapped() {
    console.log('post');
  }
});