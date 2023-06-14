// pages/events/index.js
// 活动页面
Page({
  /**
   * 页面的初始数据
   * tab 选项卡标题
   * curTabIndex 当前选项卡的下标
   */
  data: {
    tab: [{
      title: '最新活动',
      data: []
    }, {
      title: '往期活动',
      data: [{
        id: 0,
        title: 'CGSA Career | 疫情期间特别版【Cloud Coffee Chat】',
        location: '线上（Zoom）',
        date: '2020-04-18 14:00 — 2020-04-18 16:30',
        image: '../../images/events/events1.jpg'
      }, {
        id: 1,
        title: 'CGSA Career | 免费职业照 春招你准备好了吗？',
        location: 'USC Mudd Hall of Philosophy Courtyard',
        date: '2020-02-10 13:00 — 2020-02-10 16:00',
        image: '../../images/events/events2.jpg'
      }, {
        id: 2,
        title: '2020 Spring 新生见面会，1月19日不见不散！',
        location: 'SAL 101',
        date: '2020-01-19 13:00 — 2020-01-19 16:00',
        image: '../../images/events/events3.jpg'
      }, {
        id: 3,
        title: '2018 Fall 因为你们而精彩',
        location: 'USC',
        date: '2018-01-01 16:00 — 2018-12-31 16:00',
        image: '../../images/events/events4.jpg'
      }]
    }],
    curTabIndex: 0,
    noEventImage: '../../images/events/no_event.jpg',
    eventLocationIcon: '../../images/events/event_location_icon.jpg',
    eventDateIcon: '../../images/events/event_date_icon.jpg'
  },
  /**
   * 页面的方法
   * changeTab(e) 触发更换选项卡
   * changeSwiper(e) 左右滑动页面内容时触发更换选项卡
   */
  changeTab(e) {
    let tappedTabIndex = e.currentTarget.dataset.currentIndex;
    if (this.data.curTabIndex != tappedTabIndex) {
      this.setData({
        curTabIndex: tappedTabIndex
      });
    }
  },
  changeSwiper(e) {
    let targetTabIndex = e.detail.current;
    this.setData({
      curTabIndex: targetTabIndex
    });
  }
});