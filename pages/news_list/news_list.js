// pages/news/news_list/news_list.js
Page({
  data: {
    newsList: [{
        id: 0,
        title: '[长期置顶]目前已知问题',
        author: 'admin',
        publishDate: '2022-8-17',
        image: '/images/news.jpg',
        detail: ['目前已知问题说明','1.快速使用页面点击确认后无法立即生效','2.在无结果时有小概率事件发生报错现象','3.部分图片资源错误，请等待后续版本中修复']
      },
      {
        id: 1,
        title: 'V0.0.0.003版本更新说明',
        author: 'admin',
        publishDate: '2022-08-17',
        image: '/images/news.jpg',
        detail:['更新了每周推荐页面，修复了一些已知问题']
      },
      {
        id: 2,
        title: 'V0.0.0.002版本更新说明',
        author: 'admin',
        publishDate: '2022-08-15',
        image: '/images/news.jpg',
        detail: ['更新了导航栏','对部分图片资源进行了替换','修复了一些已知问题']
      }
    ]
  },
  onLoad: function (options) {

  },
  todetail: function (e) {
    var that=this;
    const data= that.data.newsList[e.target.dataset.options];
    const target = JSON.stringify(data);
    console.log(target);
    wx.navigateTo({
      url: '../news_details/news_details?info=' + target
    })
  }
})
