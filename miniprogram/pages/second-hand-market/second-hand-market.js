// pages/second-hand-market/second-hand-market.js
// 二手市场
Page({
    data: {
        searchIcon: "../../images/second-hand-market/search_icon.jpg",
        searchBarKeyword: "",
        filterItemIcon: "../../images/second-hand-market/filter_item_icon.jpg",
        tags: [
            "全部",
            "电子产品",
            "交通工具",
            "家具家电",
            "厨房用品",
            "学习资料",
        ],
        activeTagIndex: 0,
        products: [
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出2",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出3",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出4",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出5",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
            {
                image: "../../images/second-hand-market/product_1.jpg",
                title: "红色 高颜值自行车 骨折随缘出6",
                price: "60",
                views: "72",
                avatar: "../../images/second-hand-market/product_1_avatar.jpg",
                username: "徐明玺Aaron",
                location: "Los Angeles",
                date: "04-26",
            },
        ],
    },
    searchBtnTapped() {
        console.log("搜索" + this.data.searchBarKeyword);
    },
    searchInput(e) {
        this.setData({
            searchBarKeyword: e.detail.value,
        });
    },
    changeTag(e) {
        this.setData({
            activeTagIndex: e.currentTarget.dataset.currentIndex,
        });
    },
    productTapped(e) {
        console.log("打开商品页" + e.currentTarget.dataset.productIndex);
        wx.navigateTo({
            url: "../../pages/second-hand-market-detail/second-hand-market-detail",
        });
    },
});
