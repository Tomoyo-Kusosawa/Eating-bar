// miniprogram/pages/lunbo/lunbo.js
var util = require('../../utils/utils.js');
Page({

  data: {
    background: 
    [{title:'中秋安康',url:'/images/post/post001.jpg'}, 
    {title:'中秋安康',url:'/images/post/post001.jpg'}, 
    {title:'中秋安康',url:'/images/post/post001.jpg'},
    {title:'中秋安康',url:'/images/post/post001.jpg'}, 
    {title:'中秋安康',url:'/images/post/post001.jpg'}],
    vertical: false,
    interval: 2000,
    duration: 500,
    bannerCurrent: 0,
    Hei:"" ,
    now_state:null 
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
  },
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
  },
  //
  Popup(e){
    var that = this 
    that.setData({
      now_state:true
    })
    console.log(that.data.now_state);
 
  },
  //点击黑色背景触发的事件
  hideModal(e){
    //首先创建一个动画对象（让页面不在是一个“死页面”）
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    //animation.translateY(300)中的translate函数是表示在y轴上平移多少px，而后面紧接着的.step表示前面动画的完成，可以开始下一个动画了
    animation.translateY(300).step()
    this.setData({
      /*这里的export函数是导出动画队列，在外米的wxml中会用到该数据，同时export方法在调用完后会清掉前面的动画操作 */
      animationData: animation.export(),
    })
    /*这里的setTimeout是一个延时器，而它在这里延时了200ms，然后在执行动画 */
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        now_state: false,
      })
    }.bind(this), 200)
    var that = this
   
  },

})
//
