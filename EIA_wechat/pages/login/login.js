const loginUrl = require('../../config').loginUrl
var app = getApp();

Page({
  data: {
    loading:false,
    username:'',
    password:''
  },

  onShow(){
    var self=this
    wx.getStorage({
      key: 'username',
      success: function (res) {
        console.log(res)
        self.setData({
          username: res.data
        })
      }
    })
    wx.getStorage({
      key: 'password',
      success: function (res) {
        self.setData({
          password: res.data
        })
      }
    })
  },

  usernameInput: function(e) {
    this.setData({
      username:e.detail.value
    })
  },

  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  handleLogin:function() {
    var self=this
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '输入不能为空',
        icon: 'loading',
        duration: 2000
      })  
    }else{
      console.log(this.data.username,this.data.password)
      this.setData({
        loading: true
      })
      // 这里修改成跳转的页面

      wx.request({
        url: loginUrl,
        method: 'POST',
        data: {
          username: this.data.username,
          password: this.data.password
        },
        success: function (result) {
          wx.setStorage({
            key: "username",
            data: self.data.username
          })
          wx.setStorage({
            key: "password",
            data: self.data.password
          })
          wx.showToast({
            title: '请求成功',
            icon: 'success',
            mask: true,
            duration: 2000
          })
          self.setData({
            loading: false
          })
          console.log('request success', result)
          app.globalData.token=result.data.token
          wx.navigateTo({
            url: '/pages/companyList/companyList'
          })
        },

        fail: function ({ errMsg }) {
          console.log('request fail', errMsg)
          self.setData({
            loading: false
          })
        }
      })
    }
  }
})