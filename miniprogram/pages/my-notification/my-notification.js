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
      link: 'tongzhi'
    }, {
      id: '1',
      title: '评论',
      image: '../../images/my-notification/comment.png',
      link: 'pinglun'
    }, {
      id: '2',
      title: '点赞',
      image: '../../images/my-notification/like.png',
      link: 'dianzan'
    }]
  },
  btnTapped(e) {
    console.log(this.data.buttons[e.currentTarget.dataset.id].link);
  }
})