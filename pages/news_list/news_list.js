// pages/news/news_list/news_list.js
Page({
  data: {
    newsList: [{
        id: 0,
        title: '[长期置顶]目前已知问题',
        author: 'admin',
        publishDate: '2022-8-17',
        image: '/images/news.jpg',
        detail: ['目前已知问题说明','1.授权登录界面失效','2.小概率事件在首页发生报错现象','3.菜品详情页收藏功能失效','4.在使用页的滑动菜品显示失效','4.部分图片资源错误，请等待后续版本中修复','后续增加内容','1.菜品详情页优化']
      },
      {
        id: 1,
        title: 'V1.0.1版本更新说明',
        author: 'admin',
        publishDate: '2022-08-21',
        image: '/images/news.jpg',
        detail:['将通知功能汇总到我的界面内，新增了反馈与提交中心（我的-反馈与提交中心）','修复了一些已知问题']
      },
      {
        id: 2,
        title: 'V0.0.005Beta版本更新说明',
        author: 'admin',
        publishDate: '2022-08-21',
        image: '/images/news.jpg',
        detail:['更新了每周推荐页面，修复了一些已知问题']
      },
      {
        id: 3,
        title: 'V0.0.0.003Beta版本更新说明',
        author: 'admin',
        publishDate: '2022-08-15',
        image: '/images/news.jpg',
        detail: ['修复了一些已知问题']
      },
      {
        id: 4,
        title: 'V0.0.0.002Beta版本更新说明',
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
