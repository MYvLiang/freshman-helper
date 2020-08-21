Page({
  data: {
    array: ['cloud://develop-fx3l0.6465-develop-fx3l0-1301738912/images/calendar/2020_2021_1.jpg', 
    'cloud://develop-fx3l0.6465-develop-fx3l0-1301738912/images/calendar/2019_2020_2.png', 
    'cloud://develop-fx3l0.6465-develop-fx3l0-1301738912/images/calendar/2019_2020_1.jpg', 
    'cloud://develop-fx3l0.6465-develop-fx3l0-1301738912/images/calendar/2018_2019_2.jpg',
    'cloud://develop-fx3l0.6465-develop-fx3l0-1301738912/images/calendar/2018_2019_1.jpg',
    'cloud://develop-fx3l0.6465-develop-fx3l0-1301738912/images/calendar/2017_2018_2.png',
    'cloud://develop-fx3l0.6465-develop-fx3l0-1301738912/images/calendar/2017_2018_1.png'],
    array1: ['2020-2021第一学期', '2019-2020第二学期', '2019-2020第一学期', '2018-2019第二学期', '2018-2019第一学期',
    '2017-2018第二学期', '2017-2018第一学期'],
    objectArray: [
      {
        id: 0,
        name: '2020-2021第一学期'
      },
      {
        id: 1,
        name: '2019-2020第二学期'
      },
      {
        id: 2,
        name: '2019-2020第一学期'
      },
      {
        id: 3,
        name: '2018-2019第二学期'
      },
      {
        id: 4,
        name: '2018-2019第一学期'
      },
      {
        id: 5,
        name: '2017-2018第二学期'
      },
      {
        id: 6,
        name: '2017-2018第一学期'
      },
    ],
    index: 0,
  },
  
  //切换学年
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  
  //放大预览图片
  preview(e){
    let currentUrl=e.currentTarget.dataset.src
    console.log(currentUrl)
    let that=this
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: that.data.array // 需要预览的图片http链接列表
    })
  }
  
})