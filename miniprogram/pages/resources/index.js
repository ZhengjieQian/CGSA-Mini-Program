// pages/resources/index.js
// 资源页
Page({
  /**
   * 页面的初始数据
   * topImage 页面的头图
   * resources JSON 数组，每个 JSON 对象都是一条资源
   */
  data: {
    topImage: '../../images/resources/resources_top.jpg',
    resources: [{
      id: 0,
      title: '# 【CGSA新媒体部 | Trojan宝典】LA出游篇 #',
      image: '../../images/resources/resources1.jpg'
    }, {
      id: 1,
      title: '# 【USC薅羊毛篇】是时候告诉你这些省钱秘籍啦 #',
      image: '../../images/resources/resources2.jpg'
    }, {
      id: 2,
      title: '# CGSA 干货 | 如何在夏天到来前练出八块腹肌 #',
      image: '../../images/resources/resources3.jpg'
    }, {
      id: 3,
      title: '# LA留守儿童宝典(1) #',
      image: '../../images/resources/resources4.jpg'
    }, {
      id: 4,
      title: '# 全美肺炎确诊破20万！宅家囤货宝典快收藏起来吧！',
      image: '../../images/resources/resources5.jpg'
    }]
  }
});