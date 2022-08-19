// pages/article-detail/article-detail.js
var articleData = require("../../data/article-data.js");
Page({
  data: {},
  onLoad: function (options) {
    console.log(options.articleid);
    var articleid=options.articleid;
    var Data = articleData.articleList[articleid];
    this.setData({
      articleData: Data
    })
 
    }
})