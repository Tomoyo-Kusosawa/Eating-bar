var local_database = [
  {
      /*date: "Sep 18 201nei
      title: "\测试内容",
      vavlue: ['001','002','003'],
      imgSrc: "/images/1.jpg",
      avatar: "/images/1.jpg",
      content: "测试菜谱1",
      reading: "0",
      collection: "0",
      headImgSrc: "/images/1.jpg",
      author: "林白衣",
      dateTime: "24小时前",
      detail: "这里是内容",
      articleid: 0,
      music: {
          url: "",
          title: "夜夜夜夜-齐秦",
          coverImg: ""
      }*/
  },
  {
    // 缺少外部链接链接，后续增加
      title: "实验菜谱1",
      content: "简短简介",
      imgSrc: "/images/post/bl.png",
      reading: 62,//阅读量（后续增加点击数增加目前为x）
      detail: "这里是内容，对于内容的分布，目前只设置了一部分",
      collection: 92,//收藏数
      dateTime: "24小时前",
      headImgSrc: "/images/post/bl.png",
      author: "admin",
      date: "Nov 20 2016",
      vavlue: ['001','002','003'],
      /*筛选页面对检查什么为true，将符合的value检查传输，*/
      avatar: "/images/avatar/1.png",
      articleid: 1,//重点：这里通过articled来进入指定页面，对于页面的设定看article-detail
     /* music: {
          url: "http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",
          title: "鬼迷心窍-李宗盛",
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000"
      }*/
  },
  {
      //按住alt + shift + F 可以格式化代码样式
     /* title: "当我们在谈论经济学时，我们在谈论什么?",
      content: "引言在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：...",
      detail: "1 引言\n\n在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：有些人套用“经济理论“的知识去解释现实中发生的经济事件，结果发现很多事情讲不通，或者发现”理论告诉我们的“与现实发生的是相反的。也有学生经常跟我说：经济学有什么用？为了说明这个，我经常从两个方面来进行解释，尝试用我个人所擅长的解决问题的视角和他们能够听懂的方法来说明经济学是什么，它的作用边界在哪里：\r\n\n2 ”简笔素描“与”油画肖像“我们给人画肖像画，可以用简笔素描，也可以用油画肖像。油画肖像可以在最大程度上保存了人物的各方面的细节和特点，而简笔素描则忽略了很多细节。尽管简笔素描忽略了人物的许多细节，但我们仍旧能够很容易的认出画中的人物是谁。为什么？因为这种方法保留了人物最显著的特征，以至于我们可以忽略其次要特征而对人物做出判定。\n\n2.1 ”简笔素描“对于绝大多数的非经济学专业大众而言（经济学相关专业硕士学历以上），人们所接触到的经济学都是初级微观经济学。所谓的初级微观经济学，对于经济问题的”画法“就是一种”简笔素描“。比如初级微观经济学教材中广为使用的这种一元一次需求函数：y=bx+a，需求量的唯一变量是产品价格。但仅凭直觉我们就可以断言，现实中影响需求量的因素绝不止价格这一种，因此我们可以认为这个模型对经济问题的描述是失真的。然而但这种失真却是必要的和有意义的，其意义在与它利于揭示价格对于需求的影响，而不在于否定影响需求的其他因素——",
      imgSrc: "/images/post/sls.jpg",
      headImgSrc: "/images/post/sls.jpg",
      reading: 62,
      collection: 92,
      author: "知乎",
      date: "Nov 12 2016",
      dateTime: "三天前",
      avatar: "/images/avatar/3.png",
      articleid: 2,
      music: {
          url: "http://ws.stream.qqmusic.qq.com/C100004HLusI2lLjZy.m4a?fromtag=38",
          title: "女儿情-万晓利",
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000"
      }*/
  },
  {
      /*title: "微信·小程序开发工具安装指南",
      content: "这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序",
      imgSrc: "/images/post/xiaolong.jpg",
      reading: 102,
      detail: "这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序:微信小程序不能开发游戏类、直播类功能，小程序每个人关注的上限是20个（还不确定，不过我相信这是真的，这次公布的API里并没有视频组件。微信太大，苹果要有所顾忌，但是微信也要做出相应的让步)微信目前有没有同苹果商谈好，还是个未知数，毕竟会对AppStore有一定的冲击。抛弃了大量的javascript组件后，这个生态体系变得相当的封闭，微信解释肯定是：为了更好的性能提升。那么我们拭目以待。小程序的入口是微信里的三级菜单，就是在“Tab栏发现里的游戏下面加入一个“小程序”。反正，这一栏里的购物和游戏我是从来没点进去过的。以腾讯的尿性，小程序同服务号一样，其关系链及重要功能的开放程度会因“人”而异。对，优质的接口只会开放给腾讯的儿子们（滴滴呀、京东呀）",
      collection: 92,
      dateTime: "24小时前",
      headImgSrc: "/images/post/xiaolong.jpg",
      author: "猫是猫的猫",
      date: "Nov 20 2016",
      avatar: "/images/avatar/5.png",
      articleid: 3,
      music: {
          url: "http://ws.stream.qqmusic.qq.com/C100002mWVx72p8Ugp.m4a?fromtag=38",
          title: "恋恋风尘-老狼",
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001VaXQX1Z1Imq.jpg?max_age=2592000",
      }*/
  },
  {
     /* title: "从视觉到触觉 这款VR手套能给你真实触感",
      content: "8月29日消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品",
      imgSrc: "/images/post/vr.png",
      reading: 102,
      detail: "消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品。该产品名为“Dexmo”，它是一款像手套那样戴在手上使用的未来主义外骨骼。它内置大量的元件，能够与VR体验进行交互，可帮助你感觉握在你的双手的虚拟物体。Dexmo据Dexta称，“Dexmo是一款针对你的双手的机械外骨骼。它能够捕捉你的手部运动，以及提供即时的力反馈。有了Dexmo，你可以感受到虚拟物体的大小、形状和坚硬度。你可以接触数字世界。”市面上已经有数款产品旨在处理虚拟现实中的手部交互，也有相关的产品即将要进入市场。例如，颇受欢迎的HTC Vive头盔配有一副控制器，其控制器能够使得追踪系统看到你的双手，让你可以用它们来在特定体验中与物体进行交互。今年晚些时候，Oculus将开始出货类似的手部控制产品Oculus Touch。10月，索尼也将开始出货配备两个PlayStation Move手部控制器的PS VR。Leap Motion甚至更进一步：利用传感器来追踪手指和手部的运动。",
      collection: 26,
      dateTime: "24小时前",
      headImgSrc: "/images/post/vr.png",
      author: "深白色",
      date: "Nov 20 2016",
      avatar: "../../../images/avatar/3.png",
      articleid: 4,
      music: {
          url: "http://ws.stream.qqmusic.qq.com/C100000Zn0vS4fKKo8.m4a?fromtag=38",
          title: "沉默是金-张国荣",
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000003at0mJ2YrR2H.jpg?max_age=2592000"
      }*/
  },
  {
      /*title: "爱奇艺创维开展战略合作，合力布局开放娱乐生态",
      content: "爱奇艺和创维分别作为国内领先的在线视频品牌",
      imgSrc: "/images/iqiyi.png",
      reading: 96,
      detail: "爱奇艺和创维分别作为国内领先的在线视频品牌和家电品牌。双方一直锐意创新，为用户提供优质的服务体验和产品体验。据悉，爱奇艺与创维将展开从资本到VIP会员服务等各方面的深入合作。籍由此次合作，爱奇艺将战略投资创维旗下拥有高端互联网电视品牌的酷开公司。从下一财年开始，创维旗下互联网电视将通过银河互联网电视集成播控平台，预置VIP会员服务及相关内容。这种捆绑终端与VIP内容的全新销售模式，将大幅提升互联网电视终端用户的体验，给予用户更多优质内容的选择。",
      collection: 26,
      dateTime: "21小时前",
      headImgSrc: "/images/iqiyi.png",
      author: "深白色",
      date: "Nov 20 2016",
      avatar: "../../../images/avatar/5.png",
      articleid: 5,
      music: {
          url: "http://ws.stream.qqmusic.qq.com/C100002I8eGJ28BI17.m4a?fromtag=38",
          title: "朋友-谭咏麟",
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004eGsCN3SUheO.jpg?max_age=2592000"
      }*/
  },
]
// 输出窗口
module.exports = {
  articleList: local_database
}


