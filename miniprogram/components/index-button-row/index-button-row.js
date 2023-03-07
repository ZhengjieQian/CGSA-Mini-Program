// components/index-button-row/index-button-row.js
// 主页的两个大按钮
Component({
  /**
   * 组件的初始数据
   * buttons 存放两个按钮的图文信息
   */
  data: {
    buttons: [{
      title: '学生会',
      subtitle: '简介及成员',
      image: '../../images/index-button-row/index-button-row1.jpg',
      link: '../../pages/student-association/student-association'
    }, {
      title: '学校',
      subtitle: '学校概况',
      image: '../../images/index-button-row/index-button-row2.jpg',
      link: '../../pages/school-info/school-info'
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
