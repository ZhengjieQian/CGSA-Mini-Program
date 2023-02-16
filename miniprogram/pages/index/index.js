// index.js
Page({
  data: {
    showUploadTip: false,
    userinfor:{}, //用户存放获取到的用户信息
    haveCreateCollection: false,
    hiddenButton:false
  },
  getUserInfor(e){
    wx.getUserProfile({
      desc: '用于获取用户信息',
      success:(res)=>{
        const userinfor = res.userInfo         //将用户数据写入缓存
        wx.setStorageSync('UserInfo', userinfor);
        console.log(userinfor);
        this.setData({
          nickName:userinfor.nickName,
          img:userinfor.avatarUrl,
          hiddenButton:true
        });
        //跳回前一个页面
        wx.navigateBack({
          delta:1
        })
      }
    })
  }
});