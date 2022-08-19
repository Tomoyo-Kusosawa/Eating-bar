// pages/demo/demo.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ArticleList: [
      {
        article_id: 1,
        title: 'This is Title',
        release_time: '2020-03-12 09:42:19',
        image: '/images/meal/001.jpg',
        text: 'This is content of article. This is content of article. ',
        teacher_id: 1
      },
      {
        article_id: 2,
        title: 'This is Title This is Title',
        release_time: '2020-03-12 09:42:19',
        image: 'https://img1.baidu.com/it/u=1001511637,3492134614&fm=26&fmt=auto&gp=0.jpg',
        text: 'This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. ',
        teacher_id: 2
      },
      {
        article_id: 3,
        title: 'This is Title This is Title This is Title',
        release_time: '2020-03-12 09:42:19',
        image: 'https://img1.baidu.com/it/u=1001511637,3492134614&fm=26&fmt=auto&gp=0.jpg',
        text: 'This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. ',
        teacher_id: 3
      },
      {
        article_id: 4,
        title: 'This is Title This is Title This is Title This is Title',
        release_time: '2020-03-12 09:42:19',
        image: 'https://img1.baidu.com/it/u=1001511637,3492134614&fm=26&fmt=auto&gp=0.jpg',
        text: 'This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. This is content of article. ',
        teacher_id: 4
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
