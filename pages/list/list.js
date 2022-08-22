// pages/demo/demo.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ArticleList: [
      {
        article_id: 1,
        title: '周一',
        release_time: '2022-08-22 09:42:19',
        image: '/images/date/monday.png',
        reason:'美好的一周从周一开始，今日推荐菜品'+"水煮西兰花"
      },
      {
        article_id: 2,
        title: '周二',
        release_time: '2022-08-22 09:42:19',
        image: '/images/date/2.png',
        reason:'美好的一周从周二开始，今日推荐菜品'+"水煮菠菜"
      },
      {
        article_id: 3,
        title: '周三',
        release_time: '2022-08-22 09:42:19',
        image: '/images/date/3.png',
        reason:'美好的一周从周三开始，今日推荐菜品'+"猪肉炖白菜"
  
      },
      {
        article_id: 4,
        title: '周四',
        release_time: '2020-03-12 09:42:19',
        image: '/images/date/icons8-星期四-48.png',
        reason:'美好的一周从周四开始，今日推荐菜品'+"红烧羊肉萝卜"
      },  {
        article_id: 5,
        title: '周五',
        release_time: '2022-08-22 09:42:19',
        image: '/images/date/5.png',
        reason:'美好的一周从周五开始，今日推荐菜品'+"山药羊肉汤"
      }
    ]
  },

  /**
   * 进入文章详情界面
   */
  gotoArticleDetail: function (event) {
    // 当前要跳转到另一个界面，但是会保留现有界面
    wx.navigateTo({
      url: `../article-detail/article-detail?articleid=${event.currentTarget.dataset.articleid}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
