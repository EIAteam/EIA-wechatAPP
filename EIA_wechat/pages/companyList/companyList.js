const companyUrl = require('../../config').companyUrl
var app = getApp();

Page({
  data: {
    companyList:[],
    companyListopen:false,
    createCompanyOpen:false,
  },

  newCompanyInput: function (e) {
    this.setData({
      companyName: e.detail.value
    })
  },

  onShow:function() {
    var self=this
    wx.request({
      url: companyUrl,
      method: 'GET',
      header: {
        'Authorization': 'Token '+app.globalData.token
      },
      success: function (result) {
       console.log('success',result)
      self.setData({
        companyList:result.data
      })
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
      }
    })
  },

  createToggle: function () {
    this.setData({
      createCompanyOpen: !this.data.createCompanyOpen
    })
    wx.navigateTo({
      url: '/pages/createCompany/createCompany'
    })
  },

  kindToggle:function() {
    this.setData({
      companyListopen: !this.data.companyListopen
    })
  }

})