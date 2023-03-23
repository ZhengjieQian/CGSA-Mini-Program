// pages/my-notification/my-notification.js
// 用户消息页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    buttons: [{
      id: '0',
      title: '通知',
      image: '../../images/my-notification/notification.png',
      link: '../../pages/my-notification-broadcast/my-notification-broadcast'
    }, {
      id: '1',
      title: '评论',
      image: '../../images/my-notification/comment.png',
      link: '../../pages/my-notification-comment/my-notification-comment'
    }, {
      id: '2',
      title: '点赞',
      image: '../../images/my-notification/like.png',
      link: 'dianzan'
    }],
    noActivityImage: '../../images/my-notification/no_activity.jpg'
  },
  btnTapped(e) {
    wx.navigateTo({
      url: this.data.buttons[e.currentTarget.dataset.id].link
    });
  }
})