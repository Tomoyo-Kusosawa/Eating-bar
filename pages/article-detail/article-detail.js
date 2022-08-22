// pages/article-detail/article-detail.js
var articleData = require("../../data/article-data.js");
Page({
  data: {},
  flag:false,
  onLoad: function (options) {
    console.log(options.articleid);
    var articleid=options.articleid;
    var Data = articleData.articleList[articleid];
    this.setData({
      articleData: Data,
      data: articleData.articleList[articleid].BV
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