var util = require('../../utils/util.js')
var formatLocation = util.formatLocation
var app = getApp();


Page({
  data:{
   hasLocation:false,
   located:false,
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },

  startLocation: function() {
    this.setData({
      hasLocation: true,
    })
  },

  closeLocation: function() {
    this.setData({
      hasLocation: false,
    })
  },

  getLocation: function() {
   this.mapCtx = wx.createMapContext('myMap')
    var self = this
    this.mapCtx.moveToLocation()
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res);
        self.setData({
          located:true,
          location: formatLocation(res.longitude, res.latitude)
        })
        app.globalData.longitude = res.longitude
        app.globalData.latitude = res.latitude
      }
    })
  }
})

