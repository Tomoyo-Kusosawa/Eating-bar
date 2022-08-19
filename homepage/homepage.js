// miniprogram/pages/lunbo/lunbo.js
Page({

  data: {
    background: [{title:'图一',url:'/images/meal/004..jpg'}, 
    {title:'图二',url:'/images/meal/001.jpg'}, 
    {title:'图三',url:'/images/meal/002.jpg'},
    {title:'图四',url:'/images/meal/003.jpg'}, 
    {title:'图五',url:'/images/meal/004..jpg'}],
    vertical: false,
    interval: 2000,
    duration: 500,
    bannerCurrent: 0,
    Hei:""    
  },
  //goto
  onTapDayWeather(){
    wx.showToast()
  },
  goTo1:function(){
    wx.navigateTo({
      url: '/pages/fastuse/fastuse',
    })
  },
  goTo2:function(){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
//轮播current切换监听事件
bannerChange: function(e){
  console.log("监听轮播事件",e);
  this.setData({
    bannerCurrent: e.detail.current
  })
},


  imgH:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
    var imgh=e.detail.height;　　　　　　　　　　　　　　　　//图片高度
    var imgw=e.detail.width;
    var swiperH=winWid*imgh/imgw + "px"　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
        Hei:swiperH　　　　　　　　//设置高度
    })
},

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
