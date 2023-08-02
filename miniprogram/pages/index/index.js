// pages/index/index.js
Page({
    data: {
        swiperImages: [
            "../../images/index/index-swiper/index-swiper1.jpg",
            "../../images/index/index-swiper/index-swiper2.jpg",
            "../../images/index/index-swiper/index-swiper3.jpg",
            "../../images/index/index-swiper/index-swiper4.jpg",
        ],
        row1Buttons: [
            {
                title: "二手闲置",
                image: "../../images/index/index-button-panel/index-button-panel1.jpg",
                link: "../../pages/second-hand-market/second-hand-market",
            },
            {
                title: "租房信息",
                image: "../../images/index/index-button-panel/index-button-panel2.jpg",
                link: "../../pages/housing-market/housing-market",
            },
            {
                title: "话题讨论",
                image: "../../images/index/index-button-panel/index-button-panel3.jpg",
                link: "../../pages/forum/forum",
            },
            {
                title: "新生手册",
                image: "../../images/index/index-button-panel/index-button-panel4.jpg",
                link: "../../pages/new-student-handbook/new-student-handbook",
            },
        ],
        row2Buttons: [
            {
                title: "官方社群",
                image: "../../images/index/index-button-panel/index-button-panel5.jpg",
                link: "../../pages/official-community/official-community",
            },
            {
                title: "带逛校园",
                image: "../../images/index/index-button-panel/index-button-panel6.jpg",
                link: "../../pages/campus-tour/campus-tour",
            },
            {
                title: "折扣卡",
                image: "../../images/index/index-button-panel/index-button-panel7.jpg",
                link: "../../pages/promo-card/promo-card",
            },
            {
                title: "赞助商",
                image: "../../images/index/index-button-panel/index-button-panel8.jpg",
                link: "../../pages/sponsors/sponsors",
            },
        ],
        row3Buttons: [
            {
                title: "学生会",
                subtitle: "简介及成员",
                image: "../../images/index/index-button-row/index-button-row1.jpg",
                link: "../../pages/student-association/student-association",
            },
            {
                title: "学校",
                subtitle: "学校概况",
                image: "../../images/index/index-button-row/index-button-row2.jpg",
                link: "../../pages/school-info/school-info",
            },
        ],
        posts: [
            {
                id: 0,
                title: "【CGSA | 外联部】省钱快报第四期【黑五折扣全面盘点】",
                date: "11-23",
                image: "../../images/index/index-posts/index-posts1.jpg",
            },
            {
                id: 1,
                title: "【CGSA新媒体部 | Trojan宝典】校园美食篇",
                date: "11-19",
                image: "../../images/index/index-posts/index-posts2.jpg",
            },
            {
                id: 2,
                title: "【CGSA | 新媒体部】南加州大学有这么多活动 你竟然不知道？",
                date: "11-14",
                image: "../../images/index/index-posts/index-posts3.jpg",
            },
        ],
    },
    navigate(e) {
      console.log(e);
        wx.navigateTo({
            url: e.currentTarget.dataset.link,
        });
    },
});
