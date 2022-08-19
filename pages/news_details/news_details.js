// pages/news/news_details/news_details.js

Page({
  data: {
    flag: false,
    info:{}
  },
  onLoad: function (options) {
    var that=this;
    var info= JSON.parse(options.info);
    console.log(info.detail);
    that.setData({
      info:info
    })
    console.log(this.data.info);
  },
  changeCollect: function () {
    this.setData({
      flag: !this.data.flag
    })
    if (this.data.flag) {
      wx.showToast({
        title: '已收藏',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '已取消收藏',
        icon: 'none',
        duration: 2000
      })
    }
  },
  onUnload: function () {
    wx.reLaunch({
      url: '../news_list/news_list'
    })
  },
  onShareAppMessage: function () {
    return {
     
    }
  },
  onShareTimeline: function(res){
    return {
      
    }
  },
  onPageScroll:function(){

  }
})
