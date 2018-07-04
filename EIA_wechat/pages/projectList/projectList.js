const projectUrl = require('../../config').projectUrl
var app = getApp();

Page({
  data: {
    projectList:[
    ],
    projectListopen: false,
  },


  onLoad:function(query) {
    var self=this
    this.setData({
      companyId:query.companyId,
      companyName:query.companyName
    })
    wx.request({
      url: projectUrl+'?'+'companyId='+query.companyId,
      method: 'GET',
      header: {
        'Authorization': 'Token '+app.globalData.token
      },
      success: function (result) {
       console.log('success',result)
      self.setData({
        projectList:result.data
      })
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
      }
    })
  },

  createToggle: function () {
    var self=this
    this.setData({
      createProjectOpen: !this.data.createProjectOpen
    })
    wx.navigateTo({
      url: '/pages/createProject/createProject?companyId='+this.data.companyId
    })
  },

  kindToggle: function () {
    this.setData({
      projectListopen: !this.data.projectListopen
    })
  }

})