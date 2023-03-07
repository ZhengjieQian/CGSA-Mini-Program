// components/index-button-panel/index-button-panel.js
// 主页的按钮组
Component({
  /**
   * 组件的初始数据
   * row1Buttons 第一行按钮的信息
   * row2Buttons 第二行按钮的信息
   *   title 是按钮的文本
   *   image 是按钮的图片，需要用方形图片
   *   link 是按钮跳转的链接
   */
  data: {
    row1Buttons: [{
      title: '二手闲置',
      image: '../../images/index-button-panel/index-button-panel1.jpg',
      link: '../../pages/second-hand-market/second-hand-market'
    }, {
      title: '租房信息',
      image: '../../images/index-button-panel/index-button-panel2.jpg',
      link: '../../pages/housing-market/housing-market'
    }, {
      title: '话题讨论',
      image: '../../images/index-button-panel/index-button-panel3.jpg',
      link: '../../pages/forum/forum'
    }, {
      title: '新生手册',
      image: '../../images/index-button-panel/index-button-panel4.jpg',
      link: '../../pages/new-student-handbook/new-student-handbook'
    }],
    row2Buttons: [{
      title: '官方社群',
      image: '../../images/index-button-panel/index-button-panel5.jpg',
      link: '../../pages/official-community/official-community'
    }, {
      title: '带逛校园',
      image: '../../images/index-button-panel/index-button-panel6.jpg',
      link: '../../pages/campus-tour/campus-tour'
    }, {
      title: '折扣卡',
      image: '../../images/index-button-panel/index-button-panel7.jpg',
      link: '../../pages/promo-card/promo-card'
    }, {
      title: '赞助商',
      image: '../../images/index-button-panel/index-button-panel8.jpg',
      link: '../../pages/sponsors/sponsors'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigate(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.link
      });
    }
  }
});
