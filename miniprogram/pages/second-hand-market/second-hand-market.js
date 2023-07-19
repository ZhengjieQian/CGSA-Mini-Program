// pages/second-hand-market/second-hand-market.js
// 二手市场
Page({
    data: {
        minPrice: "",
        maxPrice: "",
        comprehensiveSortValue: 0,
        comprehensiveSortOptions: [
            { text: "综合排序", value: 0, icon: "" },
            { text: "最新发布", value: 1, icon: "" },
            { text: "价格降序", value: 2, icon: "" },
            { text: "价格升序", value: 3, icon: "" },
        ],
        priceTitle: "价格不限",
        priceSortValue: 0,
        priceSortOptions: [
            { text: "价格不限", value: 0, icon: "" },
            { text: "$50以下", value: 1, icon: "" },
            { text: "$50-$100", value: 2, icon: "" },
            { text: "$100-$200", value: 3, icon: "" },
            { text: "$200以上", value: 4, icon: "" },
        ],
        conditionSortValue: 0,
        conditionSortOptions: [
            { text: "新旧不限", value: 0, icon: "" },
            { text: "全新", value: 1, icon: "" },
            { text: "二手", value: 2, icon: "" },
        ],
        searchIcon: "../../images/second-hand-market/search_icon.jpg",
        searchBarKeyword: "",
        filterItemIcon: "../../images/second-hand-market/filter_item_icon.jpg",
        tags: [
            "全部",
            "电子产品",
            "交通工具",
            "家具家电",
            "厨房用品",
            "书籍教具",
            "美妆服饰",
            "宠物用品",
            "汽车用品",
            "文体器材",
            "票务卡券",
            "其他物品"
        ],
        activeTagIndex: 0,
        products: [],
        addPostImage: '../../images/second-hand-market/add_post.png'
    },
    onLoad: function() {
      const productDB = wx.cloud.database().collection('second_hand_product');
      productDB.get().then(res => {
        this.setData({
          products: res.data
        });
      });
    },
    // onReady() {
    //     this.setData({
    //         priceTitle: this.data.priceSortOptions[0].text,
    //     });
    // },
    // minPriceInput(e) {
    //     this.setData({
    //         minPrice: e.detail.value,
    //     });
    // },
    // maxPriceInput(e) {
    //     this.setData({
    //         maxPrice: e.detail.value,
    //     });
    // },
    getPriceRange() {
        if (!this.data.minPrice || !this.data.maxPrice) {
            this.selectComponent("#price-range").toggle();
            return;
        }
        if (parseInt(this.data.minPrice) > parseInt(this.data.maxPrice)) {
            let min = this.data.maxPrice;
            let max = this.data.minPrice;
            this.setData({
                minPrice: min,
                maxPrice: max,
            });
        }
        console.log("价格范围" + this.data.minPrice + "-" + this.data.maxPrice);
        this.setData({
            priceTitle: "$" + this.data.minPrice + "-$" + this.data.maxPrice,
            priceSortValue: 0,
        });
        this.selectComponent("#price-range").toggle();
    },
    clearPrice() {
        this.setData({
            minPrice: "",
            maxPrice: "",
        });
    },
    onPriceOptionSelect(e) {
        // console.log(e);
        if (!typeof e.detail === "number") {
            return;
        }
        this.setData({
            priceSortValue: e.detail,
            priceTitle: this.data.priceSortOptions[e.detail].text,
            minPrice: "",
            maxPrice: "",
        });
        // console.log(
        //     "价格排序" +
        //         this.data.priceSortOptions[this.data.priceSortValue].text
        // );
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
    addPostTapped() {
      wx.navigateTo({
        url: '../publish-second-hand/publish-second-hand',
      })
    },
    // 从 Date() 方法创建的对象中获取月份和日期
    parseDate(date) {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      function formatNumber(n) {
        n = n.toString();
        return n[1] ? n : '0' + n;
      }
      return [year, month, day].map(formatNumber).join('-');
    },
});
