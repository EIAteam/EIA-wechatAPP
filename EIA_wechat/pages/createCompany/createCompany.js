const companyUrl = require('../../config').companyUrl
var app = getApp();

Page({
data: {
},

newCompanyInput: function (e) {
  this.setData({
    companyName: e.detail.value
  })
},

createCompany: function () {
  var self = this
  if (this.data.companyName.length == 0) {
    wx.showToast({
      title: '输入不能为空',
      icon: 'loading',
      duration: 2000
    })
  } else {
    wx.request({
      url: companyUrl,
      method: 'POST',
      data: {
        companyName: self.data.companyName
      },
      header: {
        'Authorization': 'Token ' + app.globalData.token
      },
      success: function (result) {
        console.log('success', result)
        wx.navigateBack({
          delta: 1
        })
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        wx.showToast({
          title: '创建失败',
          icon: 'loading',
          duration: 2000
        })
      }
    })
  }
},
})
