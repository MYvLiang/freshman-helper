Page({
  data: {
    melist: [
      {
        imagePath: "/images/lunbotu/one.jpg",
      },
      {
        name: "/images/geren/four.jpg",
        imagePath: "/images/geren/five.jpg",
        time: "/images/geren/six.jpg",
      },

    ]
  },
  onShareAppMessage: function () {
    return {
      title: '邀你使用iknow佛大',
      path: '/pages/index/index',
      imageUrl: 'https://fosuwxapp.gitee.io/wxapp-images/indexImages/shareapp200902.png'
    }
  }
})