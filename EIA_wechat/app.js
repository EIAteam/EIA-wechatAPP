//app.js
App({
  globalData:{
    token: "",
    longitude:null,
    latitude:null,
  },
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
})