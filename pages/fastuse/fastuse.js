const { articleList } = require("../../data/article-data.js");
Page({
  data:{
       //类型
       chooseValues:[],
  ArticleLists:articleList,
  typeItems:['菜菜','肉肉','调料','蛋蛋','生存','忌口'],
  typeCurrentIndex:0,
   chooseItems:{
    0:[{
      name:'西兰花',
      value:'001',
      selected:false
    },{
      name:'白萝卜',
      value:'002',
      selected:false
    },{
      name:'芋头',
      value:'003',
      selected:false
    },{
      name:'南瓜',
      value:'004',
      selected:false
    },{
      name:'白菜',
      value:'005',
      selected:false
    },{
      name:'菠菜',
      value:'006',
      selected:false
    },{
      name:'西红柿',
      value:'007',
      selected:false
    },{
      name:'山药',
      value:'008',
      selected:false
    }
  ],
    1:[{
      name:'猪肉',
      value:'101',
      selected:false
    },{
      name:'羊肉',
      value:'102',
      selected:false
    }],
    2:[{
      name:'盐',
      value:'201',
      selected:false
    },{
      name:'味素',
      value:'202',
      selected:false
    },
    {
      name:'水',
      value:'203',
      selected:false
    },
    {
      name:'姜',
      value:'204',
      selected:false
    },{
      name:'葱',
      value:'205',
      selected:false
    },{
      name:'蒜',
      value:'206',
      selected:false
    },{
      name:'黄酒',
      value:'207',
      selected:false
    }
  ],
    3:[{
      name:'鸡蛋',
      value:'301',
      selected:false
    },{
      name:'鹅蛋',
      value:'302',
      selected:false
    }],
    4:[{
      name:'手残',
      value:'401',
      selected:false
    },{
      name:'大佬',
      value:'402',
      selected:false
    }],
    5:[{
      name:'辣',
      value:'501',
      selected:false
    },{
      name:'酸',
      value:'502',
      selected:false
    }],
  },
  },
  //筛选
//下拉收回
sreenShow:function(){
  this.setData({
    sreenShow:!this.data.sreenShow,
  })
},
cancel:function(){
  this.setData({
    sreenShow:false
  })
},
//清空选择
clear:function(){
  console.log("clear已调用")
  for(var i=0,t=1000;i<t;i++){
    if(this.data.chooseItems[i]==null){
      break;
    }
    for(var m=0,n=1000;m<n;m++){
      if(this.data.chooseItems[i][m]==null){
        break;
      }
      this.data.chooseItems[i][m].selected=false
    }
  }
  this.setData({
    chooseItems:this.data.chooseItems
  })
},
//确认筛选
confirm:function(){
  this.setData({
    sreenShow:false, 
  })
},
sortShow:function(){
  this.setData({
    sortShow:!this.data.sortShow
  })
},
//点击遮罩层
mask:function(){
  this.setData({
    sreenShow:false,
    sortShow:false
  })
},
//选择类型
chooseType:function(e){
  const{index}=e.currentTarget.dataset;
  console.log(index);
  this.setData({
    typeCurrentIndex:index,
  })
},
//选择具体内容
chooseItem:function(e){
  this.data.chooseItems[this.data.typeCurrentIndex][e.target.dataset.index].selected=!this.data.chooseItems[this.data.typeCurrentIndex][e.target.dataset.index].selected
  this.setData({
    chooseItems:this.data.chooseItems,
  })
//choosevalue
let arr = this.data.chooseItems
let values = []
for(let key in arr) {
  arr[key].map(item => {
    if(item.selected) {
       values.push(item.value)
    }
  })}
this.setData({
  chooseValues: values
})
this.search()
},
//进入详情页
gotoArticleDetail: function (event) {
  // 当前要跳转到另一个界面，但是会保留现有界面
  wx.navigateTo({
    url: `../article-detail/article-detail?articleid=${event.currentTarget.dataset.articleid}`
  })
},
onLoad(){
  this.search();
},
search(){
  let ArticleLists=articleList.filter(a=>this.data.chooseValues.reduce((p,c)=>p&&a.vavlue.includes(c),articleList))
  console.log(ArticleLists);
  this.setData({
    ArticleLists:ArticleLists
  })
}
})
