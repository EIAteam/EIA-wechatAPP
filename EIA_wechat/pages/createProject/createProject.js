const projectUrl = require('../../config').projectUrl
var app = getApp();

Page({
data: {
  companyId:''
},

newProjectInput: function (e) {
  this.setData({
    projectName: e.detail.value
  })
},

onLoad:function(query) {
  this.setData({
    companyId:query.companyId
  })
},

createProject: function () {
  var self=this
  wx.request({
    url: projectUrl,
    method: 'POST',
    data: {
      projectName: self.data.projectName,
      company:self.data.companyId
    },
    header: {
      'Authorization': 'Token ' + app.globalData.token
    },
    success: function (result) {
      console.log('success', result)
      wx.navigateTo({
        url: '/pages/companyList/companyList'
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
},
})
